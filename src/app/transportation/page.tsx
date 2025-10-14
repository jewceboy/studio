
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Transportation & Transfers in Costa del Sol | Costa del Sol Navigator',
  description: 'Arrange seamless airport transfers, VIP transport, car rentals, and other transportation services in Costa del Sol.',
};

const transportationCategories = [
  {
    slug: 'airport-transfers',
    name: 'Airport Transfers',
    description: 'Book reliable private transfers from Malaga Airport (AGP) to your hotel or destination.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'airport transfer van'),
    imageHint: 'airport transfer van',
    linkHref: '/transportation/airport-transfers',
    linkText: 'Book a Transfer',
  },
  {
    slug: 'vip-transport',
    name: 'VIP & Luxury Transport',
    description: 'Travel in style with high-end vehicles, private chauffeurs, and personalized services.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury car interior'),
    imageHint: 'luxury car interior',
    linkHref: '/transportation/vip-transport',
    linkText: 'Arrange VIP Transport',
  },
  {
    slug: 'car-rental',
    name: 'Car Rental',
    description: 'Explore the coast at your own pace. Compare and book rental cars from trusted providers.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'rental car keys'),
    imageHint: 'rental car keys',
    linkHref: '/transportation/car-rental',
    linkText: 'Rent a Car',
  },
];

export default function TransportationPage() {
  return (
    <div>
      <PageHeader
        title="Transportation & Transfers"
        subtitle="Travel around Costa del Sol with ease and comfort. From private airport transfers to luxury car rentals, find the best options for your journey."
      />
      <Section className="pt-0" title="Transportation Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {transportationCategories.map((category) => (
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
