
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Corporate Retreats Costa del Sol | Costa del Sol Navigator',
  description: 'Organize impactful corporate retreats in Costa del Sol.',
};

const retreatCategories = [
    {
        slug: 'leadership',
        name: 'Leadership Retreats',
        description: 'Exclusive retreats for executive leadership teams in Andalucia.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'leadership retreat andalucia'),
        imageHint: 'leadership meeting',
        linkHref: '/business/corporate-retreats/leadership',
        linkText: 'Explore Retreats',
    },
    {
        slug: 'incentive-travel',
        name: 'Incentive Travel Packages',
        description: 'Motivate your team with unique incentive travel packages in Spain.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'incentive travel spain'),
        imageHint: 'luxury travel team',
        linkHref: '/business/corporate-retreats/incentive-travel',
        linkText: 'Discover Packages',
    },
];

export default function CorporateRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Corporate Retreats"
        subtitle="Inspire your team with executive retreats in luxurious and motivating settings."
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
