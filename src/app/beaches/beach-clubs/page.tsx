
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Beach Clubs in Marbella | Costa del Sol Navigator',
  description: 'Discover the vibrant beach club scene in Marbella.',
};

const beachClubCategories = [
    {
        slug: 'puerto-banus',
        name: 'Puerto Banus Beach Clubs',
        description: 'Experience the luxury and glamour of Puerto Banus beach clubs.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'puerto banus beach clubs'),
        imageHint: 'luxury beach club party',
        linkHref: '/beaches/beach-clubs/puerto-banus',
        linkText: 'Explore Puerto Banus Clubs',
    },
    {
        slug: 'luxury',
        name: 'Luxury Beach Clubs',
        description: 'Indulge in the ultimate luxury at the top beach clubs in Costa del Sol.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'luxury beach clubs costa del sol'),
        imageHint: 'beach club champagne',
        linkHref: '/beaches/beach-clubs/luxury',
        linkText: 'Discover Luxury Clubs',
    },
];

export default function BeachClubsPage() {
  return (
    <div>
      <PageHeader
        title="Beach Clubs in Marbella"
        subtitle="Your guide to the best beach clubs in and around Marbella."
      />
      <Section className="pt-0" title="Featured Locations">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {beachClubCategories.map((category) => (
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
