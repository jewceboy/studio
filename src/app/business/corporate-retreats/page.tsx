
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
  title: 'Corporate Retreats Costa del Sol | Costa del Sol Navigator',
  description: 'Organize impactful corporate retreats in Costa del Sol.',
};

const retreatCategories = [
    {
        slug: 'leadership',
        name: 'Leadership Retreats',
        description: 'Exclusive retreats for executive leadership teams in Andalucia.',
        imageKey: 'leadership-meeting',
        linkHref: '/business/corporate-retreats/leadership',
        linkText: 'Explore Retreats',
    },
    {
        slug: 'incentive-travel',
        name: 'Incentive Travel Packages',
        description: 'Motivate your team with unique incentive travel packages in Spain.',
        imageKey: 'incentive-travel',
        linkHref: '/business/corporate-retreats/incentive-travel',
        linkText: 'Discover Packages',
    },
];

export default function CorporateRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Corporate Retreats"
        subtitle="Inspire your team with executive retreats in luxurious and motivating settings."
      />
       <Section className="pt-0" title="Retreat Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {retreatCategories.map((category) => (
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
