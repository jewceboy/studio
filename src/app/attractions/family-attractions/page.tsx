
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga Family Attractions | Costa del Sol Navigator',
  description: 'Explore family-friendly attractions in Malaga.',
};

const familyAttractionCategories = [
    {
        slug: 'kids-activities',
        name: 'Kids Activities',
        description: 'A guide to the best activities for children in Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'kids activities malaga'),
        imageHint: 'children playing',
        linkHref: '/attractions/family-attractions/kids-activities',
        linkText: 'Find Activities',
    },
    {
        slug: 'water-parks',
        name: 'Water Parks',
        description: 'Cool off at the best water parks in the Costa del Sol.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'water parks costa del sol'),
        imageHint: 'water park slide',
        linkHref: '/attractions/family-attractions/water-parks',
        linkText: 'Discover Parks',
    },
    {
        slug: 'theme-parks',
        name: 'Theme Parks',
        description: 'Find theme parks near Malaga for a fun day out.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'theme parks near malaga'),
        imageHint: 'theme park rollercoaster',
        linkHref: '/attractions/family-attractions/theme-parks',
        linkText: 'Explore Parks',
    },
];

export default function FamilyAttractionsPage() {
  return (
    <div>
      <PageHeader
        title="Family Attractions in Malaga"
        subtitle="Discover attractions suitable for the whole family in Malaga."
      />
      <Section className="pt-0" title="Fun for All Ages">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {familyAttractionCategories.map((category) => (
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
