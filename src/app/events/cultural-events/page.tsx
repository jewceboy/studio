
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Cultural Events | Costa del Sol Navigator',
  description: 'A guide to cultural events happening in Malaga.',
};

export default function CulturalEventsPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Cultural Events"
        subtitle="Discover concerts, exhibitions, and more."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for cultural events. This page will link to specific event types.</p>
      </Section>
    </div>
  );
}
