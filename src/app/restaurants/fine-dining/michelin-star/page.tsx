
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Michelin Star Restaurants in Costa del Sol | The Ultimate Guide',
  description: 'A guide to all Michelin-starred restaurants in the Costa del Sol. Discover the best of Andalusian haute cuisine in Marbella, Malaga, and beyond.',
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
