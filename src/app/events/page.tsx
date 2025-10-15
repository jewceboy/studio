
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga Events and Festivals | Costa del Sol Navigator',
  description: 'Your guide to the best events and festivals in Malaga.',
};

const eventCategories = [
    {
        slug: 'annual-festivals',
        name: 'Annual Festivals',
        description: 'Discover Malaga\'s most important annual festivals, from Semana Santa to the Feria de Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga feria festival'),
        imageHint: 'malaga festival',
        linkHref: '/events/annual-festivals',
        linkText: 'See Festival Dates',
    },
    {
        slug: 'cultural-events',
        name: 'Cultural Events',
        description: 'Explore the vibrant cultural scene with concerts, art exhibitions, and more.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'art gallery exhibition'),
        imageHint: 'art gallery',
        linkHref: '/events/cultural-events',
        linkText: 'Find Cultural Events',
    },
];

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        title="Events & Festivals"
        subtitle="Discover what's happening in Malaga during your visit, from traditional festivals to cultural events."
      />
       <Section className="pt-0" title="Event Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {eventCategories.map((category) => (
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
