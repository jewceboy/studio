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
  title: 'Flamenco Shows in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best flamenco shows in Malaga.',
};

const flamencoCategories = [
    {
        slug: 'authentic',
        name: 'Authentic Flamenco Shows',
        description: 'Experience the raw passion of traditional flamenco in Andalucia.',
        imageKey: 'flamenco-dancer-passion',
        linkHref: '/nightlife/flamenco-shows/authentic',
        linkText: 'Find Authentic Shows',
    },
    {
        slug: 'dinner-shows',
        name: 'Flamenco Dinner Shows',
        description: 'Combine a spectacular show with a culinary experience in Malaga.',
        imageKey: 'dinner-show-stage',
        linkHref: '/nightlife/flamenco-shows/dinner-shows',
        linkText: 'Find Dinner Shows',
    },
];

export default function FlamencoShowsPage() {
  return (
    <div>
      <PageHeader
        title="Flamenco Shows in Malaga"
        subtitle="Experience the passion and art of flamenco."
      />
      <Section className="pt-0" title="Show Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {flamencoCategories.map((category) => (
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