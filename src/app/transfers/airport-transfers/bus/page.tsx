
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Airport to City Center Bus | Costa del Sol Navigator',
  description: 'Information on taking the bus from Malaga airport to the city center.',
};

export default function BusPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Airport to City Center by Bus"
        subtitle="A guide to using the bus service from the airport."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga airport bus information. This page will provide schedules and prices.</p>
      </Section>
    </div>
  );
}
