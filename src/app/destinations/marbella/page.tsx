
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Marbella Travel Tips | Costa del Sol Navigator',
  description: 'Your essential travel tips for visiting Marbella.',
};

const marbellaCategories = [
    {
        slug: 'old-town',
        name: 'Marbella Old Town',
        description: 'A complete guide to exploring Marbella\'s charming old town.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'marbella old town guide'),
        imageHint: 'old town street',
        linkHref: '/destinations/marbella/old-town',
        linkText: 'Explore Old Town',
    },
    {
        slug: 'shopping',
        name: 'Marbella Shopping',
        description: 'A guide to the best shopping districts in Marbella.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'marbella shopping district'),
        imageHint: 'luxury shopping street',
        linkHref: '/destinations/marbella/shopping',
        linkText: 'Discover Shopping',
    },
];

export default function MarbellaPage() {
  return (
    <div>
      <PageHeader
        title="Marbella Travel Tips"
        subtitle="Make the most of your trip to Marbella with these tips."
      />
      <Section className="pt-0" title="Discover Marbella">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {marbellaCategories.map((category) => (
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
