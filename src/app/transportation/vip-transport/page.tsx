
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'VIP Transport | Costa del Sol Navigator',
  description: 'Arrange luxury and VIP transportation services.',
};

export default function VIPTransportPage() {
  return (
    <div>
      <PageHeader
        title="VIP & Luxury Transport"
        subtitle="Travel in style with high-end vehicles, private chauffeurs, and personalized services."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for VIP Transport. This page will showcase luxury vehicle options and chauffeur services.</p>
      </Section>
    </div>
  );
}
