
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Malaga City Attractions | Costa del Sol Navigator',
  description: 'Discover the best attractions in Malaga city.',
};

const cityAttractionCategories = [
    {
        slug: 'museums',
        name: 'Museums Guide',
        description: 'A comprehensive guide to the museums in Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga museums guide'),
        imageHint: 'art museum interior',
        linkHref: '/attractions/malaga-city/museums',
        linkText: 'Explore Museums',
    },
    {
        slug: 'historic-sites',
        name: 'Historic Sites',
        description: 'Explore the rich history of Malaga through its iconic sites.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga historic sites'),
        imageHint: 'ancient ruins',
        linkHref: '/attractions/malaga-city/historic-sites',
        linkText: 'Discover History',
    },
    {
        slug: 'walking-tours',
        name: 'Walking Tours',
        description: 'The best way to see Malaga is on foot. Find guided tours here.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga city walking tours'),
        imageHint: 'walking tour group',
        linkHref: '/attractions/malaga-city/walking-tours',
        linkText: 'Find Tours',
    },
    {
        slug: 'sightseeing',
        name: 'Sightseeing Tours',
        description: 'Explore Malaga with guided sightseeing tours.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'malaga sightseeing tours'),
        imageHint: 'tour bus city',
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
