
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Concerts in Malaga | Costa del Sol Navigator',
  description: 'Find upcoming concerts and live music events in Malaga.',
};

export default function ConcertsPage() {
  return (
    <div>
      <PageHeader
        title="Concerts in Malaga"
        subtitle="Your guide to live music and concerts in the city."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for concerts in Malaga. This page will list upcoming shows and events.</p>
      </Section>
    </div>
  );
}
