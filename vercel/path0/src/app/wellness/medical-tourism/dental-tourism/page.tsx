
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Dental Tourism in Costa del Sol | Premium Clinics',
  description: 'Information on luxury dental tourism in the Costa del Sol. Combine a premium holiday with top-quality dental care and cosmetic dentistry.',
};

export default function DentalTourismPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Dental Tourism in Costa del Sol"
        subtitle="Combine a luxury holiday with top-quality dental care."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury dental tourism. This page will provide information on high-end dental clinics.</p>
      </Section>
    </div>
  );
}
