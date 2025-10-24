import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Cosmetic Surgery in Costa del Sol | Clinics & Procedures',
  description: 'Information on world-class cosmetic surgery clinics and procedures in the Costa del Sol. Access leading specialists in a discreet, luxury setting.',
};

export default function CosmeticSurgeryPage() {
  return (
    <div>
      <PageHeader
        title="Cosmetic Surgery in Costa del Sol"
        subtitle="Access world-class cosmetic and plastic surgery clinics."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for cosmetic surgery in the Costa del Sol. This page will provide information on clinics and procedures.</p>
      </Section>
    </div>
  );
}