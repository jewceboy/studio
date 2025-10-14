
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Benalmadena Travel Guide | Costa del Sol Navigator',
  description: 'Your complete travel guide to Benalmadena.',
};

export default function BenalmadenaPage() {
  return (
    <div>
      <PageHeader
        title="Benalmadena Travel Guide"
        subtitle="Discover everything Benalmadena has to offer."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Benalmadena. This page will link to child pages about its attractions.</p>
      </Section>
    </div>
  );
}
