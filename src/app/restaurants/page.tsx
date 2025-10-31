
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
  title: 'Malaga Restaurants Guide | Costa del Sol Navigator',
  description: 'Your ultimate guide to restaurants and dining in Malaga.',
};

const restaurantCategories = [
    {
        slug: 'traditional-spanish',
        name: 'Traditional Spanish',
        description: 'Savor the authentic flavors of Spain, from classic tapas to fresh seafood.',
        imageKey: 'spanish-tapas-platter',
        linkHref: '/restaurants/traditional-spanish',
        linkText: 'Find Authentic Eats',
    },
    {
        slug: 'fine-dining',
        name: 'Fine Dining',
        description: 'Experience exquisite culinary creations at Michelin-starred and luxury restaurants.',
        imageKey: 'fine-dining-plate',
        linkHref: '/restaurants/fine-dining',
        linkText: 'Explore Fine Dining',
    },
    {
        slug: 'culinary-experiences',
        name: 'Culinary Experiences',
        description: 'Go beyond the meal with cooking classes, food tours, and wine tasting events.',
        imageKey: 'wine-tasting-glasses',
        linkHref: '/restaurants/culinary-experiences',
        linkText: 'Discover Experiences',
    },
     {
        slug: 'budget-dining',
        name: 'Budget Dining',
        description: 'Enjoy great food without spending a fortune, from cheap eats to local favorites.',
        imageKey: 'street-food-market',
        linkHref: '/restaurants/budget-dining',
        linkText: 'Find Budget Eats',
    },
];

export default function RestaurantsPage() {
  return (
    <div>
        <div className="max-w-4xl mx-auto">
            <PageHeader
                title="Restaurants & Dining"
                subtitle="A culinary journey through Malaga's best restaurants, from traditional tapas bars to fine dining."
            />
        </div>
      <Section className="pt-0" title="Dining Categories">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {restaurantCategories.map((category) => (
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
    </div>
  );
}
