
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Wedding Venues Malaga | Costa del Sol Navigator',
  description: 'Discover the most beautiful wedding venues in Malaga and the Costa del Sol.',
};

const venueTypes = [
  {
    slug: 'luxury-venues',
    name: 'Luxury Wedding Venues',
    description: 'Host an unforgettable celebration at one of Malaga\'s most exclusive venues.',
    imageKey: 'luxury-wedding-venue',
    linkHref: '/weddings/wedding-venues/luxury-venues',
    linkText: 'Explore Luxury Venues',
  },
  {
    slug: 'beach-weddings',
    name: 'Beach Wedding Venues',
    description: 'Say "I do" with the sand between your toes and the Mediterranean as your witness.',
    imageKey: 'beach-wedding-ceremony',
    linkHref: '/weddings/wedding-venues/beach-weddings',
    linkText: 'Explore Beach Venues',
  },
  {
    slug: 'villa-weddings',
    name: 'Villa Wedding Venues',
    description: 'Celebrate your special day in a private and luxurious villa.',
    imageKey: 'luxury-wedding-villa',
    linkHref: '/weddings/wedding-venues/villa-weddings',
    linkText: 'Explore Villa Venues',
  },
    {
    slug: 'cortijo-weddings',
    name: 'Cortijo Wedding Venues',
    description: 'Celebrate in a traditional and rustic Andalusian cortijo.',
    imageKey: 'rustic-finca-wedding',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {venueTypes.map((category) => (
            <InfoCard
              key={category.slug}
              title={category.name}
              imageUrl={images[category.imageKey].url}
              imageAlt={`Explore ${category.name}`}
              description={category.description}
              linkHref={category.linkHref}
              linkText={category.linkText}
              imageHint={images[category.imageKey].hint}
            />
          ))}
        </div>
      </Section>