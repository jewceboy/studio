
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
  title: 'Malaga MICE Events | Costa del Sol Navigator',
  description: 'Host your Meetings, Incentives, Conferences, and Exhibitions in Costa del Sol.',
};

const miceCategories = [
    {
        slug: 'conferences',
        name: 'Executive Conferences',
        description: 'World-class venues and services for your executive conferences.',
        imageKey: 'conference-hall',
        linkHref: '/business/mice-events/conferences',
        linkText: 'Explore Venues',
    },
    {
        slug: 'corporate-events',
        name: 'Corporate Events',
        description: 'Organize unforgettable corporate events on the sunny coast of Spain.',
        imageKey: 'corporate-event',
        linkHref: '/business/mice-events/corporate-events',
        linkText: 'Plan an Event',
    },
    {
        slug: 'team-building',
        name: 'Team Building Events',
        description: 'Boost morale and collaboration with engaging team building activities.',
        imageKey: 'corporate-team-building',
        linkHref: '/business/mice-events/team-building',
        linkText: 'Discover Activities',
    },
];

export default function MICEEventsPage() {
  return (
    <div>
      <PageHeader
        title="MICE Events"
        subtitle="Discover world-class venues and services for your next corporate event."
      />
      <Section className="pt-0" title="Event Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {miceCategories.map((category) => (
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
    