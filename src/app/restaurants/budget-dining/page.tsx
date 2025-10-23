
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
  title: 'Budget Restaurants in Malaga | Costa del Sol Navigator',
  description: 'Find affordable dining options in Malaga.',
};

const budgetDiningCategories = [
    {
        slug: 'cheap-eats',
        name: 'Cheap Eats',
        description: 'Delicious food that won\'t break the bank.',
        imageKey: 'street-food-market',
        linkHref: '/restaurants/budget-dining/cheap-eats',
        linkText: 'Find Cheap Eats',
    },
    {
        slug: 'local-favorites',
        name: 'Local Favorites',
        description: 'Discover the hidden gems loved by locals.',
        imageKey: 'traditional-spanish-cafe',
        linkHref: '/restaurants/budget-dining/local-favorites',
        linkText: 'Eat Like a Local',
    },
];

export default function BudgetDiningPage() {
  return (
    <div>
      <PageHeader
        title="Budget Dining in Malaga"
        subtitle="Enjoy great food without spending a fortune."
      />
       <Section className="pt-0" title="Affordable Options">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {budgetDiningCategories.map((category) => (
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
