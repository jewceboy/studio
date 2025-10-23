
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Executive Golf Tournaments in Costa del Sol | Corporate Golf',
  description: 'Information on hosting or participating in executive and corporate golf tournaments on the prestigious courses of the Costa del Sol.',
};

export default function TournamentsPage() {
  return (
    <div>
      <PageHeader
        title="Executive Golf Tournaments"
        subtitle="Host or participate in prestigious golf tournaments on the coast."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for executive golf tournaments. This page will provide information for corporate clients.</p>
      </Section>
    </div>
  );
}
