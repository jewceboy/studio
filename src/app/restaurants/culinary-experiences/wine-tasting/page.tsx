
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Wine Tasting in Malaga | Andalusian Wine Tours',
  description: 'Discover the local wines of Malaga and the surrounding Andalusian region with guided wine tasting tours and experiences.',
};

export default function WineTastingPage() {
  return (
    <div>
      <PageHeader
        title="Wine Tasting in Malaga"
        subtitle="Explore the flavors of Andalusian wines."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for wine tasting in Malaga. This page will feature wine tours and tasting events.</p>
      </Section>
    </div>
  );
}
