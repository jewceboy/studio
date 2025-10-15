
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga Travel Itineraries | Costa del Sol Navigator',
  description: 'Suggested travel itineraries for Malaga and the Costa del Sol.',
};

const itineraryCategories = [
    {
        slug: '3-day',
        name: '3-Day Malaga Itinerary',
        description: 'How to spend a perfect long weekend in Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, '3 day malaga itinerary'),
        imageHint: 'city map plan',
        linkHref: '/travel-planning/itineraries/3-day',
        linkText: 'See 3-Day Plan',
    },
    {
        slug: 'week',
        name: 'One Week in Costa del Sol',
        description: 'Experience the best of the coast with this 7-day travel plan.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'one week costa del sol itinerary'),
        imageHint: 'coastal road trip',
        linkHref: '/travel-planning/itineraries/week',
        linkText: 'See 7-Day Plan',
    },
];

export default function ItinerariesPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Travel Itineraries"
        subtitle="Get inspired with our suggested itineraries for your trip."
      />
      <Section className="pt-0" title="Trip Plans">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {itineraryCategories.map((category) => (
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
