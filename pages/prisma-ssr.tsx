import type { GetServerSideProps, NextPage } from "next";

import { Post, PrismaClient } from "../prisma/client";

const prisma = new PrismaClient();

interface PrismaSSRProps {
  posts: Post[];
}

const PrismaSSR: NextPage<PrismaSSRProps> = ({ posts }) => {
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

export default PrismaSSR;
