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
  title: 'Business & MICE Tourism in Costa del Sol | Costa del Sol Navigator',
  description: 'Host successful corporate events, conferences, and incentive trips in Costa del Sol. Find venues, hotels, and services tailored for business.',
};

const businessCategories = [
  {
    slug: 'mice-events',
    name: 'MICE Events',
    description: 'Find state-of-the-art congress centers and venues for meetings, incentives, conferences, and exhibitions.',
    imageKey: 'conference-hall',
    linkHref: '/business/mice-events',
    linkText: 'Explore MICE Venues',
  },
  {
    slug: 'corporate-retreats',
    name: 'Corporate Retreats',
    description: 'Organize impactful team-building and executive retreats in inspiring, luxurious settings.',
    imageKey: 'corporate-team-building',
    linkHref: '/business/corporate-retreats',
    linkText: 'Plan a Retreat',
  },
  {
    slug: 'business-hotels',
    name: 'Business Hotels',
    description: 'Select from top hotels equipped with modern business facilities, meeting rooms, and executive services.',
    imageKey: 'business-hotel-lobby',
    linkHref: '/business/business-hotels',
    linkText: 'Find Business Hotels',
  },
];

export default function BusinessPage() {
  return (
    <div>
      <PageHeader
        title="Business & MICE Tourism in Costa del Sol"
        subtitle="Elevate your corporate events with world-class infrastructure, exceptional hospitality, and the stunning backdrop of the Mediterranean."
      />
      <Section className="pt-0" title="Corporate Services & Venues">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {businessCategories.map((category) => (
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