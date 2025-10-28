
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
  title: 'Wellness & Medical Tourism in Costa del Sol | Costa del Sol Navigator',
  description: 'Discover luxury spa retreats, world-class medical facilities, and wellness experiences in the serene environment of Costa del Sol.',
};

const wellnessCategories = [
  {
    slug: 'spa-retreats',
    name: 'Spa & Relaxation',
    description: 'Unwind at exclusive spa resorts offering rejuvenating treatments and tranquil atmospheres.',
    imageKey: 'spa-massage-therapy',
    linkHref: '/wellness/spa-retreats',
    linkText: 'Find Spa Retreats',
  },
  {
    slug: 'medical-tourism',
    name: 'Medical Tourism',
    description: 'Access leading private clinics and specialists for various medical treatments in a comfortable setting.',
    imageKey: 'modern-clinic-interior',
    linkHref: '/wellness/medical-tourism',
    linkText: 'Explore Medical Services',
  },
  {
    slug: 'wellness-retreats',
    name: 'Wellness Retreats',
    description: 'Embark on a journey of self-care with yoga, meditation, and fitness retreats in beautiful locations.',
    imageKey: 'yoga-class-sunrise',
    linkHref: '/wellness/wellness-retreats',
    linkText: 'Discover Retreats',
  },
];

export default function WellnessPage() {
  return (
    <div>
      <PageHeader
        title="Wellness & Medical Tourism"
        subtitle="Rejuvenate your mind, body, and soul. Costa del Sol is a premier destination for health, wellness, and recovery."
      />
      <Section className="pt-0" title="Health & Wellness Categories">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {wellnessCategories.map((category) => (
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
      </Section>
    </div>
  );
}
