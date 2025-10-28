
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
    name: 'Luxury Hotels in Malaga',
    description: 'Indulge in opulent stays with top-tier amenities and services in Malaga city.',
    imageKey: 'luxury-hotel-malaga',
    linkHref: '/hotels/luxury-hotels-malaga',
    linkText: 'Explore Luxury',
  },
  {
    slug: 'marbella',
    name: 'Hotels in Marbella',
    description: 'Discover glamorous resorts, boutique hotels, and beachfront stays in Marbella.',
    imageKey: 'marbella-old-town',
    linkHref: '/hotels/marbella',
    linkText: 'Find Marbella Hotels',
  },
  {
    slug: 'mijas',
    name: 'Hotels in Mijas',
    description: 'Find charming hotels in the white-washed village or coastal resorts in Mijas Costa.',
    imageKey: 'mijas-pueblo-village',
    linkHref: '/hotels/mijas',
    linkText: 'See Mijas Stays',
  },
  {
    slug: 'nerja',
    name: 'Hotels in Nerja',
    description: 'Stay near stunning beaches and the famous Nerja caves.',
    imageKey: 'secluded-cove-beach',
    linkHref: '/hotels/nerja',
    linkText: 'Discover Nerja Hotels',
  },
];

export default function HotelsPage() {
  return (
    <div>
      <PageHeader
        title="Hotels in Malaga & Costa del Sol"
        subtitle="Find your perfect stay, from 5-star luxury in Marbella to charming boutique hotels in Malaga's old town."
      />
      <Section className="pt-0" title="Find Accommodation by Area">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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
