
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Marbella Old Town Guide | What to See & Do',
  description: 'A complete guide to exploring Marbella\'s charming old town (Casco Antiguo). Discover Plaza de los Naranjos, narrow streets, shops, and restaurants.',
};

export default function MarbellaOldTownPage() {
  return (
    <div>
      <PageHeader
        title="Marbella Old Town Guide"
        subtitle="Discover the history and beauty of Marbella's old town."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Marbella Old Town. This page will feature a detailed guide.</p>
      </Section>
    </div>
  );
}
