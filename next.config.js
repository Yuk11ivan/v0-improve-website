/** @type {import('next').NextConfig} */
const nextConfig = {
  // 构建输出设置
  output: 'export',
  
  // 路径前缀（Vercel自动处理）
  basePath: '',
  
  // 环境变量处理
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  
  // 安全设置
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  
  // TypeScript配置
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  
  // 图片优化配置
  images: {
    // 对于静态导出，需要设置为true
    unoptimized: true,
    // 支持的图片格式
    formats: ['image/webp'],
  },
  
  // 压缩设置
  compress: true,
  
  // SWC最小化
  swcMinify: true,
  
  // 其他优化设置
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
