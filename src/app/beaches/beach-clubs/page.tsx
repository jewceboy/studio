
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Beach Clubs in Marbella | Costa del Sol Navigator',
  description: 'Discover the vibrant beach club scene in Marbella.',
};

export default function BeachClubsPage() {
  return (
    <div>
      <PageHeader
        title="Beach Clubs in Marbella"
        subtitle="Your guide to the best beach clubs in and around Marbella."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Marbella beach clubs. This page will feature a list of top beach clubs.</p>
      </Section>
    </div>
  );
}
