
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { destinationsData } from '@/lib/data';
import type { Destination } from '@/lib/constants';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export const metadata = {
  title: 'Destinations in Costa del Sol | Costa del Sol Navigator',
  description: 'Explore the diverse towns and cities of Costa del Sol. From vibrant Málaga to glamorous Marbella, find your perfect Spanish getaway.',
};

export default function DestinationsPage() {
  const allDestinations = Object.values(destinationsData);
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Destinations', href: '/destinations' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Explore Costa del Sol Destinations"
        subtitle="Discover the unique charm of each town and city along Spain's sun-kissed southern coast. Your adventure starts here."
      />
      <Section className="pt-0">
        {allDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allDestinations.map((destination: Destination) => (
              <InfoCard
                key={destination.id}
                title={destination.name}
                imageUrl={destination.heroImage} // Using heroImage for consistency, or could be a specific card image
                imageAlt={`View of ${destination.name}`}
                description={destination.overview.substring(0, 100) + '...'} // Short excerpt
                linkHref={`/destinations/${destination.slug}`}
                linkText={`Explore ${destination.name}`}
                imageHint={destination.imageHint || destination.slug}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No destinations found. Please check back later.</p>
        )}
      </Section>
    </div>
  );
}
