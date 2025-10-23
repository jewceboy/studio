
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'La Malagueta Beach Guide | Malaga City Beach',
  description: 'A complete guide to La Malagueta beach, Malaga\'s main city beach. Find information on restaurants, amenities, and how to get there.',
};

export default function LaMalaguetaPage() {
  return (
    <div>
      <PageHeader
        title="La Malagueta Beach Guide"
        subtitle="Everything you need to know about Malaga's most famous beach."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for La Malagueta beach guide. This page will offer detailed information about the beach.</p>
      </Section>
    </div>
  );
}
