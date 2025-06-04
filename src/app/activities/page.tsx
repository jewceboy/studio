
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Activities in Costa del Sol | Costa del Sol Navigator',
  description: 'Discover a wide range of activities in Costa del Sol, from cultural experiences and outdoor adventures to watersports and culinary delights.',
};

const activityCategories = [
  {
    slug: 'culture',
    name: 'Cultural Experiences',
    description: 'Immerse yourself in art, history, and local traditions. Visit museums, ancient sites, and attend vibrant festivals.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400),
    imageHint: 'historic architecture museum',
    linkHref: '/activities/culture', // Placeholder, to be built
    linkText: 'Explore Culture',
  },
  {
    slug: 'outdoor',
    name: 'Outdoor Adventures',
    description: 'Explore breathtaking landscapes. Go hiking, cycling, or take scenic tours through natural parks.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400),
    imageHint: 'mountain hiking trail',
    linkHref: '/activities/outdoor', // Placeholder, to be built
    linkText: 'Find Adventures',
  },
  {
    slug: 'watersports',
    name: 'Watersports Fun',
    description: 'Dive into the Mediterranean with activities like kayaking, paddleboarding, jet skiing, and boat trips.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400),
    imageHint: 'kayaking sea adventure',
    linkHref: '/interests/watersports', // Links to existing niche
    linkText: 'Discover Watersports',
  },
  {
    slug: 'golf',
    name: 'World-Class Golfing',
    description: 'Tee off on internationally renowned golf courses with stunning views and excellent facilities.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400),
    imageHint: 'golf course green',
    linkHref: '/interests/golf', // Links to existing niche
    linkText: 'Explore Golf',
  },
  {
    slug: 'culinary',
    name: 'Culinary Delights',
    description: 'Savor Andalusian flavors with food tours, cooking classes, wine tasting, and visits to local markets.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400),
    imageHint: 'spanish tapas food',
    linkHref: '/activities/culinary', // Placeholder, to be built
    linkText: 'Taste a Tour',
  },
  {
    slug: 'nightlife',
    name: 'Nightlife & Entertainment',
    description: 'Experience vibrant evenings with flamenco shows, lively bars, beach clubs, and live music venues.',
    imageUrl: PLACEHOLDER_IMAGE_URL(600, 400),
    imageHint: 'flamenco dance show',
    linkHref: '/activities/nightlife', // Placeholder, to be built
    linkText: 'Enjoy the Night',
  },
];

export default function ActivitiesPage() {
  return (
    <div>
      <PageHeader
        title="Discover Activities in Costa del Sol"
        subtitle="Find exciting things to do during your visit, tailored to every interest and style."
      />
      <Section className="pt-0" title="Browse Activity Categories">
        {activityCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activityCategories.map((category) => (
              <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={category.imageUrl}
                imageAlt={`Explore ${category.name} in Costa del Sol`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={category.imageHint}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No activity categories found. Please check back later.</p>
        )}
      </Section>
    </div>
  );
}
