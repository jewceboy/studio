
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Travel Itineraries | Costa del Sol Navigator',
  description: 'Suggested travel itineraries for Malaga and the Costa del Sol.',
};

export default function ItinerariesPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Travel Itineraries"
        subtitle="Get inspired with our suggested itineraries for your trip."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for travel itineraries. This page will offer sample plans for different trip lengths.</p>
      </Section>
    </div>
  );
}
