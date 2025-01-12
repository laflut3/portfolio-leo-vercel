/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com'],
    },
    rules: {
        "react/no-unescaped-entities": "off",
    },
    api: {
        bodyParser: false,
    },
};

export default nextConfig;
