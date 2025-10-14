
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Tourist Information | Costa del Sol Navigator',
  description: 'Essential tourist information for visitors to Malaga.',
};

export default function TouristInfoPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Tourist Information"
        subtitle="Practical information for your visit."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for tourist information. This page will include details on tourist offices, safety, and local customs.</p>
      </Section>
    </div>
  );
}
