import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Workation Packages in Costa del Sol | Remote Work & Play',
  description: 'Explore curated workation packages in the Costa del Sol, combining accommodation, coworking access, and leisure activities.',
};

export default function PackagesPage() {
  return (
    <div>
      <PageHeader
        title="Workation Packages in Costa del Sol"
        subtitle="Curated packages for the perfect blend of work and leisure."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for workation packages. This page will feature different package options for digital nomads.</p>
      </Section>
    </div>
  );
}