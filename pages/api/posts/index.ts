import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title, content } = req.body

  const result = await prisma.posts.create({
    data: {
      title,
      content
    }
  })

  res.json(result)
}
