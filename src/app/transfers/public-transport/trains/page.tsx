import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Fuengirola Train Times | Cercanías C1 Line Schedule',
  description: 'Find train times for the Fuengirola Cercanías C1 line, connecting Malaga city, the airport, and coastal towns like Torremolinos.',
};

export default function TrainsPage() {
  return (
    <div>
      <PageHeader
        title="Fuengirola Train Times"
        subtitle="Schedules for the Cercanías C1 line."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Fuengirola train times. This page will provide up-to-date train schedules.</p>
      </Section>
    </div>
  );
}