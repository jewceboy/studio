
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Cheap Restaurants in Malaga | Costa del Sol Navigator',
  description: 'Find the best cheap eats and budget-friendly restaurants in Malaga.',
};

export default function CheapEatsPage() {
  return (
    <div>
      <PageHeader
        title="Cheap Eats in Malaga"
        subtitle="Delicious food that won't break the bank."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for cheap eats in Malaga. This page will list affordable dining options.</p>
      </Section>
    </div>
  );
}
