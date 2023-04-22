import { NextApiRequest, NextApiResponse } from 'next'
import { extensionData } from 'data/extensions'
import { sortReleasesDescending } from 'interfaces'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(extensionData)) {
      throw new Error('Cannot find extension data')
    }

    const extension = extensionData.find(p => p.id.toString().toLowerCase() === _req.query.id.toString().toLowerCase())

    if (!extension) {
      throw new Error(`Cannot find extension by id: ${_req.query.id}`)
    } else {
      extension.releases = sortReleasesDescending(extension.releases);
      res.status(200).json({ result: extension })
    }
  } catch (err: any) {
    res.status(500).json({ error: { message: err.message } })
  }
}

export default handler