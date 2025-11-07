# 部署指南

## GitHub Actions + Vercel 自动部署配置

本项目已配置自动部署流程，每次推送代码到 `main` 分支时，会自动部署到 Vercel。

### 设置步骤

#### 1. 在 Vercel 中创建项目

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账户登录或注册
3. 点击 "Add New..." → "Project"
4. 选择 `v0-improve-website` 仓库
5. 点击 "Import" 完成初始配置
6. 获取您的 Vercel 项目 ID 和组织 ID（见下一步）

#### 2. 获取 Vercel 凭证

在 Vercel 项目的设置中找到：

- **VERCEL_ORG_ID**: 项目设置 → General → Team ID
- **VERCEL_PROJECT_ID**: 项目设置 → General → Project ID

生成 Vercel 令牌：
1. 访问 https://vercel.com/account/tokens
2. 点击 "Create Token"
3. 选择 "Full Access" 并给它命名（如 "GitHub Actions"）
4. 复制生成的令牌

#### 3. 配置 GitHub Secrets

1. 在 GitHub 仓库中，进入 Settings → Secrets and variables → Actions
2. 点击 "New repository secret"，添加以下三个 secrets：

| 名称 | 值 |
|------|-----|
| `VERCEL_TOKEN` | 从 Vercel 复制的令牌 |
| `VERCEL_ORG_ID` | 您的 Vercel Team ID |
| `VERCEL_PROJECT_ID` | 您的 Vercel Project ID |

#### 4. 测试部署

1. 修改一个文件（例如编辑 README.md）
2. 提交并推送到 main 分支
3. 进入 GitHub 仓库的 "Actions" 标签页
4. 查看 "Deploy to Vercel" 工作流的执行情况
5. 部署完成后，访问您的 Vercel 项目查看更新

### 部署流程

- **Push 到 main**: 自动部署到 Vercel 生产环境
- **Push 到 develop**: 部署到 Vercel 预览环境
- **Pull Request**: 构建预览部署，在 PR 中评论部署状态

### 监控部署

1. **GitHub Actions**: 查看 GitHub 仓库的 "Actions" 标签
2. **Vercel Dashboard**: 查看 https://vercel.com/dashboard 监控部署

### 故障排除

#### 部署失败常见原因

1. **Secrets 配置错误**
   - 检查是否正确添加了所有三个 secrets
   - 确保复制的值完全正确

2. **Node 版本不兼容**
   - 检查 `.node-version` 或 `package.json` 中的 Node 版本
   - Vercel 支持 Node 18.x 及以上

3. **依赖安装失败**
   - 检查 `package.json` 中是否有冲突的依赖
   - 运行 `npm ci` 验证本地安装

#### 查看详细日志

1. 在 GitHub Actions 中点击失败的工作流
2. 展开 "Deploy to Vercel" 步骤查看详细错误信息
3. 或在 Vercel Dashboard 中查看构建日志

### 环境变量

项目使用的环境变量可在以下位置配置：

- **GitHub Secrets**: 用于 GitHub Actions 工作流
- **Vercel Project Settings**: 用于生产/预览环境
  - Settings → Environment Variables

### 自定义部署

要修改部署行为，编辑 `.github/workflows/deploy.yml` 文件：

- 修改触发分支（当前为 `main` 和 `develop`）
- 添加部署前后的自定义步骤
- 修改 Node.js 版本

---

需要帮助？查看 [Vercel 文档](https://vercel.com/docs) 或 [GitHub Actions 文档](https://docs.github.com/en/actions)
