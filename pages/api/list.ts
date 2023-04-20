import { NextApiRequest, NextApiResponse } from 'next'
import { extensionData } from 'data/extensions'
import { sortReleasesDescending } from 'interfaces'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(extensionData)) {
      throw new Error('Cannot find extension data')
    }

    var filtered = extensionData
    if (_req.query.type) {
      filtered = extensionData.filter((p) => {
        return p.type === _req.query.type
      })
    }

    filtered.forEach((extension) => {
      extension.releases = sortReleasesDescending(extension.releases);
    });

    res.status(200).json({ result: filtered })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}

export default handler