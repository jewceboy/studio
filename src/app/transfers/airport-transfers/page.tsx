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
  title: 'Malaga Airport Transfers | Costa del Sol Navigator',
  description: 'Arrange your transfers from Malaga airport.',
};

const transferOptions = [
    {
        slug: 'taxi',
        name: 'Airport Taxis',
        description: 'A guide to taxi fares from Malaga airport.',
        imageKey: 'airport-taxi-rank',
        linkHref: '/transfers/airport-transfers/taxi',
        linkText: 'See Taxi Prices',
    },
    {
        slug: 'shuttle',
        name: 'Airport Shuttles',
        description: 'Shared and private shuttle services from the airport.',
        imageKey: 'airport-shuttle-bus',
        linkHref: '/transfers/airport-transfers/shuttle',
        linkText: 'Explore Shuttles',
    },
    {
        slug: 'bus',
        name: 'Airport Bus',
        description: 'A guide to using the bus service from the airport to the city center.',
        imageKey: 'public-bus-stop',
        linkHref: '/transfers/airport-transfers/bus',
        linkText: 'Get Bus Info',
    },
];

export default function AirportTransfersPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Airport Transfers"
        subtitle="Reliable and convenient airport transfer options."
      />
      <Section className="pt-0" title="Transfer Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {transferOptions.map((category) => (
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