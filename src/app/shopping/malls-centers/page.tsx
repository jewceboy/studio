
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Shopping Malls in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best shopping malls and centers in Malaga.',
};

const mallCategories = [
    {
        slug: 'plaza-mayor',
        name: 'Plaza Mayor',
        description: 'Your guide to one of the largest open-air shopping and leisure centers on the coast.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'plaza mayor malaga'),
        imageHint: 'outdoor shopping center',
        linkHref: '/shopping/malls-centers/plaza-mayor',
        linkText: 'Explore Plaza Mayor',
    },
    {
        slug: 'larios-centro',
        name: 'Larios Centro',
        description: 'Explore one of Malaga\'s most popular city-center shopping malls.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'larios centro shopping'),
        imageHint: 'indoor shopping mall',
        linkHref: '/shopping/malls-centers/larios-centro',
        linkText: 'Visit Larios Centro',
    },
];

export default function MallsCentersPage() {
  return (
    <div>
      <PageHeader
        title="Shopping Malls in Malaga"
        subtitle="Discover the best places for one-stop shopping."
      />
      <Section className="pt-0" title="Main Shopping Centers">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {mallCategories.map((category) => (
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
