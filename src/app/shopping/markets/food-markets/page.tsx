
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Food Markets in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best food markets in Malaga, including Atarazanas Market.',
};

export default function FoodMarketsPage() {
  return (
    <div>
      <PageHeader
        title="Food Markets in Malaga"
        subtitle="A feast for the senses. Discover fresh, local produce and culinary delights."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for food markets. This page will feature guides to Atarazanas and other local food markets.</p>
      </Section>
    </div>
  );
}
