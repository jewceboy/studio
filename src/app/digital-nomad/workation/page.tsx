
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Workation Malaga | Costa del Sol Navigator',
  description: 'Plan your next workation in Malaga and the Costa del Sol.',
};

export default function WorkationPage() {
  return (
    <div>
      <PageHeader
        title="Workation in Malaga"
        subtitle="Combine work and vacation in the beautiful setting of the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for workations in Malaga. This page will feature packages and tips for a successful workation.</p>
      </Section>
    </div>
  );
}
