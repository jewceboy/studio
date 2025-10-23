
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
  title: 'Mijas Pueblo Day Trip | Costa del Sol Navigator',
  description: 'Plan your perfect day trip to the charming Mijas Pueblo.',
};

const mijasCategories = [
    {
        slug: 'things-to-do',
        name: 'Things to Do',
        description: 'Explore the attractions and activities in this charming village.',
        imageKey: 'mijas-pueblo-village',
        linkHref: '/destinations/mijas-pueblo/things-to-do',
        linkText: 'Discover Activities',
    },
    {
        slug: 'restaurants',
        name: 'Restaurants',
        description: 'A guide to the best dining experiences in Mijas Pueblo.',
        imageKey: 'restaurant-terrace-view',
        linkHref: '/destinations/mijas-pueblo/restaurants',
        linkText: 'Find Restaurants',
    },
];

export default function MijasPuebloPage() {
  return (
    <div>
      <PageHeader
        title="Mijas Pueblo Day Trip"
        subtitle="Discover the white-washed village of Mijas."
      />
      <Section className="pt-0" title="Explore Mijas Pueblo">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {mijasCategories.map((category) => (
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
