
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
  title: 'Benalmadena Travel Guide | Costa del Sol Navigator',
  description: 'Your complete travel guide to Benalmadena.',
};

const benalmadenaCategories = [
    {
        slug: 'marina',
        name: 'Benalmadena Marina',
        description: 'A guide to the stunning marina in Benalmadena.',
        imageKey: 'benalmadena-puerto',
        linkHref: '/destinations/benalmadena/marina',
        linkText: 'Explore the Marina',
    },
    {
        slug: 'cable-car',
        name: 'Benalmadena Cable Car',
        description: 'Enjoy stunning views from the Benalmadena cable car.',
        imageKey: 'cable-car-mountain',
        linkHref: '/destinations/benalmadena/cable-car',
        linkText: 'See the Views',
    },
];

export default function BenalmadenaPage() {
  return (
    <div>
      <PageHeader
        title="Benalmadena Travel Guide"
        subtitle="Discover everything Benalmadena has to offer."
      />
      <Section className="pt-0" title="Benalmadena Highlights">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {benalmadenaCategories.map((category) => (
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