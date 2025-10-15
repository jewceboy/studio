
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Digital Nomad Visa Spain | Costa del Sol Navigator',
  description: 'A complete guide to the Spanish digital nomad visa.',
};

const visaGuideCategories = [
    {
        slug: 'requirements',
        name: 'Visa Requirements',
        description: 'A checklist of all the requirements for the Spanish remote work visa.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'remote work spain visa'),
        imageHint: 'document checklist',
        linkHref: '/digital-nomad/visa-guide/requirements',
        linkText: 'See Requirements',
    },
    {
        slug: 'application',
        name: 'Application Process',
        description: 'A detailed walkthrough of the application steps for the Spanish digital nomad visa.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'spain digital nomad visa application'),
        imageHint: 'application form',
        linkHref: '/digital-nomad/visa-guide/application',
        linkText: 'Learn the Process',
    },
];

export default function VisaGuidePage() {
  return (
    <div>
      <PageHeader
        title="Spain Digital Nomad Visa Guide"
        subtitle="Your step-by-step guide to applying for the digital nomad visa in Spain."
      />
      <Section className="pt-0" title="Visa Information">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {visaGuideCategories.map((category) => (
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
