
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { hotelSiloData } from '@/lib/data';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export const metadata = {
  title: 'Hotels in Costa del Sol | Costa del Sol Navigator',
  description: 'Find the best hotels in Costa del Sol. Explore luxury resorts, family-friendly accommodations, and boutique hotels in Málaga, Marbella, and more.',
};

export default function HotelsPage() {
  const regions = Object.entries(hotelSiloData).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Find Your Perfect Stay in Costa del Sol"
        subtitle="Browse hotels by region and category to discover the ideal accommodation for your trip, from luxurious resorts to charming boutique hotels."
      />
      <Section className="pt-0" title="Hotel Regions">
        {regions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regions.map((region) => (
              <InfoCard
                key={region.slug}
                title={region.name}
                // Assuming the first category's image can represent the region, or use a dedicated region image
                imageUrl={region.categories[0]?.imageUrl || 'https://placehold.co/600x400.png'}
                imageAlt={`Hotels in ${region.name}`}
                description={`Discover various hotel types in ${region.name}, including ${region.categories.map(c => c.name.toLowerCase()).slice(0,2).join(', ')} and more.`}
                linkHref={`/hotels/${region.slug}`}
                linkText={`Explore Hotels in ${region.name}`}
                imageHint={`${region.slug} hotel region`}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No hotel regions found. Please check back later.</p>
        )}
      </Section>
    </div>
  );
}
