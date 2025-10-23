
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
  title: 'Malaga City Attractions | Costa del Sol Navigator',
  description: 'Discover the best attractions in Malaga city.',
};

const cityAttractionCategories = [
    {
        slug: 'museums',
        name: 'Museums Guide',
        description: 'A comprehensive guide to the museums in Malaga.',
        imageKey: 'art-gallery-exhibition',
        linkHref: '/attractions/malaga-city/museums',
        linkText: 'Explore Museums',
    },
    {
        slug: 'historic-sites',
        name: 'Historic Sites',
        description: 'Explore the rich history of Malaga through its iconic sites.',
        imageKey: 'historic-ruins',
        linkHref: '/attractions/malaga-city/historic-sites',
        linkText: 'Discover History',
    },
    {
        slug: 'walking-tours',
        name: 'Walking Tours',
        description: 'The best way to see Malaga is on foot. Find guided tours here.',
        imageKey: 'walking-tour-group',
        linkHref: '/attractions/malaga-city/walking-tours',
        linkText: 'Find Tours',
    },
    {
        slug: 'sightseeing',
        name: 'Sightseeing Tours',
        description: 'Explore Malaga with guided sightseeing tours.',
        imageKey: 'tour-bus-city',
        linkHref: '/attractions/malaga-city/sightseeing',
        linkText: 'Explore Tours',
    },
];

export default function MalagaCityPage() {
  return (
    <div>
      <PageHeader
        title="Malaga City Attractions"
        subtitle="Explore the vibrant heart of the Costa del Sol."
      />
      <Section className="pt-0" title="City Highlights">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cityAttractionCategories.map((category) => (
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
