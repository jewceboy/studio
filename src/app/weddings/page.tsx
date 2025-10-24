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
  title: 'Luxury Weddings & Events in Costa del Sol | Costa del Sol Navigator',
  description: 'Plan your dream wedding or luxury event in Costa del Sol with our expert guidance. Discover exclusive venues, top-tier planners, and bespoke services.',
};

const weddingCategories = [
  {
    slug: 'wedding-venues',
    name: 'Wedding Venues',
    description: 'Explore breathtaking villas, beachfront hotels, and rustic fincas perfect for your ceremony.',
    imageKey: 'wedding-venue-setting',
    linkHref: '/weddings/wedding-venues',
    linkText: 'Discover Venues',
  },
  {
    slug: 'wedding-planning',
    name: 'Wedding Planning',
    description: 'Connect with elite planners to manage every detail of your special day flawlessly.',
    imageKey: 'wedding-planning-details',
    linkHref: '/weddings/wedding-planning',
    linkText: 'Find a Planner',
  },
  {
    slug: 'honeymoons',
    name: 'Honeymoons',
    description: 'Start your new life together with a romantic and luxurious honeymoon in southern Spain.',
    imageKey: 'honeymoon-couple-beach',
    linkHref: '/weddings/honeymoons',
    linkText: 'Plan Your Honeymoon',
  },
];

export default function WeddingsPage() {
  return (
    <div>
      <PageHeader
        title="Weddings & Luxury Events in Costa del Sol"
        subtitle="Your journey to a breathtaking and unforgettable celebration begins here. We provide access to the most exclusive venues and services on the coast."
      />
      <Section className="pt-0" title="Plan Your Celebration">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {weddingCategories.map((category) => (
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