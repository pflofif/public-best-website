/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    output: "standalone"
}

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({ nextConfig })
