# 商贸义乌 - 小商品批发平台

一个现代化的电商批发平台，直连义乌源头工厂，提供低价优质货源。

## 项目特性

### 核心功能
- 🏠 **首页** - 互动轮播、分类浏览、热销推荐
- 🛍️ **商品列表** - 高级筛选、多维排序、分页展示
- 📦 **商品详情** - 图库浏览、价格阶梯、用户评价、关联推荐
- 🔍 **搜索导航** - 分类导航、面包屑导航、快速链接
- 📱 **响应式设计** - 完美适配桌面、平板、手机

### 技术栈
- **框架**: Next.js 15 (App Router)
- **UI库**: React 19 + Radix UI + Tailwind CSS v4
- **组件库**: shadcn/ui
- **类型**: TypeScript
- **图表**: Recharts
- **表单**: React Hook Form + Zod
- **动画**: Tailwind Animate
- **图标**: Lucide React

### 性能优化
- 图像优化 (WebP, AVIF 格式)
- 代码分割和懒加载
- SEO 优化 (元标签、结构化数据)
- 缓存策略配置
- 安全头设置
- 生产环境 sourcemap 禁用

### 部署配置
- Vercel 部署就绪
- 环境变量配置
- 错误边界处理
- 404 页面
- 500 错误处理
- API 客户端集成

## 安装和运行

### 开发环境
\`\`\`bash
npm install
npm run dev
\`\`\`

访问 `http://localhost:3000`

### 构建和部署
\`\`\`bash
npm run build
npm start
\`\`\`

### 部署到 Vercel
\`\`\`bash
vercel deploy
\`\`\`

## 项目结构
\`\`\`
.
├── app/                      # Next.js 应用路由
│   ├── page.tsx             # 首页
│   ├── products/            # 商品列表
│   ├── product/[id]/        # 商品详情
│   ├── about/               # 关于页面
│   ├── layout.tsx           # 根布局
│   ├── error.tsx            # 错误处理
│   └── not-found.tsx        # 404 处理
├── components/              # React 组件
│   ├── header.tsx           # 顶部导航
│   ├── footer.tsx           # 页脚
│   ├── banner-carousel.tsx  # 轮播组件
│   ├── product-card.tsx     # 商品卡片
│   ├── product-reviews.tsx  # 评价组件
│   └── ui/                  # shadcn/ui 组件
├── lib/                     # 工具函数
│   ├── utils.ts             # 通用工具
│   ├── constants.ts         # 常量配置
│   └── api-client.ts        # API 客户端
├── public/                  # 静态资源
├── styles/                  # 全局样式
└── next.config.mjs          # Next.js 配置
\`\`\`

## 环境变量

创建 `.env.local` 文件：

\`\`\`env
# API 配置
NEXT_PUBLIC_API_URL=https://api.yiwupifa.com
NEXT_PUBLIC_SITE_URL=https://yiwupifa.com

# 分析工具 (可选)
NEXT_PUBLIC_GA_ID=

# 功能开关
NEXT_PUBLIC_ENABLE_REVIEWS=true
NEXT_PUBLIC_ENABLE_WISHLIST=true
\`\`\`

## 主要页面

### 首页 (`/`)
- 交互式轮播广告
- 6 个商品分类卡片
- 新品推荐展示
- 热销爆款列表
- 平台优势展示

### 商品列表 (`/products`)
- 侧边栏分类筛选
- 价格区间筛选
- 多维排序 (销量、价格、评分)
- 20 件/页分页显示
- 面包屑导航

### 商品详情 (`/product/[id]`)
- 交互式图库浏览
- 价格阶梯展示
- 颜色和数量选择
- 用户评价展示
- 关联商品推荐
- 供应商信息

## SEO 优化

- 完整的元标签配置
- Open Graph 社交分享
- 结构化数据 (Schema.org)
- 规范 URL 配置
- XML 站点地图支持
- 机器人爬虫指引

## 安全特性

- X-Frame-Options 头
- X-Content-Type-Options 头
- X-XSS-Protection 头
- Referrer-Policy 配置
- DNS Prefetch 控制
- Content Security Policy 就绪

## 性能指标

- First Contentful Paint (FCP) 优化
- Largest Contentful Paint (LCP) 优化
- Cumulative Layout Shift (CLS) 最小化
- 图片懒加载
- 路由预加载

## 未来功能

- [ ] 用户认证系统
- [ ] 购物车功能
- [ ] 订单管理
- [ ] 支付集成
- [ ] 用户评价和反馈
- [ ] 邮件通知
- [ ] 后台管理系统
- [ ] 数据分析面板

## 许可证

MIT License

## 联系方式

- 电话: 400-888-8888
- 邮箱: service@yiwupifa.com
- 地址: 浙江省义乌市国际商贸城

---

**商贸义乌** - 连接商家，畅通商路 🚀
