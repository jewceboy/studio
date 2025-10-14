
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Wine Tasting in Malaga | Costa del Sol Navigator',
  description: 'Discover the local wines of Malaga with guided wine tasting tours.',
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
