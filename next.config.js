// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    pageExtensions: ['api.ts', 'page.tsx', 'page.ts'],
    experimental: {},
    future: {},
    reactStrictMode: true,
    webpack: (config) => ({
        ...config,
    }),
};
module.exports = nextConfig;
