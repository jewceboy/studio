
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Best beaches near Malaga | Costa del Sol Navigator',
  description: 'Find the best beaches near Malaga, from popular spots to hidden gems.',
};

const beachCategories = [
    {
        slug: 'malaga-beaches',
        name: 'Malaga Beaches',
        description: 'Discover the beautiful and lively beaches right in the city of Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga city beach'),
        imageHint: 'malaga city beach',
        linkHref: '/beaches/malaga-beaches',
        linkText: 'Explore City Beaches',
    },
    {
        slug: 'beach-holidays',
        name: 'Beach Holidays',
        description: 'Plan your perfect beach holiday with our guides to packages and all-inclusive deals.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'beach resort holiday'),
        imageHint: 'beach resort holiday',
        linkHref: '/beaches/beach-holidays',
        linkText: 'Plan Your Holiday',
    },
    {
        slug: 'beach-clubs',
        name: 'Beach Clubs',
        description: 'Experience the vibrant and luxurious beach club scene in Marbella and Puerto Banus.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury beach club'),
        imageHint: 'luxury beach club',
        linkHref: '/beaches/beach-clubs',
        linkText: 'Visit Beach Clubs',
    },
];

export default function BeachesPage() {
  return (
    <div>
      <PageHeader
        title="Beaches & Coastal"
        subtitle="Discover the stunning coastline of the Costa del Sol, from bustling city beaches to exclusive clubs."
      />
      <Section className="pt-0" title="Explore the Coast">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {beachCategories.map((category) => (
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
