
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Car Rental | Costa del Sol Navigator',
  description: 'Compare and book rental cars in Costa del Sol.',
};

export default function CarRentalPage() {
  return (
    <div>
      <PageHeader
        title="Car Rental"
        subtitle="Explore the coast at your own pace. Compare and book rental cars from trusted providers."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Car Rental. This page will feature a car rental comparison and booking tool.</p>
      </Section>
    </div>
  );
}
