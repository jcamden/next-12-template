import 'tailwindcss/tailwind.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'light',
                value: '#FFFFFF',
            },
            {
                name: 'dark',
                value: '#2F2F2F',
            },
            {
                name: 'djinndex',
                value: '#001B58',
            },
        ],
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
