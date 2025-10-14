
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Local Markets in Malaga | Costa del Sol Navigator',
  description: 'Discover the best local and street markets in Malaga for crafts, antiques, and more.',
};

export default function LocalMarketsPage() {
  return (
    <div>
      <PageHeader
        title="Local Markets in Malaga"
        subtitle="Explore the weekly markets for unique finds and local culture."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for local markets. This page will provide a schedule and guide to various street markets.</p>
      </Section>
    </div>
  );
}
