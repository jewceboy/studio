import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Honeymoon Suites in Costa del Sol | Most Romantic Hotels',
  description: 'Discover the most romantic and luxurious honeymoon suites in the Costa del Sol. Find hotels with private pools, stunning views, and VIP service.',
};

export default function LuxurySuitesPage() {
  return (
    <div>
      <PageHeader
        title="Honeymoon Suites in Costa del Sol"
        subtitle="Indulge in the ultimate romantic getaway in a stunning luxury suite."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for honeymoon suites. This page will showcase the best suites for a romantic escape.</p>
      </Section>
    </div>
  );
}