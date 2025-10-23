
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Top 5 Costa del Sol Resorts | Costa del Sol Navigator',
  description: 'Discover the top 5 best resorts in the Costa del Sol for your vacation, from luxury to family-friendly options.',
};

const resortCategories = [
    {
        slug: 'luxury-resorts',
        name: 'Luxury Resorts',
        description: 'Indulge in the finest resorts the Costa del Sol has to offer.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury resort costa del sol'),
        imageHint: 'luxury resort pool',
        linkHref: '/hotels/costa-del-sol-resorts/luxury-resorts',
        linkText: 'Explore Luxury Resorts',
    },
    {
        slug: 'adults-only',
        name: 'Adults-Only Resorts',
        description: 'Experience tranquility and luxury at these adults-only resorts.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'adults only luxury resort'),
        imageHint: 'adults couple resort',
        linkHref: '/hotels/costa-del-sol-resorts/adults-only',
        linkText: 'Find Adults-Only Resorts',
    },
];

export default function CostaDelSolResortsPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Resorts"
        subtitle="A selection of top resorts for a perfect holiday."
      />
       <Section className="pt-0" title="Resort Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {resortCategories.map((category) => (
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
