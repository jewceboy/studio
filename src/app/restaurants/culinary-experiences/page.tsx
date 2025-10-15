
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Culinary Experiences in Malaga | Costa del Sol Navigator',
  description: 'Immerse yourself in Malaga\'s food culture with unique culinary experiences.',
};

const culinaryExperienceCategories = [
    {
        slug: 'cooking-classes',
        name: 'Cooking Classes',
        description: 'Master the art of Spanish cooking.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'cooking classes malaga'),
        imageHint: 'cooking class hands-on',
        linkHref: '/restaurants/culinary-experiences/cooking-classes',
        linkText: 'Find a Class',
    },
    {
        slug: 'food-tours',
        name: 'Food Tours',
        description: 'Taste your way through Malaga with our food tours.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'food tours malaga'),
        imageHint: 'market food tour',
        linkHref: '/restaurants/culinary-experiences/food-tours',
        linkText: 'Join a Tour',
    },
    {
        slug: 'wine-tasting',
        name: 'Wine Tasting',
        description: 'Explore the flavors of Andalusian wines.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'wine tasting malaga'),
        imageHint: 'wine glasses tasting',
        linkHref: '/restaurants/culinary-experiences/wine-tasting',
        linkText: 'Go Wine Tasting',
    },
];

export default function CulinaryExperiencesPage() {
  return (
    <div>
      <PageHeader
        title="Culinary Experiences in Malaga"
        subtitle="Go beyond dining with cooking classes, food tours, and wine tasting."
      />
       <Section className="pt-0" title="Immersive Experiences">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {culinaryExperienceCategories.map((category) => (
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
