
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Coworking Spaces Malaga | Costa del Sol Navigator',
  description: 'Find the best coworking spaces in Malaga for remote work.',
};

const coworkingCategories = [
    {
        slug: 'luxury-coworking',
        name: 'Luxury Coworking Spaces',
        description: 'Work in style with these premium coworking options in Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury coworking malaga'),
        imageHint: 'luxury office interior',
        linkHref: '/digital-nomad/coworking/luxury-coworking',
        linkText: 'Explore Luxury Spaces',
    },
    {
        slug: 'coworking-marbella',
        name: 'Coworking in Marbella',
        description: 'Find your ideal workspace in the luxurious setting of Marbella.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'coworking marbella'),
        imageHint: 'marbella office view',
        linkHref: '/digital-nomad/coworking/coworking-marbella',
        linkText: 'Explore Marbella Spaces',
    },
];

export default function CoworkingPage() {
  return (
    <div>
      <PageHeader
        title="Coworking Spaces in Malaga"
        subtitle="Find the perfect workspace to be productive and connect with other nomads."
      />
      <Section className="pt-0" title="Workspace Options">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {coworkingCategories.map((category) => (
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
