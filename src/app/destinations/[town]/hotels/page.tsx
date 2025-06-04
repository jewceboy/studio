'use client'; // Mark as client component if it uses client-side only features, or its children do

import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import HotelCard from '@/components/hotels/HotelCard';
import type { Hotel } from '@/lib/constants';
import { PLACEHOLDER_IMAGE_URL, BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL } from '@/lib/constants';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Placeholder data - replace with actual data fetching for hotels in a specific town
const townHotelsData: { [key: string]: Hotel[] } = {
  malaga: [
    { id: 'malaga-hotel-1', name: 'Gran Hotel Miramar GL', slug:'gran-hotel-miramar-gl', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "luxury hotel malaga", description: 'Iconic 5-star luxury hotel offering stunning sea views and opulent amenities.', features: ['Beachfront', 'Outdoor Pool', 'Spa & Wellness Center', 'Fine Dining'], userScore: 9.2, priceGuide: '€€€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
    { id: 'malaga-hotel-2', name: 'Vincci Selección Posada del Patio', slug:'vincci-seleccion-posada-del-patio', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "boutique hotel malaga", description: 'Chic hotel with a unique rooftop pool and access to ancient city wall remains.', features: ['Rooftop Pool', 'Historic Site', 'Central Location', 'Modern Design'], userScore: 9.0, priceGuide: '€€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
    { id: 'malaga-hotel-3', name: 'Only YOU Hotel Málaga', slug:'only-you-hotel-malaga', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "modern hotel malaga", description: 'Stylish hotel with a vibrant atmosphere, rooftop bar, and central location near Larios Street.', features: ['Rooftop Bar', 'Prime Location', 'Contemporary Decor', 'Gym'], userScore: 8.8, priceGuide: '€€€', affiliateLink: BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL },
  ],
  marbella: [
    { id: 'marbella-hotel-1', name: 'Marbella Club Hotel', slug:'marbella-club-hotel', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "luxury resort marbella", description: 'Legendary beachfront resort with lush gardens, golf, and world-class service.', features: ['Private Beach', 'Golf Course', 'Kids Club', 'Multiple Restaurants'], userScore: 9.5, priceGuide: '€€€€€', affiliateLink: `https://booking.com/marbella-hotels?aid=12345` },
    { id: 'marbella-hotel-2', name: 'Nobu Hotel Marbella', slug:'nobu-hotel-marbella', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "trendy hotel marbella", description: 'Sleek and sophisticated hotel designed for adults, offering exclusive access to Nobu restaurant.', features: ['Adults Only', 'Nobu Restaurant', 'Nightclub Access', 'Private Pool'], userScore: 9.1, priceGuide: '€€€€', affiliateLink: `https://booking.com/marbella-hotels?aid=12345` },
  ],
   mijas: [
    { id: 'mijas-hotel-1', name: 'TRH Mijas', slug:'trh-mijas', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "hotel mijas pueblo", description: 'Hotel in Mijas Pueblo with traditional Andalusian architecture and panoramic views.', features: ['Outdoor Pool', 'Restaurant', 'Scenic Views', 'Close to Village Center'], userScore: 8.0, priceGuide: '€€', affiliateLink: `https://booking.com/mijas-hotels?aid=12345` },
    { id: 'mijas-hotel-2', name: 'La Cala Resort', slug:'la-cala-resort', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "golf resort mijas", description: 'Expansive resort in Mijas Costa with three golf courses, spa, and multiple pools.', features: ['Golf Courses', 'Luxury Spa', 'Sports Facilities', 'Family Friendly'], userScore: 8.9, priceGuide: '€€€', affiliateLink: `https://booking.com/mijas-hotels?aid=12345` },
  ],
   nerja: [
    { id: 'nerja-hotel-1', name: 'Parador de Nerja', slug:'parador-de-nerja', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "hotel nerja balcon", description: 'Hotel perched on a cliff with direct lift access to Burriana Beach and stunning sea views.', features: ['Sea Views', 'Beach Access Lift', 'Outdoor Pool', 'Gardens'], userScore: 8.7, priceGuide: '€€€', affiliateLink: `https://booking.com/nerja-hotels?aid=12345` },
    { id: 'nerja-hotel-2', name: 'Hotel Balcón de Europa', slug:'hotel-balcon-de-europa', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "hotel nerja center", description: 'Prime location on the famous Balcón de Europa, offering direct beach access and sea views.', features: ['Iconic Location', 'Beach Access', 'Rooftop Pool', 'Restaurant'], userScore: 8.5, priceGuide: '€€€', affiliateLink: `https://booking.com/nerja-hotels?aid=12345` },
  ]
};

// generateStaticParams should be in a Server Component or a separate file.
// If this page is 'use client', this needs to be moved or re-thought.
// export async function generateStaticParams() {
//   return Object.keys(townHotelsData).map((town) => ({
//     town,
//   }));
// }

export default function DestinationHotelsPage({ params }: { params: { town: string } }) {
  const hotels = townHotelsData[params.town];
  const townName = params.town.charAt(0).toUpperCase() + params.town.slice(1);

  if (!hotels) {
    notFound();
  }
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Destinations', href: '/destinations' },
    { label: townName, href: `/destinations/${params.town}` },
    { label: 'Hotels', href: `/destinations/${params.town}/hotels` },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title={`Best Hotels in ${townName}`}
        subtitle={`Discover top-rated accommodations in ${townName}, from luxury resorts to charming boutique hotels. Find the perfect place for your stay.`}
      />
      <div className="mb-8 p-6 info-box-custom-bg border-l-4 rounded-lg"> {/* Updated class for info box */}
        <h3 className="font-montserrat text-lg font-semibold text-foreground mb-2">Why Book Through Us?</h3>
        <p className="text-sm text-muted-foreground">
          We partner with Booking.com to bring you the best deals and a wide selection of hotels. Booking through our links helps support our travel guide at no extra cost to you. Enjoy a seamless booking experience with verified reviews and flexible cancellation options on most properties.
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
          <Link href={`https://booking.com/${params.town}-hotels?aid=YOUR_AID`} target="_blank" rel="noopener noreferrer">
            See All Hotels in {townName} on Booking.com
          </Link>
        </Button>
      </div>
    </div>
  );
}
