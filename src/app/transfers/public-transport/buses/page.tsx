
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Bus Routes | Costa del Sol Navigator',
  description: 'A guide to bus routes in Malaga.',
};

export default function BusesPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Bus Routes"
        subtitle="Navigating Malaga by bus."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga bus routes. This page will provide details on the city's bus network.</p>
      </Section>
    </div>
  );
}
