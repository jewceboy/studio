
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Tennis & Padel in Costa del Sol | Costa del Sol Navigator',
  description: 'Find tennis and padel clubs and courts in the Costa del Sol.',
};

const tennisPadelCategories = [
    {
        slug: 'tennis-camps',
        name: 'Tennis Camps',
        description: 'Improve your game with professional coaching and facilities.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'tennis camps costa del sol'),
        imageHint: 'tennis lesson',
        linkHref: '/sports/tennis-padel/tennis-camps',
        linkText: 'Find a Camp',
    },
    {
        slug: 'padel-courts',
        name: 'Padel Courts',
        description: 'Discover the best places to play Spain\'s most popular racquet sport.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'padel courts costa del sol'),
        imageHint: 'padel players action',
        linkHref: '/sports/tennis-padel/padel-courts',
        linkText: 'Find Courts',
    },
];

export default function TennisPadelPage() {
  return (
    <div>
      <PageHeader
        title="Tennis & Padel in Costa del Sol"
        subtitle="Enjoy racquet sports in the sunshine at top clubs."
      />
      <Section className="pt-0" title="Racquet Sports">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {tennisPadelCategories.map((category) => (
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
