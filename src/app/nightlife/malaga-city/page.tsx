
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Nightlife Hotspots | Costa del Sol Navigator',
  description: 'Discover the best nightlife hotspots in Malaga city.',
};

export default function MalagaCityNightlifePage() {
  return (
    <div>
      <PageHeader
        title="Malaga City Nightlife"
        subtitle="Explore the vibrant nightlife of Malaga's city center."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga city nightlife. This page will link to child pages for bars, clubs, and live music.</p>
      </Section>
    </div>
  );
}
