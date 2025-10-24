import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Destination Weddings in Costa del Sol | Planning Guide',
  description: 'Plan your perfect destination wedding in the Costa del Sol. Find expert planners, venues, and tips for a dream wedding in sunny Spain.',
};

export default function DestinationWeddingsPage() {
  return (
    <div>
      <PageHeader
        title="Destination Weddings in Costa del Sol"
        subtitle="Expert planning for your dream destination wedding in sunny Spain."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for destination weddings in the Costa del Sol. This page will provide tips and planner information.</p>
      </Section>
    </div>
  );
}