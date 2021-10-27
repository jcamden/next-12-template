import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

import { Post, PrismaClient } from "../prisma/client";

const prisma = new PrismaClient();

interface PrismaProps {
  posts: Post[];
}

const Prisma: NextPage<PrismaProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await (await fetch("/api/prisma")).json();
      setPosts(fetchedPosts);
    })();
  }, []);

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

export default Prisma;
