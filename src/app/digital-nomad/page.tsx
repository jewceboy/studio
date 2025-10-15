
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Digital Nomad Malaga | Costa del Sol Navigator',
  description: 'A guide for digital nomads and remote workers in Malaga.',
};

const nomadCategories = [
    {
        slug: 'coworking',
        name: 'Coworking Spaces',
        description: 'Find the perfect workspace to be productive and connect with other nomads.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'modern coworking space'),
        imageHint: 'coworking space',
        linkHref: '/digital-nomad/coworking',
        linkText: 'Find a Space',
    },
    {
        slug: 'workation',
        name: 'Workation Packages',
        description: 'Curated packages for the perfect blend of work and leisure in the sun.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'laptop beach view'),
        imageHint: 'laptop beach',
        linkHref: '/digital-nomad/workation',
        linkText: 'Explore Packages',
    },
    {
        slug: 'visa-guide',
        name: 'Digital Nomad Visa',
        description: 'Your step-by-step guide to applying for the Spanish digital nomad visa.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'spain visa document'),
        imageHint: 'spain visa',
        linkHref: '/digital-nomad/visa-guide',
        linkText: 'Get Visa Info',
    },
];

export default function DigitalNomadPage() {
  return (
    <div>
      <PageHeader
        title="Malaga for Digital Nomads"
        subtitle="Everything you need to know to live and work remotely in the beautiful Costa del Sol."
      />
      <Section className="pt-0" title="Nomad Resources">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {nomadCategories.map((category) => (
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
