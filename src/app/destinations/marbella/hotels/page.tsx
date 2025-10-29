
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { hotelSiloData } from '@/lib/data';
import type { Metadata } from 'next';
import HotelCategoryCard from '@/components/hotels/HotelCategoryCard';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Marbella Hotels | Luxury, Beachfront & Boutique Hotels',
    description: 'Find the best hotels in Marbella. Explore our curated selection of luxury resorts on the Golden Mile, charming boutique hotels in the Old Town, and stunning beachfront properties.',
    alternates: {
        canonical: '/destinations/marbella/hotels',
    },
};

export default function MarbellaHotelsPage() {
    const regionData = hotelSiloData['marbella'];

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
