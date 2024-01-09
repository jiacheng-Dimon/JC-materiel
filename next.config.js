/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置环境变量{process.env.CUSTOM}
  env: {
    CUSTOM: 'my-value',
  },
  reactStrictMode: true,
  // useFileSystemPublicRoutes: false,
}

module.exports = nextConfig
