import type { NextPage } from "next";

interface TailwindProps {}

const Tailwind: NextPage<TailwindProps> = () => {
  return <div className="text-red-500 hover:text-yellow-400">meow</div>;
};

export default Tailwind;
