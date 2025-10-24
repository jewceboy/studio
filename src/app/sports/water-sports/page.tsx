
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
    title: 'Water Sports in Malaga | Sailing, Diving & More',
    description: 'Explore the Costa del Sol as a premier destination for water sports tourism, including sailing, scuba diving, jet skiing, and more.',
};

const waterSportsCategories = [
    {
        slug: 'sailing',
        name: 'Sailing',
        description: 'Set sail on the beautiful Mediterranean sea.',
        imageKey: 'sailing-boat-sea',
        linkHref: '/sports/water-sports/sailing',
        linkText: 'Go Sailing',
    },
    {
        slug: 'diving',
        name: 'Scuba Diving',
        description: 'Discover the best dive sites and schools in Malaga.',
        imageKey: 'scuba-diver',
        linkHref: '/sports/water-sports/diving',
        linkText: 'Explore Diving',
    },
];

export default function WaterSportsPage() {
  return (
    <div>
      <PageHeader
        title="Water Sports in Malaga"
        subtitle="Dive into adventure with a variety of water sports."
      />
      <Section className="pt-0" title="Water Activities">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {waterSportsCategories.map((category) => (
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
      </