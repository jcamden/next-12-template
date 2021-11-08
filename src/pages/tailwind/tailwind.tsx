import type { NextPage } from 'next';

interface TailwindProps {}

export const Tailwind: NextPage<TailwindProps> = () => {
    return <div className="text-red-500 hover:text-yellow-400">meow</div>;
};
