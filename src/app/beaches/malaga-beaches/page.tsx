
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
  title: 'Malaga Beaches | Costa del Sol Navigator',
  description: 'Discover the beautiful beaches of Malaga.',
};

const malagaBeachesCategories = [
    {
        slug: 'family-beaches',
        name: 'Family-Friendly Beaches',
        description: 'Discover safe and fun beaches for your family in Malaga.',
        imageKey: 'family-beach-playing',
        linkHref: '/beaches/malaga-beaches/family-beaches',
        linkText: 'Find Family Beaches',
    },
    {
        slug: 'la-malagueta',
        name: 'La Malagueta Beach',
        description: 'Everything you need to know about Malaga\'s most famous beach.',
        imageKey: 'malaga-city-beach',
        linkHref: '/beaches/malaga-beaches/la-malagueta',
        linkText: 'Explore La Malagueta',
    },
];

export default function MalagaBeachesPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Beaches"
        subtitle="A guide to the best beaches in and around Malaga."
      />
      <Section className="pt-0" title="City Beaches">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {malagaBeachesCategories.map((category) => (
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
