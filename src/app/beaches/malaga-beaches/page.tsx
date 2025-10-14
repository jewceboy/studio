
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Beaches | Costa del Sol Navigator',
  description: 'Discover the beautiful beaches of Malaga.',
};

export default function MalagaBeachesPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Beaches"
        subtitle="A guide to the best beaches in and around Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga beaches. This page will feature a list of top beaches in the area.</p>
      </Section>
    </div>
  );
}
