
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';
import GuideSignup from '@/components/blog/GuideSignup';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export const metadata = {
  title: 'Malaga Events and Festivals | Costa del Sol Navigator',
  description: 'Your guide to the best events and festivals in Malaga.',
};

const eventCategories = [
    {
        slug: 'annual-festivals',
        name: 'Annual Festivals',
        description: 'Discover Malaga\'s most important annual festivals, from Semana Santa to the Feria de Malaga.',
        imageKey: 'malaga-feria-festival',
        linkHref: '/events/annual-festivals',
        linkText: 'See Festival Dates',
    },
    {
        slug: 'cultural-events',
        name: 'Cultural Events',
        description: 'Explore the vibrant cultural scene with concerts, art exhibitions, and more.',
        imageKey: 'art-gallery-exhibition',
        linkHref: '/events/cultural-events',
        linkText: 'Find Cultural Events',
    },
];

export default function EventsPage() {
  return (
    <div>
        <div className="max-w-4xl mx-auto">
            <PageHeader
                title="Events & Festivals"
                subtitle="Discover what's happening in Malaga during your visit, from traditional festivals to cultural events."
            />
        </div>
       <Section className="pt-0" title="Event Types">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {eventCategories.map((category) => (
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
            </div>
      </Section>
      <Section>
        <GuideSignup />
      </Section>
    </div>
  );
}
