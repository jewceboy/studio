import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Flamenco Dinner Shows in Malaga | Food & Entertainment',
  description: 'Enjoy a fantastic flamenco show combined with a delicious dinner in Malaga. Find the best venues for a complete evening of entertainment.',
};

export default function FlamencoDinnerShowsPage() {
  return (
    <div>
      <PageHeader
        title="Flamenco Dinner Shows in Malaga"
        subtitle="Combine a spectacular show with a culinary experience."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for flamenco dinner shows. This page will list venues offering dinner and flamenco.</p>
      </Section>
    </div>
  );
}