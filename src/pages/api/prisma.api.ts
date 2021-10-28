import type { NextApiRequest, NextApiResponse } from "next";

import { Post, PrismaClient } from "../../prisma/client";

const prisma = new PrismaClient();

export interface ErrRes {
  messages: string[];
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Post[] | ErrRes>
) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({
      messages: ["pooped yer pants"],
    });
  }
};

export default handler;
