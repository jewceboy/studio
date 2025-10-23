
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
  title: "An Insider's Guide to Puerto Banus | Costa del Sol Navigator",
  description: "Your complete insider's guide to visiting Puerto Banus. Discover the best shopping, restaurants, and luxury experiences in this glamorous marina.",
};

const puertoBanusCategories = [
    {
        slug: 'shopping',
        name: 'Shopping',
        description: 'Discover designer boutiques and luxury brands.',
        imageKey: 'luxury-shopping-street',
        linkHref: '/destinations/puerto-banus/shopping',
        linkText: 'Explore Shopping',
    },
    {
        slug: 'luxury-marina',
        name: 'Luxury Marina',
        description: 'Experience the epitome of luxury at the Puerto Banus marina.',
        imageKey: 'puerto-banus-marina',
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
