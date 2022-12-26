import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const postId = parseInt(req.query.id as string)

    const result = await prisma.posts.delete({
      where: { id: postId }
    })

    res.json(result)
  }
}
