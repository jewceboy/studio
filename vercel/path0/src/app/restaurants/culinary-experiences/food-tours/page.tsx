
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Food Tours in Malaga | Tapas & Wine Tasting Tours',
  description: 'Explore the culinary scene of Malaga with guided food tours. Discover the best tapas, local markets, and wines with an expert guide.',
};

export aafault function FoodToursPage() {
  return (
    <div>
      <PageHeader
        title="Food Tours in Malaga"
        subtitle="Taste your way through Malaga with our food tours."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for food tours in Malaga. This page will list available culinary tours.</p>
      </Section>
    </div>
  );
}
