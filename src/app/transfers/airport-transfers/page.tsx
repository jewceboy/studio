
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Airport Transfers | Costa del Sol Navigator',
  description: 'Arrange your transfers from Malaga airport.',
};

export default function AirportTransfersPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Airport Transfers"
        subtitle="Reliable and convenient airport transfer options."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga airport transfers. This page will detail different transfer services.</p>
      </Section>
    </div>
  );
}
