/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["raw.githubusercontent.com"],
    },

    async redirects() {
        return  [
            {
                source: "/battle",
                destination: "/",
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
