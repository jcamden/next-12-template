import type { GetServerSideProps, NextPage } from 'next';

import { Post, PrismaClient } from '../../prisma/client';

const prisma = new PrismaClient();

interface PrismaSSRProps {
    posts: Post[];
}

export const PrismaSSR: NextPage<PrismaSSRProps> = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <div
                    key={post.post_id}
                    className="text-blue hover:text-red-500"
                >
                    {post.content}
                </div>
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
