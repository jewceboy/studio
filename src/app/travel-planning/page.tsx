
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Travel Planning | Costa del Sol Navigator',
  description: 'Practical information and travel planning tips for your trip to Malaga.',
};

export default function TravelPlanningPage() {
  return (
    <div>
      <PageHeader
        title="Travel Planning & Practical Information"
        subtitle="Everything you need to know to plan your trip to the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Travel Planning. This page will link to child pages on when to visit, itineraries, and more.</p>
      </Section>
    </div>
  );
}
