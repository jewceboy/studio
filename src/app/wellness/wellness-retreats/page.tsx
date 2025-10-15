
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Wellness Retreats Marbella | Costa del Sol Navigator',
  description: 'Embark on a journey of self-care with yoga, meditation, and fitness retreats.',
};

const retreatCategories = [
    {
        slug: 'detox',
        name: 'Detox Retreats',
        description: 'Rejuvenate your body and mind with a specialized detox retreat in Spain.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'detox retreat spain'),
        imageHint: 'healthy food detox',
        linkHref: '/wellness/wellness-retreats/detox',
        linkText: 'Explore Detox',
    },
    {
        slug: 'yoga',
        name: 'Yoga Retreats',
        description: 'Find your inner peace with a yoga retreat on the sunny coast of Costa del Sol.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'yoga retreat costa del sol'),
        imageHint: 'yoga meditation',
        linkHref: '/wellness/wellness-retreats/yoga',
        linkText: 'Discover Yoga',
    },
];

export default function WellnessRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Wellness Retreats"
        subtitle="Embark on a journey of self-care with yoga, meditation, and fitness retreats in beautiful locations."
      />
       <Section className="pt-0" title="Retreat Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {retreatCategories.map((category) => (
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
