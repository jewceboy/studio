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
  title: 'Malaga Cultural Events | Costa del Sol Navigator',
  description: 'A guide to cultural events happening in Malaga.',
};

const culturalEventCategories = [
    {
        slug: 'art-exhibitions',
        name: 'Art Exhibitions',
        description: 'A guide to the vibrant art scene and exhibitions in Malaga.',
        imageKey: 'art-gallery-exhibition',
        linkHref: '/events/cultural-events/art-exhibitions',
        linkText: 'Explore Exhibitions',
    },
    {
        slug: 'concerts',
        name: 'Concerts',
        description: 'Your guide to live music and concerts in the city.',
        imageKey: 'concert-stage-lights',
        linkHref: '/events/cultural-events/concerts',
        linkText: 'Find Concerts',
    },
];

export default function CulturalEventsPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Cultural Events"
        subtitle="Discover concerts, exhibitions, and more."
      />
       <Section className="pt-0" title="Event Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {culturalEventCategories.map((category) => (
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
    </div>
  );
}