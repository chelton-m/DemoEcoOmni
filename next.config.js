/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/DemoEcoOmni',
  assetPrefix: '/DemoEcoOmni/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig