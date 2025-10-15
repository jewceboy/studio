
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga Public Transport Tips | Costa del Sol Navigator',
  description: 'Tips for using public transport in Malaga.',
};

const publicTransportCategories = [
    {
        slug: 'trains',
        name: 'Trains',
        description: 'Schedules for the Cercanías C1 line from Fuengirola to Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'fuengirola train times'),
        imageHint: 'train station platform',
        linkHref: '/transfers/public-transport/trains',
        linkText: 'See Train Times',
    },
    {
        slug: 'buses',
        name: 'Buses',
        description: 'Navigating Malaga by bus with a guide to the city\'s bus network.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga bus routes'),
        imageHint: 'city bus street',
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
