
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Shopping in Puerto Banus | Designer & Luxury Brands',
  description: 'A guide to luxury shopping in Puerto Banus. Explore designer boutiques like Dior, Gucci, and Louis Vuitton in this glamorous marina.',
};

export default function PuertoBanusShoppingPage() {
  return (
    <div>
      <PageHeader
        title="Shopping in Puerto Banus"
        subtitle="Discover designer boutiques and luxury brands."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for shopping in Puerto Banus. This page will list the top stores and brands.</p>
      </Section>
    </div>
  );
}
