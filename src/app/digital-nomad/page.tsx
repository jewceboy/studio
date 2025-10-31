
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
  title: 'Digital Nomad Malaga | Costa del Sol Navigator',
  description: 'A guide for digital nomads and remote workers in Malaga.',
};

const nomadCategories = [
    {
        slug: 'coworking',
        name: 'Coworking Spaces',
        description: 'Find the perfect workspace to be productive and connect with other nomads.',
        imageKey: 'modern-coworking-space',
        linkHref: '/digital-nomad/coworking',
        linkText: 'Find a Space',
    },
    {
        slug: 'workation',
        name: 'Workation Packages',
        description: 'Curated packages for the perfect blend of work and leisure in the sun.',
        imageKey: 'laptop-beach-view',
        linkHref: '/digital-nomad/workation',
        linkText: 'Explore Packages',
    },
    {
        slug: 'visa-guide',
        name: 'Digital Nomad Visa',
        description: 'Your step-by-step guide to applying for the Spanish digital nomad visa.',
        imageKey: 'spain-visa-document',
        linkHref: '/digital-nomad/visa-guide',
        linkText: 'Get Visa Info',
    },
];

export default function DigitalNomadPage() {
  return (
    <div>
        <div className="max-w-4xl mx-auto">
            <PageHeader
                title="Malaga for Digital Nomads"
                subtitle="Everything you need to know to live and work remotely in the beautiful Costa del Sol."
            />
        </div>
        <Section className="pt-0" title="Nomad Resources">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {nomadCategories.map((category) => (
                        <InfoCard
                        key={category.slug}
                        title={category.name}
                        imageUrl={images[category.imageKey].url}
                        imageHint={images[category.imageKey].hint}
                        imageAlt={`Explore ${category.name}`}
                        description={category.description}
                        linkHref={category.linkHref}
                        linkText={category.linkText}
                        />
                    ))}
                </div>
            </div>
        </Section>
    </div>
  );
}
