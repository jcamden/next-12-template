import type { GetServerSideProps, NextPage } from "next";

import { PrismaClient } from "../prisma/client";

const prisma = new PrismaClient();

interface Post {
  post_id: number;
  content: string;
  title: string;
  author_id: number;
}

interface PrismaProps {
  posts: Post[];
}

const Prisma: NextPage<PrismaProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <>
          <div key={post.post_id}>{post.content}</div>
          <br />
        </>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await prisma.post.findMany();

  return {
    props: { posts },
  };
};

export default Prisma;
