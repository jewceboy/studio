
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Markets in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best local and food markets in Malaga.',
};

export default function MarketsPage() {
  return (
    <div>
      <PageHeader
        title="Markets in Malaga"
        subtitle="Discover fresh produce, local crafts, and vibrant atmospheres at Malaga's best markets."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for markets in Malaga. This page will cover food markets, flea markets, and craft markets.</p>
      </Section>
    </div>
  );
}
