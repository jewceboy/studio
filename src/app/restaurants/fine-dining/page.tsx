
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
  title: 'Fine Dining in Malaga | Costa del Sol Navigator',
  description: 'Experience the best of fine dining in Malaga.',
};

const fineDiningCategories = [
    {
        slug: 'michelin-star',
        name: 'Michelin Star Restaurants',
        description: 'Discover the best of Andalusian haute cuisine.',
        imageKey: 'michelin-star-plate',
        linkHref: '/restaurants/fine-dining/michelin-star',
        linkText: 'Explore Michelin Restaurants',
    },
    {
        slug: 'luxury',
        name: 'Luxury Restaurants',
        description: 'Experience exquisite dining in glamorous settings in Marbella.',
        imageKey: 'luxury-dining-room',
        linkHref: '/restaurants/fine-dining/luxury',
        linkText: 'Discover Luxury Dining',
    },
];

export default function FineDiningPage() {
  return (
    <div>
      <PageHeader
        title="Fine Dining in Malaga"
        subtitle="Exquisite culinary experiences for the discerning palate."
      />
      <Section className="pt-0" title="Exquisite Dining">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {fineDiningCategories.map((category) => (
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
