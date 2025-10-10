

import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import type { Hotel } from '@/lib/constants'; // For potential featured hotel, not used here
// import { PLACEHOLDER_IMAGE_URL, BOOKING_COM_AFFILIATE_LINK_MALAGA_GENERAL } from '@/lib/constants'; // PLACEHOLDER_IMAGE_URL used by data
import TestimonialCard from '@/components/shared/TestimonialCard';
import { hotelSiloData } from '@/lib/data'; // Import data from new location
import Image from 'next/image';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';
// import type { HotelCategory } from '@/types'; // Type comes implicitly from hotelSiloData

// Placeholder data for testimonials (can be moved to data.ts later if needed)
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
      <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={PLACEHOLDER_IMAGE_URL(1200, 400, `hotel region ${params.region}`)}
          alt={`Hero image for hotels in ${regionData.name}`}
          fill={true}
          priority
          className="object-cover"
          data-ai-hint={`hotel region ${params.region}`}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <PageHeader
            title={`Best Hotels in ${regionData.name}`}
            subtitle={`Explore a curated selection of top hotels in ${regionData.name}. Find your perfect stay with us.`}
            className="mb-0"
            titleClassName="text-white"
            subtitleClassName="text-white/90"
          />
        </div>
      </div>
      
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
