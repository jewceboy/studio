
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Feria de Malaga | Costa del Sol Navigator',
  description: 'A guide to the annual Feria de Malaga.',
};

export default function FeriaDeMalagaPage() {
  return (
    <div>
      <PageHeader
        title="Feria de Malaga"
        subtitle="Everything you need to know about Malaga's biggest festival."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Feria de Malaga. This page will provide dates, tips, and information.</p>
      </Section>
    </div>
  );
}
