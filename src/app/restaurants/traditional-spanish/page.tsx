
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Traditional Spanish Restaurants in Malaga | Costa del Sol Navigator',
  description: 'Discover authentic Spanish cuisine in Malaga.',
};

export default function TraditionalSpanishPage() {
  return (
    <div>
      <PageHeader
        title="Traditional Spanish Restaurants in Malaga"
        subtitle="Savor the authentic flavors of Spain."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for traditional Spanish restaurants. This page will highlight authentic eateries.</p>
      </Section>
    </div>
  );
}
