
import { notFound } from 'next/navigation';
import { hotelSiloData } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import type { Metadata } from 'next';
import HotelCategoryCard from '@/components/hotels/HotelCategoryCard';

export async function generateStaticParams() {
  return Object.keys(hotelSiloData).map((region) => ({
    region: region,
  }));
}

export async function generateMetadata({ params }: { params: { region: string } }): Promise<Metadata> {
  const region = params.region;
  const regionData = hotelSiloData[region];

  if (!regionData) {
    return {
      title: 'Hotels Not Found',
    }
  }

  const title = `Hotels in ${regionData.name} | Find Your Perfect Stay`;
  const description = `Explore a wide range of hotels in ${regionData.name}. From luxury resorts to budget-friendly stays, find the perfect accommodation for your trip.`;

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `/hotels/${region}`,
    },
  };
}

export default function HotelRegionPage({ params }: { params: { region: string } }) {
  const regionData = hotelSiloData[params.region];

  if (!regionData) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title={`Hotels in ${regionData.name}`}
        subtitle={`Discover the best places to stay in ${regionData.name}, from luxury resorts to charming boutique hotels.`}
      />

      <Section title="Accommodation by Category" className="pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regionData.categories.map((category) => (
            <HotelCategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Section>
    </div>
  );
}
