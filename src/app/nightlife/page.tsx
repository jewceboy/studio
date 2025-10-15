
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga Nightlife Guide | Costa del Sol Navigator',
  description: 'Your complete guide to nightlife in Malaga and the Costa del Sol.',
};

const nightlifeCategories = [
    {
        slug: 'malaga-city',
        name: 'Malaga City Nightlife',
        description: 'Explore the vibrant nightlife of Malaga\'s city center, from traditional bars to lively clubs.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga nightlife street'),
        imageHint: 'malaga nightlife',
        linkHref: '/nightlife/malaga-city',
        linkText: 'Explore Malaga City',
    },
    {
        slug: 'marbella-puerto-banus',
        name: 'Marbella & Puerto Banus',
        description: 'Experience the glamorous and exclusive nightlife scene in Marbella and Puerto Banus.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'marbella nightclub'),
        imageHint: 'marbella nightclub',
        linkHref: '/nightlife/marbella-puerto-banus',
        linkText: 'Discover Luxury Nightlife',
    },
    {
        slug: 'flamenco-shows',
        name: 'Flamenco Shows',
        description: 'Experience the passion and soul of Andalusia with an authentic flamenco performance.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'flamenco dancer'),
        imageHint: 'flamenco dancer',
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
                imageUrl={category.imageUrl}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={category.imageHint}
                />
            ))}
        </div>
      </Section>
    </div>
  );
}
