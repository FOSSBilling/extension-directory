import { NextApiRequest, NextApiResponse } from 'next'
import { sampleExtensionData } from '../../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleExtensionData)) {
      throw new Error('Cannot find extension data')
    }

    const extension = sampleExtensionData.find(p => p.id.toString().toLowerCase() === _req.query.id.toString().toLowerCase())

    if (!extension) {
      throw new Error(`Cannot find extension by id: ${_req.query.id}`)
    } else {
      res.status(200).json({ result: extension })
    }
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}

export default handler