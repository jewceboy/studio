
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Best Time to Visit Malaga | Costa del Sol Navigator',
  description: 'Find out the best time to visit Malaga based on weather, events, and prices.',
};

export default function WhenToVisitPage() {
  return (
    <div>
      <PageHeader
        title="When to Visit Malaga"
        subtitle="A guide to help you decide the perfect time for your trip."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for when to visit. This page will provide information on seasons, weather, and events.</p>
      </Section>
    </div>
  );
}
