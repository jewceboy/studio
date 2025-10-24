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
  title: 'Luxury Shopping Marbella | Costa del Sol Navigator',
  description: 'A guide to luxury shopping in Marbella and Puerto Banus.',
};

const luxuryShoppingCategories = [
    {
        slug: 'puerto-banus',
        name: 'Shopping in Puerto Banus',
        description: 'Explore the world-famous marina and its luxury shopping scene.',
        imageKey: 'luxury-fashion-store',
        linkHref: '/shopping/luxury-shopping/puerto-banus',
        linkText: 'Explore Puerto Banus',
    },
    {
        slug: 'designer-boutiques',
        name: 'Designer Boutiques',
        description: 'A curated guide to the finest fashion stores and designer labels in Marbella.',
        imageKey: 'high-fashion-boutique',
        linkHref: '/shopping/luxury-shopping/designer-boutiques',
        linkText: 'Find Boutiques',
    },
    {
        slug: 'personal-shoppers',
        name: 'Personal Shoppers',
        description: 'Bespoke styling and shopping services for a truly luxurious experience.',
        imageKey: 'personal-shopper-style',
        linkHref: '/shopping/luxury-shopping/personal-shoppers',
        linkText: 'Hire a Shopper',
    },
];

export default function LuxuryShoppingPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Shopping in Marbella"
        subtitle="Indulge in a world of high fashion, designer brands, and exclusive boutiques."
      />
      <Section className="pt-0" title="High-End Retail">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {luxuryShoppingCategories.map((category) => (
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