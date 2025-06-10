/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Than' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Than/' : '',
  trailingSlash: true,
}

module.exports = nextConfig