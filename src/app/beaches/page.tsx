
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
  title: 'Best beaches near Malaga | Costa del Sol Navigator',
  description: 'Find the best beaches near Malaga, from popular spots to hidden gems.',
};

const beachCategories = [
    {
        slug: 'malaga-beaches',
        name: 'Malaga Beaches',
        description: 'Discover the beautiful and lively beaches right in the city of Malaga.',
        imageKey: 'malaga-city-beach',
        linkHref: '/beaches/malaga-beaches',
        linkText: 'Explore City Beaches',
    },
    {
        slug: 'beach-holidays',
        name: 'Beach Holidays',
        description: 'Plan your perfect beach holiday with our guides to packages and all-inclusive deals.',
        imageKey: 'beach-resort-holiday',
        linkHref: '/beaches/beach-holidays',
        linkText: 'Plan Your Holiday',
    },
    {
        slug: 'beach-clubs',
        name: 'Beach Clubs',
        description: 'Experience the vibrant and luxurious beach club scene in Marbella and Puerto Banus.',
        imageKey: 'luxury-beach-club',
        linkHref: '/beaches/beach-clubs',
        linkText: 'Visit Beach Clubs',
    },
];

export default function BeachesPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Beaches & Coastal"
          subtitle="Discover the stunning coastline of the Costa del Sol, from bustling city beaches to exclusive clubs."
        />
      </div>
      <Section className="pt-0" title="Explore the Coast">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {beachCategories.map((category) => (
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
        </div>
      </Section>
    </div>
  );
}
