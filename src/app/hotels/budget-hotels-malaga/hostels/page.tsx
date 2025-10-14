
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Backpacker Hostels Costa del Sol | Costa del Sol Navigator',
  description: 'Find the best backpacker hostels in the Costa del Sol.',
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
