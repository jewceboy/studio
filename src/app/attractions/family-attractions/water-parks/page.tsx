
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Water Parks in Costa del Sol | Aqualand & More',
  description: 'Cool off at the best water parks in the Costa del Sol. Find information on Aqualand Torremolinos, Aquamijas, and more family fun.',
};

export default function WaterParksPage() {
  return (
    <div>
      <PageHeader
        title="Water Parks in Costa del Sol"
        subtitle="Discover the best water parks for a family fun day."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for water parks in Costa del Sol. This page will showcase the top water parks.</p>
      </Section>
    </div>
  );
}
