
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Sailing Costa del Sol | Costa del Sol Navigator',
  description: 'Experience sailing on the Mediterranean with charters and lessons in the Costa del Sol.',
};

export default function SailingPage() {
  return (
    <div>
      <PageHeader
        title="Sailing in Costa del Sol"
        subtitle="Set sail on the beautiful Mediterranean sea."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for sailing. This page will feature information on boat charters, sailing schools, and tours.</p>
      </Section>
    </div>
  );
}
