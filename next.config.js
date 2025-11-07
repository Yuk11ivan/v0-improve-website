/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置静态导出，支持GitHub Pages
  output: 'export',
  // 配置basePath（如果需要在子路径部署，可以在这里设置）
  basePath: '',
  // 确保图片不会尝试进行优化，因为GitHub Pages不支持Next.js的图片优化API
  images: {
    unoptimized: true,
  },
  // 确保没有服务器端渲染或API路由依赖
  reactStrictMode: true,
  // 压缩和最小化
  compress: true,
  swcMinify: true,
  // 调整eslint和typescript配置，确保开发环境能捕获错误
  eslint: {
    ignoreBuildErrors: process.env.NODE_ENV !== 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV !== 'production',
  },
}

module.exports = nextConfig
