
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
  title: 'Malaga Nightlife Hotspots | Costa del Sol Navigator',
  description: 'Discover the best nightlife hotspots in Malaga city.',
};

const nightlifeCategories = [
    {
        slug: 'bars',
        name: 'Best Bars',
        description: 'A guide to the best bars in Malaga, from rooftop terraces to traditional bodegas.',
        imageKey: 'rooftop-bar-malaga',
        linkHref: '/nightlife/malaga-city/bars',
        linkText: 'Find Bars',
    },
    {
        slug: 'clubs',
        name: 'Nightclubs',
        description: 'Your guide to the best nightclubs and late-night venues in Malaga.',
        imageKey: 'nightclub-dance-floor',
        linkHref: '/nightlife/malaga-city/clubs',
        linkText: 'Go Clubbing',
    },
    {
        slug: 'live-music',
        name: 'Live Music Venues',
        description: 'From jazz clubs to rock bars, find your sound in Malaga.',
        imageKey: 'live-music-band',
        linkHref: '/nightlife/malaga-city/live-music',
        linkText: 'Find Live Music',
    },
];

export default function MalagaCityNightlifePage() {
  return (
    <div>
      <PageHeader
        title="Malaga City Nightlife"
        subtitle="Explore the vibrant nightlife of Malaga's city center."
      />
      <Section className="pt-0" title="Nightlife Categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {nightlifeCategories.map((category) => (
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
