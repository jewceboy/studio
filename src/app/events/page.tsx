
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Events and Festivals | Costa del Sol Navigator',
  description: 'Your guide to the best events and festivals in Malaga.',
};

export default function EventsPage() {
  return (
    <div>
      <PageHeader
        title="Events & Festivals"
        subtitle="Discover what's happening in Malaga during your visit."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for events. This page will link to child pages on festivals and cultural events.</p>
      </Section>
    </div>
  );
}
