
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Beach Clubs Costa del Sol | Costa del Sol Navigator',
  description: 'Experience the best luxury beach clubs in the Costa del Sol.',
};

export default function LuxuryBeachClubsPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Beach Clubs in Costa del Sol"
        subtitle="Indulge in the ultimate luxury at the top beach clubs."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury beach clubs in Costa del Sol. This page will showcase exclusive beach club experiences.</p>
      </Section>
    </div>
  );
}
