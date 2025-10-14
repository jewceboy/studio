
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Airport Shuttle Options | Costa del Sol Navigator',
  description: 'Explore shuttle options from Malaga airport.',
};

export default function ShuttlePage() {
  return (
    <div>
      <PageHeader
        title="Malaga Airport Shuttle Options"
        subtitle="Shared and private shuttle services from the airport."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga airport shuttles. This page will provide information on shuttle services.</p>
      </Section>
    </div>
  );
}
