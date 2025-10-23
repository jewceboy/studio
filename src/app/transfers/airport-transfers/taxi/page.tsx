
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Airport Taxi Prices | Fares & Booking Guide',
  description: 'Information on official taxi prices from Malaga airport (AGP) to popular destinations like Marbella, Torremolinos, and the city center.',
};

export default function TaxiPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Airport Taxi Prices"
        subtitle="A guide to taxi fares from Malaga airport."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga airport taxi prices. This page will provide estimated fares to popular destinations.</p>
      </Section>
    </div>
  );
}
