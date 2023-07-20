/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['occ-0-116-448.1.nflxso.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'occ-0-3933-116.1.nflxso.net',
        port: ''
      }
    ]
  }
};

module.exports = nextConfig;
