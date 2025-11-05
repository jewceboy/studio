
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import GuideSignup from '@/components/blog/GuideSignup';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Malaga Travel Planning | Costa del Sol Navigator',
  description: 'Practical information and travel planning tips for your trip to Malaga.',
};

const planningCategories = [
    {
        slug: 'when-to-visit',
        name: 'When to Visit',
        description: 'A guide to help you decide the perfect time for your trip, based on weather and events.',
        imageKey: 'malaga-weather-seasons',
        linkHref: '/travel-planning/when-to-visit',
        linkText: 'Find Best Time',
    },
    {
        slug: 'itineraries',
        name: 'Suggested Itineraries',
        description: 'Get inspired with our sample itineraries for 3-day, 7-day, and other trips.',
        imageKey: 'travel-map-itinerary',
        linkHref: '/travel-planning/itineraries',
        linkText: 'See Itineraries',
    },
    {
        slug: 'budget-travel',
        name: 'Budget Travel',
        description: 'Tips and tricks for enjoying the best of Malaga without breaking the bank.',
        imageKey: 'budget-travel-money',
        linkHref: '/travel-planning/budget-travel',
        linkText: 'Get Budget Tips',
    },
    {
        slug: 'tourist-info',
        name: 'Tourist Information',
        description: 'Practical information including maps, travel apps, and local customs.',
        imageKey: 'tourist-info-map',
        linkHref: '/travel-planning/tourist-info',
        linkText: 'Get Info',
    },
];

export default function TravelPlanningPage() {
  return (
    <div>
        <div className="max-w-4xl mx-auto">
            <PageHeader
                title="Travel Planning & Practical Information"
                subtitle="Everything you need to know to plan your trip to the Costa del Sol."
            />
        </div>
      <Section className="pt-0" title="Planning Resources">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {planningCategories.map((category) => (
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
      <Section>
        <GuideSignup />
      </Section>
    </div>
  );
}
