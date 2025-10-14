
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Marbella Nightlife Guide | Costa del Sol Navigator',
  description: 'Your guide to the best nightlife in Marbella and Puerto Banus.',
};

export default function MarbellaPuertoBanusPage() {
  return (
    <div>
      <PageHeader
        title="Marbella & Puerto Banus Nightlife"
        subtitle="From exclusive clubs to sophisticated bars, discover the best of the coast's nightlife."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Marbella & Puerto Banus nightlife. This page will link to luxury clubs and VIP services.</p>
      </Section>
    </div>
  );
}
