
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Best Malaga Beaches for Families | Safe & Fun Options',
  description: 'Find the best family-friendly beaches in Malaga. Discover beaches with shallow waters, playgrounds, and all the necessary amenities.',
};

export default function FamilyBeachesPage() {
  return (
    <div>
      <PageHeader
        title="Best Malaga Beaches for Families"
        subtitle="Discover safe and fun beaches for your family in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for family-friendly Malaga beaches. This page will list the top beaches for families.</p>
      </Section>
    </div>
  );
}
