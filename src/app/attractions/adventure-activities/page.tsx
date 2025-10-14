
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Adventure Activities | Costa del Sol Navigator',
  description: 'Find exciting adventure activities in Malaga and the Costa del Sol.',
};

export default function AdventureActivitiesPage() {
  return (
    <div>
      <PageHeader
        title="Adventure Activities in Malaga"
        subtitle="From hiking to water sports, discover thrilling activities."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga adventure activities. This page will list various adventure options.</p>
      </Section>
    </div>
  );
}
