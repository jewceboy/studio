
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Beach Holidays in Malaga | Costa del Sol Navigator',
  description: 'Plan your perfect beach holiday in Malaga.',
};

const beachHolidayCategories = [
    {
        slug: 'packages',
        name: 'Holiday Packages',
        description: 'Find the perfect holiday package for your trip to the Costa del Sol.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'costa del sol holidays'),
        imageHint: 'beach resort package',
        linkHref: '/beaches/beach-holidays/packages',
        linkText: 'Explore Packages',
    },
    {
        slug: 'all-inclusive',
        name: 'All-Inclusive Holidays',
        description: 'Enjoy a hassle-free vacation with our all-inclusive beach holiday packages.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'all inclusive beach holidays'),
        imageHint: 'resort food buffet',
        linkHref: '/beaches/beach-holidays/all-inclusive',
        linkText: 'Find All-Inclusive Deals',
    },
];

export default function BeachHolidaysPage() {
  return (
    <div>
      <PageHeader
        title="Beach Holidays in Malaga"
        subtitle="Everything you need to plan your beach vacation in Malaga."
      />
      <Section className="pt-0" title="Holiday Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {beachHolidayCategories.map((category) => (
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
