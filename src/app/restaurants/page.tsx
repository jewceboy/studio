
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga Restaurants Guide | Costa del Sol Navigator',
  description: 'Your ultimate guide to restaurants and dining in Malaga.',
};

const restaurantCategories = [
    {
        slug: 'traditional-spanish',
        name: 'Traditional Spanish',
        description: 'Savor the authentic flavors of Spain, from classic tapas to fresh seafood.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'spanish tapas platter'),
        imageHint: 'spanish tapas',
        linkHref: '/restaurants/traditional-spanish',
        linkText: 'Find Authentic Eats',
    },
    {
        slug: 'fine-dining',
        name: 'Fine Dining',
        description: 'Experience exquisite culinary creations at Michelin-starred and luxury restaurants.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'fine dining plate'),
        imageHint: 'gourmet food',
        linkHref: '/restaurants/fine-dining',
        linkText: 'Explore Fine Dining',
    },
    {
        slug: 'culinary-experiences',
        name: 'Culinary Experiences',
        description: 'Go beyond the meal with cooking classes, food tours, and wine tasting events.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'wine tasting glasses'),
        imageHint: 'wine tasting',
        linkHref: '/restaurants/culinary-experiences',
        linkText: 'Discover Experiences',
    },
     {
        slug: 'budget-dining',
        name: 'Budget Dining',
        description: 'Enjoy great food without spending a fortune, from cheap eats to local favorites.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'street food market'),
        imageHint: 'street food',
        linkHref: '/restaurants/budget-dining',
        linkText: 'Find Budget Eats',
    },
];

export default function RestaurantsPage() {
  return (
    <div>
      <PageHeader
        title="Restaurants & Dining"
        subtitle="A culinary journey through Malaga's best restaurants, from traditional tapas bars to fine dining."
      />
      <Section className="pt-0" title="Dining Categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {restaurantCategories.map((category) => (
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
