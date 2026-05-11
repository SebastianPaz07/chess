/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lichess1.org', 'lichess.org'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig
