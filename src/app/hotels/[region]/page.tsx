
import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Hotel } from '@/lib/constants'; // For potential featured hotel
import { PLACEHOLDER_IMAGE_URL, BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL } from '@/lib/constants';
import TestimonialCard from '@/components/shared/TestimonialCard';

interface HotelCategory {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
}

// Placeholder data - replace with actual data fetching
const hotelSiloData: { [key: string]: { name: string; categories: HotelCategory[] } } = {
  malaga: {
    name: 'Málaga',
    categories: [
      { name: 'Luxury Hotels', slug: 'luxury', description: 'Indulge in opulent stays with top-tier amenities and services.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "luxury hotel interior" },
      { name: 'Family-Friendly Hotels', slug: 'family-friendly', description: 'Find hotels with facilities and activities perfect for all ages.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "family pool fun" },
      { name: 'Beachfront Hotels', slug: 'beachfront', description: 'Wake up to stunning sea views and direct beach access.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "beach hotel view" },
      { name: 'Boutique Hotels', slug: 'boutique', description: 'Discover unique charm and personalized service in smaller, stylish hotels.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "boutique hotel lobby" },
    ],
  },
  marbella: {
    name: 'Marbella',
    categories: [
      { name: '5-Star Resorts', slug: '5-star-resorts', description: 'Experience ultimate luxury and exclusivity in Marbella\'s finest resorts.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "Marbella resort pool" },
      { name: 'Golf Hotels', slug: 'golf-hotels', description: 'Stay and play at hotels with access to world-class golf courses.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "golf course hotel" },
      { name: 'Spa Hotels', slug: 'spa-hotels', description: 'Relax and rejuvenate with exceptional spa facilities and treatments.', imageUrl: PLACEHOLDER_IMAGE_URL(600,400), imageHint: "spa massage therapy" },
    ],
  },
};

const testimonials = [
  { quote: "Booking through this site was easy and I found a fantastic hotel in Malaga!", author: "Jane D.", source: "Email Feedback" },
  { quote: "The hotel categories helped me narrow down my search quickly. Great resource!", author: "Mike P.", source: "Site Review" },
];


export async function generateStaticParams() {
  return Object.keys(hotelSiloData).map((region) => ({
    region,
  }));
}

export default function HotelSiloParentPage({ params }: { params: { region: string } }) {
  const regionData = hotelSiloData[params.region];

  if (!regionData) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={`Best Hotels in ${regionData.name}`}
        subtitle={`Explore a curated selection of top hotels in ${regionData.name}. Whether you're looking for luxury, family fun, or a beachfront escape, find your perfect stay with us.`}
      />
      
      <Section title={`Hotel Categories in ${regionData.name}`} className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regionData.categories.map((category) => (
            <InfoCard
              key={category.slug}
              title={category.name}
              imageUrl={category.imageUrl}
              imageAlt={`Image representing ${category.name} in ${regionData.name}`}
              description={category.description}
              linkHref={`/hotels/${params.region}/${category.slug}`}
              linkText={`View ${category.name}`}
              imageHint={category.imageHint}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/10">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-montserrat text-2xl font-bold text-primary-dark mb-4">
            Why Book Your {regionData.name} Hotel Through Us?
          </h3>
          <p className="text-muted-foreground mb-6">
            We partner with Booking.com to provide you with a wide selection of hotels at competitive prices. Booking through our links helps support our travel guide, allowing us to continue providing valuable Costa del Sol insights at no extra cost to you. Enjoy benefits like:
          </p>
          <ul className="list-disc list-inside text-left text-muted-foreground mb-8 space-y-1">
            <li>Extensive choice of accommodations</li>
            <li>Verified guest reviews</li>
            <li>Secure booking process</li>
            <li>Flexible cancellation options on many properties</li>
          </ul>
          <Button asChild variant="default" size="lg" className="bg-accent-1-red text-primary-light hover:bg-accent-1-red/90">
            <Link href={`https://booking.com/${params.region}-hotels?aid=YOUR_AID`} target="_blank" rel="noopener noreferrer">
              Search All Hotels in {regionData.name} on Booking.com
            </Link>
          </Button>
        </div>
      </Section>

      <Section title="What Our Users Say">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

    </div>
  );
}
