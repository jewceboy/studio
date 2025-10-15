
import PageHeader from '@/components/shared/PageHeader';
import QuizForm from './QuizForm'; // Client Component
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Plan Your Personalized Costa del Sol Trip | Costa del Sol Navigator',
  description: 'Answer a few questions and get a personalized trip plan for your Costa del Sol adventure, including town recommendations, activities, and accommodation ideas.',
};

const planningCategories = [
    {
        slug: 'when-to-visit',
        name: 'When to Visit',
        description: 'A guide to help you decide the perfect time for your trip, based on weather and events.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga weather seasons'),
        imageHint: 'malaga seasons',
        linkHref: '/travel-planning/when-to-visit',
        linkText: 'Find Best Time',
    },
    {
        slug: 'itineraries',
        name: 'Suggested Itineraries',
        description: 'Get inspired with our sample itineraries for 3-day, 7-day, and other trips.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'travel map itinerary'),
        imageHint: 'travel map',
        linkHref: '/travel-planning/itineraries',
        linkText: 'See Itineraries',
    },
    {
        slug: 'budget-travel',
        name: 'Budget Travel',
        description: 'Tips and tricks for enjoying the best of Malaga without breaking the bank.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'budget travel money'),
        imageHint: 'budget travel',
        linkHref: '/travel-planning/budget-travel',
        linkText: 'Get Budget Tips',
    },
    {
        slug: 'tourist-info',
        name: 'Tourist Information',
        description: 'Practical information including maps, travel apps, and local customs.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'tourist info map'),
        imageHint: 'tourist map',
        linkHref: '/travel-planning/tourist-info',
        linkText: 'Get Info',
    },
];


export default function PlanYourTripPage() {
  return (
    <div>
      <PageHeader
        title="Create Your Personalized Costa del Sol Itinerary"
        subtitle="Tell us about your dream trip, and we'll craft a unique plan just for you. Answer a few quick questions to get started!"
      />
      <QuizForm />
        <Section className="pt-0" title="Or, Plan It Yourself">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {planningCategories.map((category) => (
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
