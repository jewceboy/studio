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
  title: 'Malaga Festival Dates | Costa del Sol Navigator',
  description: 'Find out the dates for Malaga\'s main annual festivals.',
};

const festivalCategories = [
    {
        slug: 'semana-santa',
        name: 'Semana Santa',
        description: 'Discover the tradition and spectacle of Holy Week in Malaga.',
        imageKey: 'semana-santa-procession',
        linkHref: '/events/annual-festivals/semana-santa',
        linkText: 'Learn More',
    },
    {
        slug: 'feria-de-malaga',
        name: 'Feria de Malaga',
        description: 'Everything you need to know about Malaga\'s biggest festival.',
        imageKey: 'malaga-feria-festival',
        linkHref: '/events/annual-festivals/feria-de-malaga',
        linkText: 'Join the Fun',
    },
    {
        slug: 'christmas',
        name: 'Christmas Markets',
        description: 'Experience the magic of Christmas in Malaga.',
        imageKey: 'Christmas-lights-street',
        linkHref: '/events/annual-festivals/christmas',
        linkText: 'Explore Markets',
    },
];

export default function AnnualFestivalsPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Festival Dates"
        subtitle="A calendar of the most important annual festivals in Malaga."
      />
      <Section className="pt-0" title="Major Festivals">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {festivalCategories.map((category) => (
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