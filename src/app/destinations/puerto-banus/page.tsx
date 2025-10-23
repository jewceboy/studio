
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: "An Insider's Guide to Puerto Banus | Costa del Sol Navigator",
  description: "Your complete insider's guide to visiting Puerto Banus. Discover the best shopping, restaurants, and luxury experiences in this glamorous marina.",
};

const puertoBanusCategories = [
    {
        slug: 'shopping',
        name: 'Shopping',
        description: 'Discover designer boutiques and luxury brands.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'shopping puerto banus'),
        imageHint: 'luxury store window',
        linkHref: '/destinations/puerto-banus/shopping',
        linkText: 'Explore Shopping',
    },
    {
        slug: 'luxury-marina',
        name: 'Luxury Marina',
        description: 'Experience the epitome of luxury at the Puerto Banus marina.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'puerto banus luxury travel'),
        imageHint: 'superyacht marina',
        linkHref: '/destinations/puerto-banus/luxury-marina',
        linkText: 'Visit the Marina',
    },
];

export default function PuertoBanusPage() {
  return (
    <div>
      <PageHeader
        title="Puerto Banus Guide"
        subtitle="Discover the luxury and glamour of Puerto Banus."
      />
      <Section className="pt-0" title="Experience Puerto Banus">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {puertoBanusCategories.map((category) => (
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
