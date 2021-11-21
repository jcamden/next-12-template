import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext } from 'react';

import { ActionNames } from '../../state/reducer';
import { DispatchContext, StateContext } from '../../state/state';
import { Center } from '../../ui';

export const Home: NextPage = () => {
    const { demo } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const btn = 'font-bold py-2 px-4 rounded';
    const btnBlue = 'bg-blue-500 text-white';
    const btnBlueHover = 'hover:bg-blue-700';

    return (
        <>
            <Head>
                <title>Title</title>
                <meta name="description" content="meta" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                main
                <Center>
                    <div>demo: {demo}</div>
                    <div>
                        {demo === 'meow' && (
                            <button
                                className={`${btn} ${btnBlue} ${btnBlueHover}`}
                                onClick={() => {
                                    dispatch({
                                        name: ActionNames.setDemo,
                                        payload: 'turtle',
                                    });
                                }}
                            >
                                change demo
                            </button>
                        )}
                    </div>
                </Center>
            </main>

            <footer>
                footer{' '}
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    width={72}
                    height={16}
                />
            </footer>
        </>
    );
};
