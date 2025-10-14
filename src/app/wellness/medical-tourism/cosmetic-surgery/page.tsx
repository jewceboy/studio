
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Cosmetic Surgery Costa del Sol | Costa del Sol Navigator',
  description: 'Information on cosmetic surgery options in the Costa del Sol.',
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
