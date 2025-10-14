
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Workation Packages Costa del Sol | Costa del Sol Navigator',
  description: 'Explore workation packages in the Costa del Sol.',
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
