
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Puerto Banus Beach Clubs | Costa del Sol Navigator',
  description: 'Discover the exclusive beach clubs in Puerto Banus.',
};

export default function PuertoBanusBeachClubsPage() {
  return (
    <div>
      <PageHeader
        title="Puerto Banus Beach Clubs"
        subtitle="Experience the luxury and glamour of Puerto Banus beach clubs."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Puerto Banus beach clubs. This page will highlight the top beach clubs in the area.</p>
      </Section>
    </div>
  );
}
