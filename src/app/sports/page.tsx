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
  title: 'Sports Tourism in Costa del Sol | Costa del Sol Navigator',
  description: 'Explore sports tourism in Costa del Sol, from world-class golf courses to tennis and water sports.',
};

const sportsCategories = [
    {
        slug: 'golf',
        name: 'Golf',
        description: 'Discover why this region is known as the "Costa del Golf" with over 70 courses.',
        imageKey: 'golf-course-green',
        linkHref: '/sports/golf',
        linkText: 'Explore Golf',
    },
    {
        slug: 'tennis-padel',
        name: 'Tennis & Padel',
        description: 'Enjoy racquet sports in the sunshine at top clubs and facilities.',
        imageKey: 'padel-tennis-court',
        linkHref: '/sports/tennis-padel',
        linkText: 'Find Courts',
    },
    {
        slug: 'water-sports',
        name: 'Water Sports',
        description: 'Dive into adventure with sailing, scuba diving, and more on the Mediterranean.',
        imageKey: 'sailing-boat-sea',
        linkHref: '/sports/water-sports',
        linkText: 'Discover Water Sports',
    },
];

export default function SportsPage() {
  return (
    <div>
      <PageHeader
        title="Sports & Golf Tourism"
        subtitle="Active holidays in the sun with world-class facilities for golf, tennis, and water sports."
      />
       <Section className="pt-0" title="Activities">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sportsCategories.map((category) => (
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