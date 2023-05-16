import { NextApiRequest, NextApiResponse } from 'next'
import { extensionData } from 'data/extensions'
import { sortReleasesDescending } from 'interfaces'
import { makeBadge } from 'badge-maker'

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(extensionData)) {
      throw new Error('Cannot find extension data')
    }

    const extension = extensionData.find(p => p.id.toString().toLowerCase() === _req.query.id.toString().toLowerCase())

    if (!extension) {
      throw new Error(`Cannot find extension by id: ${_req.query.id}`)
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
        const type = types.find(t => t.name === _req.query.type.toString().toLowerCase());

        var format = {
          label: 'Unknown type',
          message: _req.query.type.toString(),
          color: 'red'
        };

        if (type) {
          format.label = type.label;
          format.message = type.message;
          format.color = 'blue';
        }

        if (_req.query.color) {
          format.color = _req.query.color.toString();
        }

        const svg = makeBadge(format);

        res.setHeader('Content-Type', 'image/svg+xml');
        res.send(svg);
      } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: { message: "An error occurred while generating the badge." } })
      }
    }
  } catch (err: any) {
    res.status(500).json({ error: { message: err.message } })
  }
}

export default handler