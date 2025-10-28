
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
  title: 'Best Time to Visit Malaga | Costa del Sol Navigator',
  description: 'Find out the best time to visit Malaga based on weather, events, and prices.',
};

const whenToVisitCategories = [
    {
        slug: 'weather',
        name: 'Malaga Weather Guide',
        description: 'Month-by-month weather averages and what to expect.',
        imageKey: 'malaga-weather-seasons',
        linkHref: '/travel-planning/when-to-visit/weather',
        linkText: 'See Weather Guide',
    },
    {
        slug: 'seasons',
        name: 'Malaga Seasons Guide',
        description: 'Discover what each season has to offer in the Costa del Sol.',
        imageKey: 'four-seasons-collage',
        linkHref: '/travel-planning/when-to-visit/seasons',
        linkText: 'Explore Seasons',
    },
];

export default function WhenToVisitPage() {
  return (
    <div>
      <PageHeader
        title="When to Visit Malaga"
        subtitle="A guide to help you decide the perfect time for your trip."
      />
      <Section className="pt-0" title="Plan Your Timing">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {whenToVisitCategories.map((category) => (
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
