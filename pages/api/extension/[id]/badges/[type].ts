import { NextApiRequest, NextApiResponse } from 'next'
import { extensionData } from 'data/extensions'
import axios from 'axios'

const types = [
    {
        name: 'version',
        label: 'Latest version',
        query: '$.result.releases[:1].tag',
        prefix: 'v'
    },
    {
        name: 'min_fossbilling_version',
        label: 'Minimum FOSSBilling version',
        query: '$.result.releases[:1].min_fossbilling_version',
        prefix: ''
    },
    {
        name: 'license',
        label: 'License',
        query: '$.result.license.name',
        prefix: ''
    },
]

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(extensionData)) {
      throw new Error('Cannot find extension data')
    }

    const extension = extensionData.find(p => p.id.toString().toLowerCase() === _req.query.id.toString().toLowerCase())

    if (!extension) {
      throw new Error(`Cannot find extension by id: ${_req.query.id}`)
    } else {
        try {
            const type = types.find(t => t.name === _req.query.type.toString().toLowerCase());
            let imageURL = '';

            if (!type) {
                imageURL = `https://img.shields.io/badge/Unknown%20type-${encodeURIComponent(_req.query.type.toString())}-critical`
            } else {
                imageURL = `https://img.shields.io/badge/dynamic/json?color=blue&label=${encodeURIComponent(type.label)}&query=${encodeURIComponent(type.query)}&url=https%3A%2F%2Fextensions.fossbilling.org%2Fapi%2Fextension%2F${extension.id}`
                if (type.prefix) {
                    imageURL += `&prefix=${encodeURIComponent(type.prefix)}`
                }
            }

            const response = await axios.get(imageURL, { responseType: 'arraybuffer' });
            const contentType = response.headers['content-type'];
            res.setHeader('Content-Type', contentType);
    
            res.send(response.data);
        } catch (err: any) {
            console.error(err);
            res.status(500).json({ error: { message: "An error occurred while generating the image." } })
        }
    }
  } catch (err: any) {
    res.status(500).json({ error: { message: err.message } })
  }
}

export default handler