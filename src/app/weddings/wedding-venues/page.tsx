
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Wedding Venues Malaga | Costa del Sol Navigator',
  description: 'Discover the most beautiful wedding venues in Malaga and the Costa del Sol.',
};

const venueTypes = [
  {
    slug: 'luxury-venues',
    name: 'Luxury Wedding Venues',
    description: 'Host an unforgettable celebration at one of Malaga\'s most exclusive venues.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury wedding venue malaga'),
    imageHint: 'luxury wedding malaga',
    linkHref: '/weddings/wedding-venues/luxury-venues',
    linkText: 'Explore Luxury Venues',
  },
  {
    slug: 'beach-weddings',
    name: 'Beach Wedding Venues',
    description: 'Say "I do" with the sand between your toes and the Mediterranean as your witness.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'beach wedding marbella'),
    imageHint: 'beach wedding marbella',
    linkHref: '/weddings/wedding-venues/beach-weddings',
    linkText: 'Explore Beach Venues',
  },
  {
    slug: 'villa-weddings',
    name: 'Villa Wedding Venues',
    description: 'Celebrate your special day in a private and luxurious villa.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'villa wedding costa del sol'),
    imageHint: 'villa wedding costa del sol',
    linkHref: '/weddings/wedding-venues/villa-weddings',
    linkText: 'Explore Villa Venues',
  },
    {
    slug: 'cortijo-weddings',
    name: 'Cortijo Wedding Venues',
    description: 'Celebrate in a traditional and rustic Andalusian cortijo.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'cortijo wedding andalucia'),
    imageHint: 'cortijo wedding andalucia',
    linkHref: '/weddings/wedding-venues/cortijo-weddings',
    linkText: 'Explore Cortijo Venues',
  },
];

export default function WeddingVenuesPage() {
  return (
    <div>
      <PageHeader
        title="Find Your Dream Wedding Venue"
        subtitle="Explore a curated selection of the most beautiful and exclusive wedding venues in Costa del Sol."
      />
      <Section className="pt-0" title="Explore Venue Types">
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
