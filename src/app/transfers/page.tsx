
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga Airport Transfers | Costa del Sol Navigator',
  description: 'Your guide to transportation and transfers from Malaga Airport.',
};

const transferCategories = [
  {
    slug: 'airport-transfers',
    name: 'Airport Transfers',
    description: 'Reliable and convenient options to get you from Malaga Airport to your destination.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'airport arrivals hall'),
    imageHint: 'airport arrivals hall',
    linkHref: '/transfers/airport-transfers',
    linkText: 'View Options',
  },
  {
    slug: 'luxury-transportation',
    name: 'Luxury Transportation',
    description: 'Travel in style with high-end car rentals, chauffeur services, and private jets.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury car interior'),
    imageHint: 'luxury car interior',
    linkHref: '/transfers/luxury-transportation',
    linkText: 'Explore Luxury',
  },
  {
    slug: 'public-transport',
    name: 'Public Transport',
    description: 'Navigate the Costa del Sol efficiently with tips on local buses and trains.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga train station'),
    imageHint: 'malaga train station',
    linkHref: '/transfers/public-transport',
    linkText: 'Get Tips',
  },
];

export default function TransfersPage() {
  return (
    <div>
      <PageHeader
        title="Transportation & Transfers"
        subtitle="Getting around the Costa del Sol has never been easier. Find the best options for your needs."
      />
      <Section className="pt-0" title="Transfer Options">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {transferCategories.map((category) => (
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
