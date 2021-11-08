import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Post } from '../../prisma/client';

interface PrismaApiProps {
    posts: Post[];
}

export const PrismaApi: NextPage<PrismaApiProps> = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        (async () => {
            const fetchedPosts = await (await fetch('/api/prisma')).json();
            setPosts(fetchedPosts);
        })();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div
                    key={post.post_id}
                    className="text-blue hover:text-red-500"
                    data-testId={'post' + post.post_id}
                >
                    {post.content}
                </div>
            ))}
        </div>
    );
};
