
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
  title: 'Wedding Planners Malaga | Costa del Sol Navigator',
  description: 'Connect with expert wedding planners in Malaga and the Costa del Sol.',
};

const planningCategories = [
    {
        slug: 'luxury-planners',
        name: 'Luxury Wedding Planners',
        description: 'Connect with elite planners for a bespoke, high-end wedding experience.',
        imageKey: 'luxury-wedding-planner',
        linkHref: '/weddings/wedding-planning/luxury-planners',
        linkText: 'Find Luxury Planners',
    },
    {
        slug: 'destination-weddings',
        name: 'Destination Wedding Specialists',
        description: 'Expert planning for your dream destination wedding in sunny Spain.',
        imageKey: 'destination-wedding',
        linkHref: '/weddings/wedding-planning/destination-weddings',
        linkText: 'Find a Specialist',
    },
];

export default function WeddingPlanningPage() {
  return (
    <div>
      <PageHeader
        title="Expert Wedding Planning Services"
        subtitle="Connect with top-tier wedding planners who will bring your vision to life with flawless execution."
      />
      <Section className="pt-0" title="Planning Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {planningCategories.map((category) => (
                <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={images[category.imageKey].url}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={images[category.imageKey].hint