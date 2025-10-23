
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
  title: 'Budget Hotels in Malaga | Costa del Sol Navigator',
  description: 'Find affordable and budget-friendly hotels in Malaga.',
};

const budgetHotelCategories = [
    {
        slug: 'hostels',
        name: 'Backpacker Hostels',
        description: 'A guide to the best hostels for backpackers in the Costa del Sol.',
        imageKey: 'hostel-dorm-room',
        linkHref: '/hotels/budget-hotels-malaga/hostels',
        linkText: 'Explore Hostels',
    },
    {
        slug: 'cheap-accommodation',
        name: 'Cheap Accommodation',
        description: 'Affordable places to stay in the Costa del Sol.',
        imageKey: 'budget-hotel-room',
        linkHref: '/hotels/budget-hotels-malaga/cheap-accommodation',
        linkText: 'Find Cheap Stays',
    },
];

export default function BudgetHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Budget Hotels in Malaga"
        subtitle="Great value hotels for your stay in Malaga."
      />
       <Section className="pt-0" title="Budget Options">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {budgetHotelCategories.map((category) => (
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
