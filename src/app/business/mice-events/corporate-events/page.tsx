
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Corporate Events Costa del Sol | Costa del Sol Navigator',
  description: 'Plan corporate events in the Costa del Sol.',
};

export default function CorporateEventsPage() {
  return (
    <div>
      <PageHeader
        title="Corporate Events in Costa del Sol"
        subtitle="Organize unforgettable corporate events on the sunny coast of Spain."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for corporate events in Costa del Sol. This page will showcase event planning services and venues.</p>
      </Section>
    </div>
  );
}
