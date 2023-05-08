import { NextApiRequest, NextApiResponse } from 'next'
import { extensionData } from 'data/extensions'
import { getLatestRelease } from 'interfaces'
import axios from 'axios'

const typeToQueryMap = {
    'version': '$.result.releases[:1].tag',
    'min_fossbilling_version': '$.result.releases[:1].min_fossbilling_version',
}

const typeToLabelMap = {
    'version': 'Latest version',
    'min_fossbilling_version': 'Minimum FOSSBilling version',    
}

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
            const type = _req.query.type.toString().toLowerCase();
            let imageURL = '';

            if (!typeToQueryMap[type] || !typeToLabelMap[type]) {
                imageURL = `https://img.shields.io/badge/Unknown%20type-${encodeURIComponent(type)}-critical`
            } else {
                imageURL = `https://img.shields.io/badge/dynamic/json?color=blue&label=${encodeURIComponent(typeToLabelMap[type])}&prefix=v&query=${encodeURIComponent(typeToQueryMap[type])}&url=https%3A%2F%2Fextensions.fossbilling.org%2Fapi%2Fextension%2F${extension.id}`
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