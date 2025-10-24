import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Digital Nomad Visa Spain | Costa del Sol Navigator',
  description: 'A complete guide to the Spanish digital nomad visa.',
};

const visaGuideCategories = [
    {
        slug: 'requirements',
        name: 'Visa Requirements',
        description: 'A checklist of all the requirements for the Spanish remote work visa.',
        imageKey: 'document-checklist',
        linkHref: '/digital-nomad/visa-guide/requirements',
        linkText: 'See Requirements',
    },
    {
        slug: 'application',
        name: 'Application Process',
        description: 'A detailed walkthrough of the application steps for the Spanish digital nomad visa.',
        imageKey: 'application-form',
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
                imageUrl={images[category.imageKey].url}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={images[category.imageKey].hint}
                />
            ))}
        </div>
      </Section>
    </div>
  );
}