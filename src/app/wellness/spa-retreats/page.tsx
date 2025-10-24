
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
  title: 'Costa del Sol Spa Retreats | Costa del Sol Navigator',
  description: 'Find luxury spa and relaxation retreats in Costa del Sol.',
};

const spaCategories = [
    {
        slug: 'luxury-spas',
        name: 'Luxury Spa Hotels',
        description: 'Indulge in the ultimate relaxation at Marbella\'s top spa hotels.',
        imageKey: 'luxury-spa-hotel',
        linkHref: '/wellness/spa-retreats/luxury-spas',
        linkText: 'Explore Spas',
    },
    {
        slug: 'wellness-packages',
        name: 'Wellness Packages',
        description: 'Curated packages for a complete mind and body wellness experience in Malaga.',
        imageKey: 'wellness-package',
        linkHref: '/wellness/spa-retreats/wellness-packages',
        linkText: 'Discover Packages',
    },
];

export default function SpaRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Spa & Relaxation Retreats"
        subtitle="Unwind and rejuvenate at exclusive spa resorts with world-class treatments."
      />
      <Section className="pt-0" title="Spa Experiences">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {spaCategories.map((category) => (
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
