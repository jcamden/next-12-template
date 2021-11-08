import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

export const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Title</title>
                <meta name="description" content="meta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                main
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                />
            </main>

            <footer>footer</footer>
        </div>
    );
};
