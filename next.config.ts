import dayjs from 'dayjs'
import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lanhu-oss.lanhuapp.com',
        port: '',
        search: '',
      },
    ],
  },
  headers: async () => {
    return [
      {
        source: '/:all*(svg|jpg|png|jpeg|ttf|ico)',
        locale: false,
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
  generateBuildId: async () => {
    return `${dayjs().format('YYYYMMDD_HHmmss')}`
  },
  /* config options here */
}

export default nextConfig
