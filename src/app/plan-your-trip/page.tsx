import PageHeader from '@/components/shared/PageHeader';
import QuizForm from './QuizForm'; // Client Component
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import Faq from '@/components/shared/Faq';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;


export const metadata = {
  title: 'Plan Your Personalized Costa del Sol Trip | Malaga Travel Guide',
  description: 'Answer a few questions and get a personalized trip plan for your Costa del Sol adventure, including town recommendations, activities, and accommodation ideas.',
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

const tripPlannerFaqs = [
  {
    question: "How does the personalized trip planner work?",
    answer: "Our AI-powered tool analyzes your answers to the quiz—your travel style, interests, trip duration, and budget—to generate a custom itinerary. It suggests a town that best fits your vibe, along with recommended activities and accommodation types to get you started."
  },
  {
    question: "Is the trip plan final?",
    answer: "Not at all! The generated plan is a starting point designed to inspire you. You can use it as a guide and explore our other pages for more detailed information on specific destinations, hotels, and activities to build your perfect trip."
  },
  {
    question: "How much does it cost to use the trip planner?",
    answer: "The personalized trip planner is completely free to use. Our goal is to help you discover the best of the Costa del Sol."
  },
  {
    question: "Can I save my trip plan?",
    answer: "Currently, you cannot save the plan directly on our site. However, we are working on a feature that will allow you to email the results to yourself for future reference."
  }
];


export default function PlanYourTripPage() {
  return (
    <div>
      <PageHeader
        title="Create Your Personalized Costa del Sol Itinerary"
        subtitle="Tell us about your dream trip, and we'll craft a unique plan just for you. Answer a few quick questions to get started!"
      />
      <QuizForm />
        <Section className="py-16" title="Or, Plan It Yourself">
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
        </Section>
        <Section title="Frequently Asked Questions" className="bg-secondary/10 pt-16 pb-16">
          <Faq faqs={tripPlannerFaqs} />
      </Section>
    </div>
  );
}