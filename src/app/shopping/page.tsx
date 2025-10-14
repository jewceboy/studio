
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Shopping in Malaga | Costa del Sol Navigator',
  description: 'A guide to shopping in Malaga, from luxury boutiques to local markets.',
};

export default function ShoppingPage() {
  return (
    <div>
      <PageHeader
        title="Shopping & Retail"
        subtitle="From high-end designer brands to unique local crafts, discover the best shopping in the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Shopping & Retail. This page will link to child pages about luxury shopping, malls, and markets.</p>
      </Section>
    </div>
  );
}
