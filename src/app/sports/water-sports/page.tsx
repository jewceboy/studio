
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Water Sports in Malaga | Costa del Sol Navigator',
  description: 'A guide to water sports activities in Malaga and the Costa del Sol.',
};

export default function WaterSportsPage() {
  return (
    <div>
      <PageHeader
        title="Water Sports in Malaga"
        subtitle="Dive into adventure with a variety of water sports."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for water sports. This page will detail activities like sailing, diving, and more.</p>
      </Section>
    </div>
  );
}
