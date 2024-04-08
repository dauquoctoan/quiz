/** @type {import('next').NextConfig} */
const nextConfig = {
    mode: 'production',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'planefs.s3.us-east-1.amazonaws.com',
            port: '',
            pathname: '/static/project-cover/**',
          },
        ],
    },
};

module.exports = nextConfig;