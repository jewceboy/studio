
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Marbella Nightlife Guide | Costa del Sol Navigator',
  description: 'Your guide to the best nightlife in Marbella and Puerto Banus.',
};

const nightlifeCategories = [
    {
        slug: 'luxury-clubs',
        name: 'Luxury Nightclubs',
        description: 'Experience the most glamorous nightlife on the Costa del Sol.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury nightclubs puerto banus'),
        imageHint: 'vip nightclub bottle service',
        linkHref: '/nightlife/marbella-puerto-banus/luxury-clubs',
        linkText: 'Find Luxury Clubs',
    },
    {
        slug: 'vip-services',
        name: 'VIP Nightlife Services',
        description: 'Elevate your night out with our VIP services.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'vip nightlife services marbella'),
        imageHint: 'vip table club',
        linkHref: '/nightlife/marbella-puerto-banus/vip-services',
        linkText: 'Get VIP Access',
    },
];

export default function MarbellaPuertoBanusPage() {
  return (
    <div>
      <PageHeader
        title="Marbella & Puerto Banus Nightlife"
        subtitle="From exclusive clubs to sophisticated bars, discover the best of the coast's nightlife."
      />
      <Section className="pt-0" title="Exclusive Nightlife">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {nightlifeCategories.map((category) => (
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
