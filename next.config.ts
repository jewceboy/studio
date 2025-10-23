
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 600, 1080],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/tourism/caminito-del-rey',
        destination: '/attractions/adventure-activities/caminito-del-rey',
        permanent: true,
      },
      {
        source: '/tourism/costa-del-sol-top-5-resorts',
        destination: '/hotels/costa-del-sol-resorts',
        permanent: true,
      },
      {
        source: '/tourism/7-authentic-flamenco-shows-andalucia',
        destination: '/nightlife/flamenco-shows/authentic',
        permanent: true,
      },
      {
        source: '/locations/an-insiders-guide-to-puerto-banus',
        destination: '/destinations/puerto-banus',
        permanent: true,
      },
      {
        source: '/locations/6-must-do-things-to-in-stunning-mijas-pueblo',
        destination: '/destinations/mijas-pueblo/things-to-do',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
