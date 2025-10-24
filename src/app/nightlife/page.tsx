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
  title: 'Malaga Nightlife Guide | Costa del Sol Navigator',
  description: 'Your complete guide to nightlife in Malaga and the Costa del Sol.',
};

const nightlifeCategories = [
    {
        slug: 'malaga-city',
        name: 'Malaga City Nightlife',
        description: 'Explore the vibrant nightlife of Malaga\'s city center, from traditional bars to lively clubs.',
        imageKey: 'malaga-nightlife-street',
        linkHref: '/nightlife/malaga-city',
        linkText: 'Explore Malaga City',
    },
    {
        slug: 'marbella-puerto-banus',
        name: 'Marbella & Puerto Banus',
        description: 'Experience the glamorous and exclusive nightlife scene in Marbella and Puerto Banus.',
        imageKey: 'marbella-nightclub',
        linkHref: '/nightlife/marbella-puerto-banus',
        linkText: 'Discover Luxury Nightlife',
    },
    {
        slug: 'flamenco-shows',
        name: 'Flamenco Shows',
        description: 'Experience the passion and soul of Andalusia with an authentic flamenco performance.',
        imageKey: 'flamenco-dancer',
        linkHref: '/nightlife/flamenco-shows',
        linkText: 'Find Shows',
    },
];

export default function NightlifePage() {
  return (
    <div>
      <PageHeader
        title="Nightlife & Entertainment"
        subtitle="Discover the best bars, clubs, and entertainment on the Costa del Sol."
      />
       <Section className="pt-0" title="Nightlife Scenes">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {nightlifeCategories.map((category) => (
                <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={images[category.imageKey].url}
                imageHint={images[category.imageKey].hint}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                />
            ))}
        </div>
      </Section>
    </div>
  );
}