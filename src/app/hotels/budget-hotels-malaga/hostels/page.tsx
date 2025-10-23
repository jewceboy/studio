
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Backpacker Hostels in Costa del Sol | Best Hostels Guide',
  description: 'Find the best backpacker hostels in the Costa del Sol. Compare prices, social vibes, and locations in Malaga, Marbella, and more.',
};

export default function HostelsPage() {
  return (
    <div>
      <PageHeader
        title="Backpacker Hostels in Costa del Sol"
        subtitle="A guide to the best hostels for backpackers."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for backpacker hostels. This page will feature top-rated hostels.</p>
      </Section>
    </div>
  );
}
