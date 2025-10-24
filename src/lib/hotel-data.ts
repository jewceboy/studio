
import type { Hotel } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL, BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL } from '@/lib/constants';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;


export const allHotels: Hotel[] = [
  {
    id: '1',
    name: 'Gran Hotel Miramar GL',
    slug: 'gran-hotel-miramar-gl',
    categories: ['luxury-hotels-malaga', 'malaga-beaches', 'spa-retreats-malaga'],
    region: 'malaga',
    imageUrl: images['luxury-hotel-lobby'].url,
    imageHint: images['luxury-hotel-lobby'].hint,
    description: 'A luxurious palace hotel offering stunning sea views, an exclusive spa, and gourmet dining experiences right on La Malagueta beach.',
    features: ['Beachfront Location', 'Luxury Spa & Wellness Center', 'Rooftop Pool & Bar', 'Michelin-Guide Restaurant'],
    userScore: 9.2,
    priceGuide: '€€€€€',
    affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL,
  },
  {
    id: '2',
    name: 'Only YOU Hotel Málaga',
    slug: 'only-you-hotel-malaga',
    categories: ['boutique-hotels-malaga', 'luxury-hotels-malaga'],
    region: 'malaga',
    imageUrl: images['boutique-hotel-room'].url,
    imageHint: images['boutique-hotel-room'].hint,
    description: 'A stylish and modern boutique hotel in the heart of the city, featuring a rooftop pool with panoramic views and vibrant social spaces.',
    features: ['Rooftop Pool & Bar', 'Central Location', 'Stylish Urban Design', 'Live Music Events'],
    userScore: 9.1,
    priceGuide: '€€€€',
    affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL,
  },
  {
    id: '3',
    name: 'The Lights Hostel',
    slug: 'the-lights-hostel',
    categories: ['budget-hotels-malaga', 'hostels-malaga'],
    region: 'malaga',
    imageUrl: images['hostel-dorm-room'].url,
    imageHint: images['hostel-dorm-room'].hint,
    description: 'A modern and social hostel in a prime location, perfect for backpackers and solo travelers looking to meet people and explore the city on a budget.',
    features: ['Rooftop Terrace', 'Organized Social Events', 'Central Location', 'Female-Only Dorms Available'],
    userScore: 8.8,
    priceGuide: '€',
    affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL,
  },
  {
    id: '4',
    name: 'Marbella Club Hotel',
    slug: 'marbella-club-hotel',
    categories: ['luxury-hotels-marbella', 'golf-resorts-marbella', 'spa-retreats-marbella'],
    region: 'marbella',
    imageUrl: images['luxury-resort-pool'].url,
    imageHint: images['luxury-resort-pool'].hint,
    description: 'An iconic beachfront resort on the Golden Mile, offering timeless glamour, extensive botanical gardens, a world-class spa, and its own golf course.',
    features: ['Golden Mile Beachfront', 'Private Golf Course', 'Thalasso Spa', 'Kids Club & Equestrian Center'],
    userScore: 9.5,
    priceGuide: '€€€€€',
    affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL,
  },
   {
    id: '5',
    name: 'Puente Romano Beach Resort',
    slug: 'puente-romano-beach-resort',
    categories: ['luxury-hotels-marbella', 'family-hotels-marbella', 'spa-retreats-marbella'],
    region: 'marbella',
    imageUrl: images['beach-resort-holiday'].url,
    imageHint: images['beach-resort-holiday'].hint,
    description: 'A vibrant, village-style resort on the Golden Mile with over 15 restaurants, a world-famous tennis club, and lush subtropical gardens.',
    features: ['15+ Restaurants & Bars', 'Famous Tennis Club', 'Six Senses Spa', 'Botanical Gardens'],
    userScore: 9.3,
    priceGuide: '€€€€€',
    affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL,
  },
  {
    id: '6',
    name: 'Ikos Andalusia',
    slug: 'ikos-andalusia',
    categories: ['family-hotels-marbella', 'luxury-hotels-marbella', 'all-inclusive-marbella'],
    region: 'marbella',
    imageUrl: images['family-hotel-pool'].url,
    imageHint: images['family-hotel-pool'].hint,
    description: 'An all-inclusive 5-star resort offering an "Infinite Lifestyle" concept, with gourmet dining, premium drinks, and countless activities included.',
    features: ['Luxury All-Inclusive', 'Multiple Pools & Beachfront', 'Kids & Teens Clubs', 'Dine-Out Program'],
    userScore: 9.4,
    priceGuide: '€€€€€',
    affiliateLink