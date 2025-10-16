
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Water Sports Tourism Costa del Sol | Costa del Sol Navigator',
  description: 'Explore the Costa del Sol as a premier destination for water sports tourism, including sailing and scuba diving schools and charters.',
};

const waterSportsCategories = [
    {
        slug: 'sailing',
        name: 'Sailing',
        description: 'Set sail on the beautiful Mediterranean sea.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'sailing costa del sol'),
        imageHint: 'sailboat sunset',
        linkHref: '/sports/water-sports/sailing',
        linkText: 'Go Sailing',
    },
    {
        slug: 'diving',
        name: 'Scuba Diving',
        description: 'Discover the best dive sites and schools in Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'scuba diving malaga'),
        imageHint: 'scuba diver underwater',
        linkHref: '/sports/water-sports/diving',
        linkText: 'Explore Diving',
    },
];

export default function WaterSportsPage() {
  return (
    <div>
      <PageHeader
        title="Water Sports in Malaga"
        subtitle="Dive into adventure with a variety of water sports."
      />
      <Section className="pt-0" title="Water Activities">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {waterSportsCategories.map((category) => (
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
