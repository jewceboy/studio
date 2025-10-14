
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Best beaches near Malaga | Costa del Sol Navigator',
  description: 'Find the best beaches near Malaga, from popular spots to hidden gems.',
};

export default function BeachesPage() {
  return (
    <div>
      <PageHeader
        title="Beaches & Coastal"
        subtitle="Discover the stunning coastline of the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for beaches. This page will link to child pages like Malaga Beaches, Beach Holidays, and Beach Clubs.</p>
      </Section>
    </div>
  );
}
