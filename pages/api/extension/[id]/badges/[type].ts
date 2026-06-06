import { NextApiRequest, NextApiResponse } from 'next'
import { extensionData } from 'data/extensions'
import { sortReleasesDescending } from 'interfaces'
import { makeBadge } from 'badge-maker'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(extensionData)) {
      throw new Error('Cannot find extension data')
    }

    const id = _req.query.id
    if (!id || Array.isArray(id)) {
      throw new Error('Invalid extension id')
    }

    const extension = extensionData.find(p => p.id.toString().toLowerCase() === id.toString().toLowerCase())

    if (!extension) {
      throw new Error(`Cannot find extension by id: ${id}`)
    } else {
      const types = [
        {
          name: 'version',
          label: 'Latest version',
          message: 'v' + sortReleasesDescending(extension.releases)[0].tag,
        },
        {
          name: 'min_fossbilling_version',
          label: 'Minimum FOSSBilling version',
          message: 'v' + sortReleasesDescending(extension.releases)[0].min_fossbilling_version,
        },
        {
          name: 'license',
          label: 'License',
          message: extension.license.name,
        },
      ]

      try {
        const typeParam = _req.query.type
        if (!typeParam || Array.isArray(typeParam)) {
          throw new Error('Invalid badge type')
        }
        const type = types.find(t => t.name === typeParam.toLowerCase());

        let format = {
          label: 'Unknown type',
          message: typeParam,
          color: 'red'
        };

        if (type) {
          format.label = type.label;
          format.message = type.message;
          format.color = 'blue';
        }

        const colorParam = _req.query.color
        if (colorParam && !Array.isArray(colorParam)) {
          format.color = colorParam;
        }

        const svg = makeBadge(format);

        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(svg);
      } catch {
        res.status(500).json({ error: { message: "An error occurred while generating the badge." } })
      }
    }
  } catch (err: any) {
    res.status(500).json({ error: { message: err.message } })
  }
}

export default handler