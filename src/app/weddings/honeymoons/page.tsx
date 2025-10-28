
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
  title: 'Honeymoon Costa del Sol | Costa del Sol Navigator',
  description: 'Plan a romantic honeymoon in Costa del Sol.',
};

const honeymoonCategories = [
    {
        slug: 'luxury-suites',
        name: 'Honeymoon Suites',
        description: 'Indulge in the ultimate romantic getaway in a stunning luxury suite.',
        imageKey: 'honeymoon-suite',
        linkHref: '/weddings/honeymoons/luxury-suites',
        linkText: 'Discover Suites',
    },
    {
        slug: 'romantic-hotels',
        name: 'Romantic Hotels',
        description: 'Discover charming and romantic hotels for an unforgettable stay.',
        imageKey: 'romantic-hotel-couple',
        linkHref: '/weddings/honeymoons/romantic-hotels',
        linkText: 'Find Romantic Hotels',
    },
];

export default function HoneymoonsPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Honeymoons in Costa del Sol"
        subtitle="Begin your life together with an unforgettable romantic escape in the beautiful south of Spain."
      />
      <Section className="pt-0" title="Romantic Getaways">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {honeymoonCategories.map((category) => (
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
