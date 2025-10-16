
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
  title: 'Hotels in Malaga | Costa del Sol Navigator',
  description: 'Find the best hotels in Malaga and the Costa del Sol, from luxury to budget-friendly options.',
};

const hotelCategories = [
  {
    slug: 'luxury-hotels-malaga',
    name: 'Luxury Hotels',
    description: 'Indulge in opulent stays with top-tier amenities and services in Malaga.',
    imageKey: 'luxury-hotel-malaga',
    linkHref: '/hotels/luxury-hotels-malaga',
    linkText: 'Explore Luxury',
  },
  {
    slug: 'budget-hotels-malaga',
    name: 'Budget Hotels',
    description: 'Comfortable and affordable options for savvy travelers in Malaga.',
    imageKey: 'budget-hotel-malaga',
    linkHref: '/hotels/budget-hotels-malaga',
    linkText: 'Find Budget Stays',
  },
  {
    slug: 'family-hotels-malaga',
    name: 'Family Hotels',
    description: 'Find hotels with facilities and activities perfect for all ages in Malaga.',
    imageKey: 'family-hotel-malaga',
    linkHref: '/hotels/family-hotels-malaga',
    linkText: 'See Family Options',
  },
  {
    slug: 'costa-del-sol-resorts',
    name: 'Costa del Sol Resorts',
    description: 'Discover sprawling resorts with extensive amenities along the coast.',
    imageKey: 'costa-del-sol-resort',
    linkHref: '/hotels/costa-del-sol-resorts',
    linkText: 'Discover Resorts',
  },
];

export default function HotelsPage() {
  return (
    <div>
      <PageHeader
        title="Hotels in Malaga"
        subtitle="Find your perfect stay in the Costa del Sol, from 5-star luxury to budget-friendly charm."
      />
      <Section className="pt-0" title="Hotel Categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hotelCategories.map((category) => (
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
      </Section>
    </div>
  );
}
