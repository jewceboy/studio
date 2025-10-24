import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Feria de Malaga Guide | Dates, Tips & What to Wear',
  description: 'A complete guide to the annual Feria de Malaga. Find dates, tips for the day and night fair, what to wear, and how to enjoy the festivities.',
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