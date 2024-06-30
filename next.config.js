/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd', '@ant-design/icons'],
  async rewrites(){
    return [{
      //当接口含api时，暗地里会重新转到destination
      source: '/api/:path*',
      destination: 'https://mock.apifox.cn/m1/2398938-0-default/api/:path*'
      // destination: 'http://localhost:3000/api/:path*'
    }]
  }
}

module.exports = nextConfig
