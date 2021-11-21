import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';

import { State } from '../state/state';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <State>
            <Component {...pageProps} />
        </State>
    );
};
export default MyApp;
