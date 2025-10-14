
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Wedding Venues | Costa del Sol Navigator',
  description: 'Discover breathtaking wedding venues in Costa del Sol.',
};

const venueTypes = [
  {
    slug: 'beach-venues',
    name: 'Beach Wedding Venues',
    description: 'Say "I do" with the Mediterranean sea as your backdrop.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'beach wedding ceremony'),
    imageHint: 'beach wedding ceremony',
    linkHref: '/weddings/venues/beach', // Placeholder for long-tail page
    linkText: 'Explore Beach Venues',
  },
  {
    slug: 'luxury-villas',
    name: 'Luxury Villas',
    description: 'Host an exclusive and private celebration in a stunning villa.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury wedding villa'),
    imageHint: 'luxury wedding villa',
    linkHref: '/weddings/venues/villas', // Placeholder for long-tail page
    linkText: 'Discover Luxury Villas',
  },
  {
    slug: 'rustic-fincas',
    name: 'Rustic Fincas',
    description: 'Experience authentic Andalusian charm at a beautiful countryside estate.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'rustic finca wedding'),
    imageHint: 'rustic finca wedding',
    linkHref: '/weddings/venues/fincas', // Placeholder for long-tail page
    linkText: 'Find Rustic Fincas',
  },
];

export default function WeddingVenuesPage() {
  return (
    <div>
      <PageHeader
        title="Find Your Dream Wedding Venue"
        subtitle="Explore a curated selection of the most beautiful and exclusive wedding venues in Costa del Sol."
      />
      <Section className="pt-0" title="Venue Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {venueTypes.map((category) => (
            <InfoCard
              key={category.slug}
              title={category.name}
              imageUrl={category.imageUrl}
              imageAlt={`Explore ${category.name}`}
              description={category.description}
              linkHref={category.linkHref}
              linkText={category.linkText}
              imageHint={category.imageHint}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
