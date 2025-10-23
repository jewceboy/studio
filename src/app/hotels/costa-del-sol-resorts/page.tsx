
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
  title: 'Top 5 Costa del Sol Resorts | Best Resorts Near Malaga (2024)',
  description: 'Discover the top 5 best resorts in the Costa del Sol for your 2024 vacation. Our guide covers luxury, all-inclusive, and family-friendly options near Malaga.',
};

const resortCategories = [
    {
        slug: 'luxury-resorts',
        name: 'Luxury Resorts',
        description: 'Indulge in the finest resorts the Costa del Sol has to offer.',
        imageKey: 'luxury-resort-pool',
        linkHref: '/hotels/costa-del-sol-resorts/luxury-resorts',
        linkText: 'Explore Luxury Resorts',
    },
    {
        slug: 'adults-only',
        name: 'Adults-Only Resorts',
        description: 'Experience tranquility and luxury at these adults-only resorts.',
        imageKey: 'couple-relaxing-resort',
        linkHref: '/hotels/costa-del-sol-resorts/adults-only',
        linkText: 'Find Adults-Only Resorts',
    },
];

export default function CostaDelSolResortsPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Resorts"
        subtitle="A selection of top resorts for a perfect holiday."
      />
       <Section className="pt-0" title="Resort Types">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {resortCategories.map((category) => (
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
