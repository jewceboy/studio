
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Live Music Venues in Malaga | Costa del Sol Navigator',
  description: 'Discover the best venues for live music in Malaga.',
};

export default function LiveMusicPage() {
  return (
    <div>
      <PageHeader
        title="Live Music Venues in Malaga"
        subtitle="From jazz clubs to rock bars, find your sound in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for live music venues. This page will feature a guide to places with live music.</p>
      </Section>
    </div>
  );
}
