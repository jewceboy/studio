
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'All Inclusive Beach Holidays Costa del Sol | Packages & Deals',
  description: 'Find the best all-inclusive beach holiday packages in the Costa del Sol for a hassle-free vacation. Compare resorts and deals.',
};

export default function AllInclusivePage() {
  return (
    <div>
      <PageHeader
        title="All Inclusive Beach Holidays"
        subtitle="Enjoy a hassle-free vacation with our all-inclusive beach holiday packages."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for all-inclusive beach holidays. This page will feature various all-inclusive deals.</p>
      </Section>
    </div>
  );
}
