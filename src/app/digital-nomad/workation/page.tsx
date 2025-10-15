
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Workation Malaga | Costa del Sol Navigator',
  description: 'Plan your next workation in Malaga and the Costa del Sol.',
};

const workationCategories = [
    {
        slug: 'packages',
        name: 'Workation Packages',
        description: 'Curated packages for the perfect blend of work and leisure.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'workation packages costa del sol'),
        imageHint: 'laptop pool',
        linkHref: '/digital-nomad/workation/packages',
        linkText: 'Explore Packages',
    },
    {
        slug: 'accommodation',
        name: 'Premium Accommodation',
        description: 'Find comfortable and well-equipped accommodation for your remote work stay.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'premium digital nomad accommodation'),
        imageHint: 'modern apartment interior',
        linkHref: '/digital-nomad/workation/accommodation',
        linkText: 'Find Accommodation',
    },
];

export default function WorkationPage() {
  return (
    <div>
      <PageHeader
        title="Workation in Malaga"
        subtitle="Combine work and vacation in the beautiful setting of the Costa del Sol."
      />
      <Section className="pt-0" title="Work & Play">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {workationCategories.map((category) => (
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
