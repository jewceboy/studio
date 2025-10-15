
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Costa del Sol Destinations | Costa del Sol Navigator',
  description: 'Explore the diverse destinations of the Costa del Sol.',
};

const destinationCategories = [
    {
        slug: 'mijas-pueblo',
        name: 'Mijas Pueblo',
        description: 'Discover the charm of this picturesque white-washed Andalusian village.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'mijas pueblo village'),
        imageHint: 'mijas pueblo',
        linkHref: '/destinations/mijas-pueblo',
        linkText: 'Explore Mijas',
    },
    {
        slug: 'puerto-banus',
        name: 'Puerto Banus',
        description: 'Experience the luxury and glamour of this world-famous marina.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'puerto banus marina'),
        imageHint: 'puerto banus yacht',
        linkHref: '/destinations/puerto-banus',
        linkText: 'Visit Puerto Banus',
    },
    {
        slug: 'marbella',
        name: 'Marbella',
        description: 'Explore the iconic old town, luxurious shops, and beautiful beaches of Marbella.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'marbella old town'),
        imageHint: 'marbella old town',
        linkHref: '/destinations/marbella',
        linkText: 'Discover Marbella',
    },
    {
        slug: 'benalmadena',
        name: 'Benalmadena',
        description: 'From its stunning marina to the cable car, Benalmadena offers fun for everyone.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'benalmadena puerto'),
        imageHint: 'benalmadena marina',
        linkHref: '/destinations/benalmadena',
        linkText: 'See Benalmadena',
    },
];

export default function DestinationsPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Destinations"
        subtitle="Discover the unique charm of each town and city along the coast."
      />
      <Section className="pt-0" title="Featured Destinations">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {destinationCategories.map((category) => (
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
