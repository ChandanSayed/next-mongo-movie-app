/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose']
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
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
