'use client'; // Mark as client component

import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import HotelCard from '@/components/hotels/HotelCard';
import type { Hotel } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL, BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL } from '@/lib/constants';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Placeholder data - replace with actual data fetching
const categoryHotelsData: { [key: string]: { [key: string]: Hotel[] } } = {
  malaga: {
    luxury: [
      { id: 'malaga-lux-1', name: 'Gran Hotel Miramar GL', slug:'gran-hotel-miramar-gl', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"luxury hotel facade", description: 'Iconic 5-star luxury hotel offering stunning sea views and opulent amenities.', features: ['Beachfront', 'Outdoor Pool', 'Spa & Wellness Center', 'Fine Dining'], userScore: 9.2, priceGuide: '€€€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
      { id: 'malaga-lux-2', name: 'Vincci Selección Posada del Patio', slug:'vincci-seleccion-posada-del-patio', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"hotel rooftop pool", description: 'Chic hotel with a unique rooftop pool and access to ancient city wall remains.', features: ['Rooftop Pool', 'Historic Site', 'Central Location', 'Modern Design'], userScore: 9.0, priceGuide: '€€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
    ],
    'family-friendly': [
      { id: 'malaga-fam-1', name: 'Ilunion Málaga', slug:'ilunion-malaga', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"family hotel pool", description: 'Modern hotel with spacious family rooms, near the port and train station.', features: ['Indoor Pool', 'Family Rooms', 'Near Attractions', 'Accessible'], userScore: 8.5, priceGuide: '€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
    ],
    beachfront: [
       { id: 'malaga-beach-1', name: 'Soho Boutique Las Vegas', slug:'soho-boutique-las-vegas', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"beach hotel malagueta", description: 'Located on Malagueta Beach, offering sea views and an outdoor pool.', features: ['Direct Beach Access', 'Sea View Rooms', 'Outdoor Pool', 'Restaurant'], userScore: 8.3, priceGuide: '€€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
    ],
    boutique: [
       { id: 'malaga-boutique-1', name: 'Hotel Molina Lario', slug:'hotel-molina-lario', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"boutique hotel exterior", description: 'Elegant boutique hotel in the city center with a rooftop pool and views of the cathedral.', features: ['Rooftop Pool', 'Cathedral Views', 'Central Location', 'Stylish Decor'], userScore: 8.9, priceGuide: '€€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
    ]
  },
  marbella: {
    '5-star-resorts': [
        { id: 'marbella-5star-1', name: 'Puente Romano Beach Resort', slug:'puente-romano-beach-resort', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"Marbella luxury resort", description: 'A luxurious village-style resort on Marbella\'s Golden Mile.', features: ['Tennis Club', 'Multiple Restaurants', 'Botanical Gardens', 'Beach Access'], userScore: 9.3, priceGuide: '€€€€€', affiliateLink: `https://booking.com/marbella-hotels?aid=YOUR_AID` },
    ],
    'golf-hotels': [
        { id: 'marbella-golf-1', name: 'The Westin La Quinta Golf Resort & Spa', slug:'the-westin-la-quinta-golf', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"golf resort marbella", description: 'Nestled in Golf Valley, offering a 27-hole course and serene spa.', features: ['27-hole Golf Course', 'Luxury Spa', 'Kids Club', 'Picturesque Setting'], userScore: 9.0, priceGuide: '€€€€', affiliateLink: `https://booking.com/marbella-hotels?aid=YOUR_AID` },
    ],
     'spa-hotels': [
        { id: 'marbella-spa-1', name: 'Anantara Villa Padierna Palace Benahavís Marbella Resort', slug:'anantara-villa-padierna-palace', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint:"spa resort marbella", description: 'Tuscan-style palace resort with an award-winning spa and three golf courses.', features: ['Award-Winning Spa', 'Three Golf Courses', 'Roman Amphitheater', 'Art Collection'], userScore: 9.2, priceGuide: '€€€€€', affiliateLink: `https://booking.com/marbella-hotels?aid=YOUR_AID` },
    ]
  }
};

// generateStaticParams needs to be in a Server Component or separate file.
// Commented out as this page is now 'use client'.
// export async function generateStaticParams() {
//   const params = [];
//   for (const region in categoryHotelsData) {
//     for (const category in categoryHotelsData[region]) {
//       params.push({ region, category });
//     }
//   }
//   return params;
// }

export default function HotelSiloChildPage({ params }: { params: { region: string; category: string } }) {
  const hotels = categoryHotelsData[params.region]?.[params.category];
  const regionName = params.region.charAt(0).toUpperCase() + params.region.slice(1);
  const categoryName = params.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


  if (!hotels) {
    notFound();
  }
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: regionName, href: `/hotels/${params.region}` },
    { label: categoryName, href: `/hotels/${params.region}/${params.category}` },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title={`${categoryName} in ${regionName}`}
        subtitle={`Browse our top picks for ${categoryName.toLowerCase()} in ${regionName}. Each hotel is selected for its quality, guest reviews, and unique offerings.`}
      />
      <div className="mb-8 p-6 info-box-custom-bg border-l-4 rounded-lg"> {/* Updated class for info box */}
        <h3 className="font-montserrat text-lg font-semibold text-foreground mb-2">Book with Confidence</h3>
        <p className="text-sm text-muted-foreground">
          All hotel links direct you to Booking.com, our trusted partner, ensuring secure transactions and access to the latest deals. Your bookings help support our work in bringing you the best of Costa del Sol.
        </p>
      </div>

      {hotels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">No hotels listed for this category yet. Check back soon!</p>
      )}

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat font-medium">
          <Link href={`https://booking.com/${params.region}-hotels?aid=YOUR_AID&features=${params.category}`} target="_blank" rel="noopener noreferrer">
            More {categoryName} in {regionName} on Booking.com
          </Link>
        </Button>
      </div>
    </div>
  );
}
