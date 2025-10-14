
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Costa del Sol Destinations | Costa del Sol Navigator',
  description: 'Explore the diverse destinations of the Costa del Sol.',
};

export default function DestinationsPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Destinations"
        subtitle="Discover the unique charm of each town and city along the coast."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for destinations. This page will link to child pages for each destination.</p>
      </Section>
    </div>
  );
}
