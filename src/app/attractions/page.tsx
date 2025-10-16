
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
  title: 'Things to do in Malaga | Costa del Sol Navigator',
  description: 'Discover the best attractions and things to do in Malaga and the Costa del Sol.',
};

const attractionCategories = [
    {
        slug: 'malaga-city',
        name: 'Malaga City',
        description: 'Explore the vibrant heart of the Costa del Sol, from historic sites to modern museums.',
        imageKey: 'malaga-city-skyline',
        linkHref: '/attractions/malaga-city',
        linkText: 'Explore the City',
    },
    {
        slug: 'family-attractions',
        name: 'Family Attractions',
        description: 'Discover attractions suitable for the whole family, from water parks to theme parks.',
        imageKey: 'family-at-theme-park',
        linkHref: '/attractions/family-attractions',
        linkText: 'Find Family Fun',
    },
    {
        slug: 'adventure-activities',
        name: 'Adventure Activities',
        description: 'From hiking scenic trails to thrilling water sports, discover your next adventure.',
        imageKey: 'hiking-mountain-trail',
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
                imageUrl={images[category.imageKey].url}
                imageHint={images[category.imageKey].hint}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                />
            ))}
        </div>
      </Section>
    </div>
  );
}
