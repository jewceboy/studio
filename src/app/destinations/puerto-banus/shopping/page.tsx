
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Shopping in Puerto Banus | Costa del Sol Navigator',
  description: 'A guide to luxury shopping in Puerto Banus.',
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
