
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
  title: 'Luxury Hotels Malaga | Costa del Sol Navigator',
  description: 'Discover the best luxury hotels in Malaga for an unforgettable stay.',
};

const luxuryHotelCategories = [
    {
        slug: 'five-star-hotels',
        name: 'Five Star Hotels',
        description: 'Experience ultimate luxury and service at these five-star hotels.',
        imageKey: 'luxury-hotel-lobby',
        linkHref: '/hotels/luxury-hotels-malaga/five-star-hotels',
        linkText: 'Explore 5-Star Hotels',
    },
    {
        slug: 'boutique-hotels',
        name: 'Boutique Hotels',
        description: 'Charming and unique hotels in the heart of the city.',
        imageKey: 'boutique-hotel-room',
        linkHref: '/hotels/luxury-hotels-malaga/boutique-hotels',
        linkText: 'Discover Boutique Hotels',
    },
    {
        slug: 'presidential-suites',
        name: 'Presidential Suites',
        description: 'The most exclusive and luxurious suites for an extraordinary stay.',
        imageKey: 'luxury-hotel-suite',
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
                imageUrl={images[category.imageKey].url}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={images[category.imageKey].hint}
                />
            ))}