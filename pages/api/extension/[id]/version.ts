import { NextApiRequest, NextApiResponse } from 'next'
import { extensionData } from 'data/extensions'
import { getLatestRelease } from 'interfaces'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
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
      const latest = getLatestRelease(extension);
      if (!latest) {
        throw new Error('No releases found')
      }
      res.status(200).send(latest.tag)
    }
  } catch (err: any) {
    res.status(500).json({ error: { message: err.message } })
  }
}

export default handler