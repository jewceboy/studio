
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Costa del Sol Golf Courses | Costa del Sol Navigator',
  description: 'A guide to the best golf courses in the Costa del Sol.',
};

const golfCategories = [
    {
        slug: 'golf-holidays',
        name: 'Golf Holidays',
        description: 'Packages and guides for your ultimate golf vacation in Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'golf holidays malaga'),
        imageHint: 'golfers on course',
        linkHref: '/sports/golf/golf-holidays',
        linkText: 'Plan Your Holiday',
    },
    {
        slug: 'golf-resorts',
        name: 'Golf Resorts',
        description: 'Stay and play at these top-tier golf resorts in the Costa del Sol.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'golf resorts costa del sol'),
        imageHint: 'golf resort building',
        linkHref: '/sports/golf/golf-resorts',
        linkText: 'Explore Resorts',
    },
    {
        slug: 'tournaments',
        name: 'Executive Golf Tournaments',
        description: 'Host or participate in prestigious golf tournaments on the coast.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'executive golf tournaments'),
        imageHint: 'golf tournament trophy',
        linkHref: '/sports/golf/tournaments',
        linkText: 'Learn More',
    },
];

export default function GolfPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Golf Courses"
        subtitle="Discover why this region is known as the 'Costa del Golf'."
      />
      <Section className="pt-0" title="Golf Experiences">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {golfCategories.map((category) => (
                <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={category.imageUrl}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={category.imageHint}
                />
            ))}
        </div>
      </Section>
    </div>
  );
}
