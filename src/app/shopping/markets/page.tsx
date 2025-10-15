
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Markets in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best local and food markets in Malaga.',
};

const marketCategories = [
    {
        slug: 'local-markets',
        name: 'Local Markets',
        description: 'Explore the weekly markets for unique finds and local culture.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'local markets malaga'),
        imageHint: 'street market crafts',
        linkHref: '/shopping/markets/local-markets',
        linkText: 'Find Local Markets',
    },
    {
        slug: 'food-markets',
        name: 'Food Markets',
        description: 'A feast for the senses. Discover fresh, local produce and culinary delights.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'food markets malaga'),
        imageHint: 'fresh produce market',
        linkHref: '/shopping/markets/food-markets',
        linkText: 'Explore Food Markets',
    },
];

export default function MarketsPage() {
  return (
    <div>
      <PageHeader
        title="Markets in Malaga"
        subtitle="Discover fresh produce, local crafts, and vibrant atmospheres at Malaga's best markets."
      />
      <Section className="pt-0" title="Market Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {marketCategories.map((category) => (
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
