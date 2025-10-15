
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Budget Travel in Malaga | Costa del Sol Navigator',
  description: 'Tips and tricks for traveling in Malaga on a budget.',
};

const budgetTravelCategories = [
    {
        slug: 'cheap-flights',
        name: 'Cheap Flights to Malaga',
        description: 'Tips and tools for finding the best airfare deals.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'cheap flights to malaga'),
        imageHint: 'airplane window view',
        linkHref: '/travel-planning/budget-travel/cheap-flights',
        linkText: 'Find Flights',
    },
    {
        slug: 'free-activities',
        name: 'Free Activities in Malaga',
        description: 'Explore the city without spending a euro.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'free activities malaga'),
        imageHint: 'park bench relaxing',
        linkHref: '/travel-planning/budget-travel/free-activities',
        linkText: 'Discover Free Fun',
    },
    {
        slug: 'tips',
        name: 'General Budget Tips',
        description: 'Money-saving advice for your trip to Spain.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'budget travel tips spain'),
        imageHint: 'euros coins cash',
        linkHref: '/travel-planning/budget-travel/tips',
        linkText: 'Get Tips',
    },
];

export default function BudgetTravelPage() {
  return (
    <div>
      <PageHeader
        title="Budget Travel in Malaga"
        subtitle="Enjoy the best of Malaga without breaking the bank."
      />
      <Section className="pt-0" title="Money-Saving Guides">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {budgetTravelCategories.map((category) => (
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
