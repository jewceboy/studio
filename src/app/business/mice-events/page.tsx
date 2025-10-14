
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'MICE Events | Costa del Sol Navigator',
  description: 'Host your Meetings, Incentives, Conferences, and Exhibitions in Costa del Sol.',
};

export default function MICEEventsPage() {
  return (
    <div>
      <PageHeader
        title="MICE Events"
        subtitle="Discover world-class venues and services for your next corporate event."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for MICE Events. This page will detail congress centers, large-scale venues, and professional services.</p>
      </Section>
    </div>
  );
}
