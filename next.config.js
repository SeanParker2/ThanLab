/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ThanLab' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ThanLab/' : '',
  trailingSlash: true,
}

module.exports = nextConfig