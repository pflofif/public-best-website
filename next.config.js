/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    output: "standalone",
    serverRuntimeConfig: {
        host: process.env.HOST || '0.0.0.0',
    },
    images: {
        domains: ['minio-z8kgc0wwcccs4w0kkosk8040.135.236.104.194.sslip.io'], // Add your MinIO server's hostname here
    },
}

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({ nextConfig })
