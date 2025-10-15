
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Family Friendly Hotels in Malaga | Costa del Sol Navigator',
  description: 'Find the best family-friendly hotels in Malaga.',
};

const familyHotelCategories = [
    {
        slug: 'all-inclusive',
        name: 'All-Inclusive Family Resorts',
        description: 'Enjoy a carefree family vacation with these all-inclusive resorts.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'family resort costa del sol'),
        imageHint: 'family resort pool',
        linkHref: '/hotels/family-hotels-malaga/all-inclusive',
        linkText: 'Explore All-Inclusive',
    },
    {
        slug: 'kids-clubs',
        name: 'Hotels with Kids Clubs',
        description: 'Keep the little ones entertained with these family-friendly hotels.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'hotel kids club malaga'),
        imageHint: 'kids club playground',
        linkHref: '/hotels/family-hotels-malaga/kids-clubs',
        linkText: 'Find Kids Clubs',
    },
];

export default function FamilyHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Family Friendly Hotels in Malaga"
        subtitle="Hotels that welcome families with open arms."
      />
      <Section className="pt-0" title="Family-Friendly Options">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {familyHotelCategories.map((category) => (
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
