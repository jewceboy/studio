
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Luxury Hotels Malaga | Costa del Sol Navigator',
  description: 'Discover the best luxury hotels in Malaga for an unforgettable stay.',
};

const luxuryHotelCategories = [
    {
        slug: 'five-star-hotels',
        name: 'Five Star Hotels',
        description: 'Experience ultimate luxury and service at these five-star hotels.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'five star hotel malaga'),
        imageHint: 'luxury hotel lobby',
        linkHref: '/hotels/luxury-hotels-malaga/five-star-hotels',
        linkText: 'Explore 5-Star Hotels',
    },
    {
        slug: 'boutique-hotels',
        name: 'Boutique Hotels',
        description: 'Charming and unique hotels in the heart of the city.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'boutique hotel malaga center'),
        imageHint: 'boutique hotel room',
        linkHref: '/hotels/luxury-hotels-malaga/boutique-hotels',
        linkText: 'Discover Boutique Hotels',
    },
    {
        slug: 'presidential-suites',
        name: 'Presidential Suites',
        description: 'The most exclusive and luxurious suites for an extraordinary stay.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'presidential suite malaga'),
        imageHint: 'luxury hotel suite',
        linkHref: '/hotels/luxury-hotels-malaga/presidential-suites',
        linkText: 'Explore Suites',
    },
];

export default function LuxuryHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Hotels in Malaga"
        subtitle="Indulge in the finest hotels Malaga has to offer."
      />
      <Section className="pt-0" title="Luxury Categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {luxuryHotelCategories.map((category) => (
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
