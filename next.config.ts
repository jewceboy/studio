
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
      {
        source: '/hotels/clubhotel-riu-review',
        destination: '/blog/clubhotel-riu-review',
        permanent: true,
      },
      {
        source: '/locations/benalmadena-puerto-marina',
        destination: '/destinations/benalmadena/marina',
        permanent: true,
      },
      {
        source: '/flights/cheap-flight-tips',
        destination: '/travel-planning/budget-travel/cheap-flights',
        permanent: true,
      },
      {
        source: '/flights/airlines-operating-out-of-malaga-airport',
        destination: '/transfers/airport-transfers/airlines',
        permanent: true,
      },
      {
        source: '/mystory',
        destination: '/blog/mystory-about-us',
        permanent: true,
      },
      {
        source: '/locations/san-pedro-boulevard-is-it-all-its-cracked-up-to-be',
        destination: '/blog/san-pedro-boulevard-review',
        permanent: true,
      },
      {
        source: '/tourism/world-tourism-day-is-a-hit-for-malaga',
        destination: '/blog/world-tourism-day-malaga',
        permanent: true,
      },
      {
        source: '/featured/controversial-summer-bullfighting-andalusia-ban',
        destination: '/blog/bullfighting-andalusia-ban-feature',
        permanent: true,
      },
      {
        source: '/business-directory/chocolate-tap-mayan-monkey-mijas',
        destination: '/blog/mayan-monkey-mijas-review',
        permanent: true,
      },
      {
        source: '/hotels/hotels-luxury-budget',
        destination: '/hotels',
        permanent: true,
      },
      {
        source: '/news/malaga-airport',
        destination: '/transfers/airport-transfers',
        permanent: true,
      },
      {
        source: '/tourism/malaga-wine-traditions-tours-and-tasting',
        destination: '/restaurants/culinary-experiences/wine-tasting',
        permanent: true,
      },
      {
        source: '/hotels/roommate-valeria-malaga',
        destination: '/hotels/search?q=Roommate+Valeria',
        permanent: true,
      },
      {
        source: '/locations/date-night-did-our-child-free-night-out-live-up',
        destination: '/blog/child-free-date-night-review',
        permanent: true,
      },
      {
        source: '/locations/exploring-malaga-city',
        destination: '/attractions/malaga-city',
        permanent: true,
      },
      {
        source: '/gastro/chirimoya-organic-restaurant',
        destination: '/blog/chirimoya-organic-restaurant-review',
        permanent: true,
      },
      {
        source: '/hotels/sunborn-gibraltar-5-star-super-yacht-hotel-thats-redefining-rock',
        destination: '/blog/sunborn-gibraltar-yacht-hotel-review',
        permanent: true,
      },
      {
        source: '/tourism/3-of-the-best-golf-courses-on-costa-del-sol-where-to-play-stay',
        destination: '/sports/golf',
        permanent: true,
      },
      {
        source: '/fitness/full-body-workout-women',
        destination: '/blog/full-body-workout-women',
        permanent: true,
      },
      {
        source: '/transfers/malaga-airport-destination',
        destination: '/transfers/airport-transfers',
        permanent: true,
      },
      {
        source: '/car-hire/agp-car-hire-rates',
        destination: '/transfers/car-hire',
        permanent: true,
      },
      {
        source: '/business-directory/learn-more-about-the-benefits-of-having-cosmetic-surgery-on-the-costa-del-sol',
        destination: '/wellness/medical-tourism/cosmetic-surgery',
        permanent: true,
      },
      {
        source: '/news/12-best-travel-blog-posts-2014',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/hotels/costa-glamping',
        destination: '/blog/costa-del-sol-glamping',
        permanent: true,
      },
      {
        source: '/round-up/7-expert-travelers',
        destination: '/blog/expert-traveler-roundup',
        permanent: true,
      },
      {
        source: '/tourism/weather-forecast',
        destination: '/travel-planning/when-to-visit/weather',
        permanent: true,
      },
      {
        source: '/hotels/only-you-malaga',
        destination: '/hotels/search?q=Only+YOU',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
