
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Car Hire Marbella | Costa del Sol Navigator',
  description: 'Information on luxury car hire and transportation in Marbella.',
};

export default function LuxuryTransportationPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Transportation in Marbella"
        subtitle="Travel in style with our luxury transport options."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury transportation. This page will list high-end car rentals and services.</p>
      </Section>
    </div>
  );
}
