/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotepatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
}

module.exports = nextConfig
