
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
  title: 'Malaga Adventure Activities | Costa del Sol Navigator',
  description: 'Find exciting adventure activities in Malaga and the Costa del Sol.',
};

const adventureCategories = [
    {
        slug: 'hiking',
        name: 'Hiking Trails',
        description: 'Discover the most scenic hiking trails in the Costa del Sol.',
        imageKey: 'hiking-mountain-trail',
        linkHref: '/attractions/adventure-activities/hiking',
        linkText: 'Explore Trails',
    },
    {
        slug: 'water-sports',
        name: 'Water Sports',
        description: 'Information on water sports activities available in Malaga.',
        imageKey: 'sailing-boat-sea',
        linkHref: '/attractions/adventure-activities/water-sports',
        linkText: 'Discover Sports',
    },
    {
        slug: 'caminito-del-rey',
        name: 'Caminito del Rey Walk',
        description: 'Detailed guide for the breathtaking Caminito del Rey walk.',
        imageKey: 'Caminito-del-Rey-path',
        linkHref: '/attractions/adventure-activities/caminito-del-rey',
        linkText: 'Learn More',
    },
];

export default function AdventureActivitiesPage() {
  return (
    <div>
      <PageHeader
        title="Adventure Activities in Malaga"
        subtitle="From hiking to water sports, discover thrilling activities."
      />
      <Section className="pt-0" title="Thrilling Adventures">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {adventureCategories.map((category) => (
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
