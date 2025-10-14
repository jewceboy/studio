
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Michelin Star Restaurants Costa del Sol | Costa del Sol Navigator',
  description: 'A guide to Michelin-starred restaurants in the Costa del Sol.',
};

export default function MichelinStarPage() {
  return (
    <div>
      <PageHeader
        title="Michelin Star Restaurants in Costa del Sol"
        subtitle="Discover the best of Andalusian haute cuisine."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Michelin star restaurants. This page will list all Michelin-starred establishments in the region.</p>
      </Section>
    </div>
  );
}
