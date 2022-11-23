import { NextApiRequest, NextApiResponse } from 'next'
import { sampleExtensionData } from '../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleExtensionData)) {
      throw new Error('Cannot find extension data')
    }

    var filtered = sampleExtensionData
    if (_req.query.type) {
      filtered = sampleExtensionData.filter((p) => {
        return p.type === _req.query.type
      })
    }

    res.status(200).json({ result: filtered })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}

export default handler