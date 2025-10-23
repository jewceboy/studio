
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Sightseeing Tours | Bus, Walking & Segway Tours',
  description: 'Find the best sightseeing tours in Malaga, including hop-on-hop-off bus tours, guided walking tours, and Segway adventures.',
};

export default function SightseeingPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Sightseeing Tours"
        subtitle="Explore Malaga with guided sightseeing tours."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga sightseeing tours. This page will list available tours.</p>
      </Section>
    </div>
  );
}
