
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Best Bars in Malaga | Rooftop, Tapas & Cocktail Bars',
  description: 'A guide to the best bars in Malaga, from rooftop terraces with stunning views to traditional bodegas and creative cocktail bars.',
};

export default function MalagaBarsPage() {
  return (
    <div>
      <PageHeader
        title="Best Bars in Malaga"
        subtitle="Discover the perfect spot for a drink in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for the best bars in Malaga. This page will feature a curated list of top bars.</p>
      </Section>
    </div>
  );
}
