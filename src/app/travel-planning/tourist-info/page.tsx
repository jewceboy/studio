
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
  title: 'Malaga Tourist Information | Costa del Sol Navigator',
  description: 'Essential tourist information for visitors to Malaga.',
};

const touristInfoCategories = [
    {
        slug: 'travel-app',
        name: 'Malaga Travel App',
        description: 'Your pocket guide to Malaga.',
        imageKey: 'smartphone-app',
        linkHref: '/travel-planning/tourist-info/travel-app',
        linkText: 'Download App',
    },
    {
        slug: 'maps',
        name: 'Malaga Sightseeing Map',
        description: 'Downloadable maps to help you navigate the city.',
        imageKey: 'tourist-info-map',
        linkHref: '/travel-planning/tourist-info/maps',
        linkText: 'Get Maps',
    },
];

export default function TouristInfoPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Tourist Information"
        subtitle="Practical information for your visit."
      />
       <Section className="pt-0" title="Resources">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {touristInfoCategories.map((category) => (
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
