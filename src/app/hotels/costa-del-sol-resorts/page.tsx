
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Costa del Sol Resorts | Costa del Sol Navigator',
  description: 'Find the best resorts in the Costa del Sol for your vacation.',
};

export default function CostaDelSolResortsPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Resorts"
        subtitle="A selection of top resorts for a perfect holiday."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Costa del Sol resorts. This page will feature a variety of resorts.</p>
      </Section>
    </div>
  );
}
