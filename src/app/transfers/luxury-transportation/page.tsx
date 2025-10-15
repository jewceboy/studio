
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Luxury Car Hire Marbella | Costa del Sol Navigator',
  description: 'Information on luxury car hire and transportation in Marbella.',
};

const luxuryTransportCategories = [
    {
        slug: 'chauffeur',
        name: 'Chauffeur Services',
        description: 'Travel in style and comfort with our professional chauffeur services.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'chauffeur service costa del sol'),
        imageHint: 'luxury car chauffeur',
        linkHref: '/transfers/luxury-transportation/chauffeur',
        linkText: 'Hire a Chauffeur',
    },
    {
        slug: 'limousine',
        name: 'Limousine Services',
        description: 'Exclusive limousine hire for any occasion in Marbella.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'limousine service marbella'),
        imageHint: 'stretch limousine',
        linkHref: '/transfers/luxury-transportation/limousine',
        linkText: 'Hire a Limo',
    },
    {
        slug: 'private-jet',
        name: 'Private Jet Charter',
        description: 'The ultimate in luxury travel to and from Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'private jet malaga'),
        imageHint: 'private jet tarmac',
        linkHref: '/transfers/luxury-transportation/private-jet',
        linkText: 'Charter a Jet',
    },
];

export default function LuxuryTransportationPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Transportation in Marbella"
        subtitle="Travel in style with our luxury transport options."
      />
      <Section className="pt-0" title="Luxury Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {luxuryTransportCategories.map((category) => (
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
