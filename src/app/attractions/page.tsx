
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Things to do in Malaga | Costa del Sol Navigator',
  description: 'Discover the best attractions and things to do in Malaga and the Costa del Sol.',
};

const attractionCategories = [
    {
        slug: 'malaga-city',
        name: 'Malaga City',
        description: 'Explore the vibrant heart of the Costa del Sol, from historic sites to modern museums.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga city skyline'),
        imageHint: 'malaga city skyline',
        linkHref: '/attractions/malaga-city',
        linkText: 'Explore the City',
    },
    {
        slug: 'family-attractions',
        name: 'Family Attractions',
        description: 'Discover attractions suitable for the whole family, from water parks to theme parks.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'family at theme park'),
        imageHint: 'family theme park',
        linkHref: '/attractions/family-attractions',
        linkText: 'Find Family Fun',
    },
    {
        slug: 'adventure-activities',
        name: 'Adventure Activities',
        description: 'From hiking scenic trails to thrilling water sports, discover your next adventure.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'hiking mountain trail'),
        imageHint: 'hiking mountain trail',
        linkHref: '/attractions/adventure-activities',
        linkText: 'Seek Adventure',
    },
];

export default function AttractionsPage() {
  return (
    <div>
      <PageHeader
        title="Attractions & Things To Do"
        subtitle="Explore the best attractions, from historic sites to family fun and thrilling adventures."
      />
      <Section className="pt-0" title="Categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {attractionCategories.map((category) => (
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
