
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Cheap Flights to Malaga (AGP) | A Booking Guide',
  description: 'A guide to finding cheap flights to Malaga airport (AGP). Get tips, tricks, and tools for booking the best airfare deals to Costa del Sol.',
};

export default function CheapFlightsPage() {
  return (
    <div>
      <PageHeader
        title="Cheap Flights to Malaga"
        subtitle="Tips and tools for finding the best airfare deals."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for finding cheap flights. This page will provide strategies for booking affordable air travel.</p>
      </Section>
    </div>
  );
}
