/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [{
      source: '/',
      destination: '/gamestore',
      permanent: true
    }]
  }
}

module.exports = nextConfig
