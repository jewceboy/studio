
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
  title: 'Traditional Spanish Restaurants in Malaga | Costa del Sol Navigator',
  description: 'Discover authentic Spanish cuisine in Malaga.',
};

const traditionalCategories = [
    {
        slug: 'tapas-bars',
        name: 'Tapas Bars',
        description: 'Experience the vibrant tapas culture of Malaga.',
        imageKey: 'tapas-bar-food',
        linkHref: '/restaurants/traditional-spanish/tapas-bars',
        linkText: 'Find Tapas Bars',
    },
    {
        slug: 'seafood',
        name: 'Seafood Restaurants',
        description: 'Enjoy the freshest catch from the Mediterranean.',
        imageKey: 'fresh-seafood-platter',
        linkHref: '/restaurants/traditional-spanish/seafood',
        linkText: 'Find Seafood',
    },
];

export default function TraditionalSpanishPage() {
  return (
    <div>
      <PageHeader
        title="Traditional Spanish Restaurants in Malaga"
        subtitle="Savor the authentic flavors of Spain."
      />
      <Section className="pt-0" title="Cuisine Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {traditionalCategories.map((category) => (
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
