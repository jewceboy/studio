
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Spa Retreats | Costa del Sol Navigator',
  description: 'Find luxury spa and relaxation retreats in Costa del Sol.',
};

export default function SpaRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Spa & Relaxation Retreats"
        subtitle="Unwind and rejuvenate at exclusive spa resorts with world-class treatments."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Spa Retreats. This page will list top spas, wellness centers, and relaxation packages.</p>
      </Section>
    </div>
  );
}
