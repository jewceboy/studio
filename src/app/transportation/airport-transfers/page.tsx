
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Airport Transfers | Costa del Sol Navigator',
  description: 'Book reliable airport transfers from Malaga Airport (AGP).',
};

export default function AirportTransfersPage() {
  return (
    <div>
      <PageHeader
        title="Airport Transfers"
        subtitle="Book reliable private transfers from Malaga Airport (AGP) to your hotel or destination."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Airport Transfers. This page will feature a booking engine and information on different transfer options.</p>
      </Section>
    </div>
  );
}
