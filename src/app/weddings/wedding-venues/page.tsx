
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Wedding Venues Malaga | Costa del Sol Navigator',
  description: 'Discover the most beautiful wedding venues in Malaga and the Costa del Sol.',
};

export default function WeddingVenuesPage() {
  return (
    <div>
      <PageHeader
        title="Find Your Dream Wedding Venue"
        subtitle="Explore a curated selection of the most beautiful and exclusive wedding venues in Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Wedding Venues. This page will link to categories like beach venues, luxury villas, and rustic fincas.</p>
      </Section>
    </div>
  );
}
