
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Marbella Shopping District | Costa del Sol Navigator',
  description: 'A guide to the best shopping districts in Marbella.',
};

export default function MarbellaShoppingPage() {
  return (
    <div>
      <PageHeader
        title="Marbella Shopping District"
        subtitle="Find the best places for shopping in Marbella."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Marbella shopping. This page will highlight the main shopping areas.</p>
      </Section>
    </div>
  );
}
