
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Mijas Pueblo Day Trip | Costa del Sol Navigator',
  description: 'Plan your perfect day trip to the charming Mijas Pueblo.',
};

export default function MijasPuebloPage() {
  return (
    <div>
      <PageHeader
        title="Mijas Pueblo Day Trip"
        subtitle="Discover the white-washed village of Mijas."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Mijas Pueblo. This page will link to child pages about things to do and restaurants.</p>
      </Section>
    </div>
  );
}
