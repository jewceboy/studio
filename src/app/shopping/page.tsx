
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Shopping in Malaga | Costa del Sol Navigator',
  description: 'A guide to shopping in Malaga, from luxury boutiques to local markets.',
};

const shoppingCategories = [
    {
        slug: 'luxury-shopping',
        name: 'Luxury Shopping',
        description: 'Indulge in a world of high fashion, designer brands, and exclusive boutiques in Marbella.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury fashion store'),
        imageHint: 'luxury store',
        linkHref: '/shopping/luxury-shopping',
        linkText: 'Explore Luxury',
    },
    {
        slug: 'malls-centers',
        name: 'Shopping Malls',
        description: 'Discover the best places for one-stop shopping at large malls and centers.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'modern shopping mall'),
        imageHint: 'shopping mall',
        linkHref: '/shopping/malls-centers',
        linkText: 'Visit Malls',
    },
    {
        slug: 'markets',
        name: 'Markets',
        description: 'Explore fresh produce at food markets and find unique crafts at local street markets.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'local craft market'),
        imageHint: 'craft market',
        linkHref: '/shopping/markets',
        linkText: 'Discover Markets',
    },
];

export default function ShoppingPage() {
  return (
    <div>
      <PageHeader
        title="Shopping & Retail"
        subtitle="From high-end designer brands to unique local crafts, discover the best shopping in the Costa del Sol."
      />
      <Section className="pt-0" title="Retail Categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {shoppingCategories.map((category) => (
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
