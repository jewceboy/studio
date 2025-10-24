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
  title: 'Malaga Public Transport Tips | Costa del Sol Navigator',
  description: 'Tips for using public transport in Malaga.',
};

const publicTransportCategories = [
    {
        slug: 'trains',
        name: 'Trains',
        description: 'Schedules for the Cercanías C1 line from Fuengirola to Malaga.',
        imageKey: 'train-station-platform',
        linkHref: '/transfers/public-transport/trains',
        linkText: 'See Train Times',
    },
    {
        slug: 'buses',
        name: 'Buses',
        description: 'Navigating Malaga by bus with a guide to the city\'s bus network.',
        imageKey: 'city-bus-street',
        linkHref: '/transfers/public-transport/buses',
        linkText: 'Explore Bus Routes',
    },
];

export default function PublicTransportPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Public Transport Tips"
        subtitle="Getting around Malaga using public transport."
      />
      <Section className="pt-0" title="Transport Options">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {publicTransportCategories.map((category) => (
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