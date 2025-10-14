
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Medical Tourism | Costa del Sol Navigator',
  description: 'Access leading medical facilities and specialists in Costa del Sol.',
};

export default function MedicalTourismPage() {
  return (
    <div>
      <PageHeader
        title="Medical Tourism"
        subtitle="Access leading private clinics and specialists for a range of treatments in a comfortable and serene environment."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Medical Tourism. This page will provide information on clinics, available treatments, and services for international patients.</p>
      </Section>
    </div>
  );
}
