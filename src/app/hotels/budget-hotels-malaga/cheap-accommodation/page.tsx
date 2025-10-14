
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Cheap Accommodation Costa del Sol | Costa del Sol Navigator',
  description: 'Find cheap accommodation options in the Costa del Sol.',
};

export default function CheapAccommodationPage() {
  return (
    <div>
      <PageHeader
        title="Cheap Accommodation in Costa del Sol"
        subtitle="Affordable places to stay in the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for cheap accommodation. This page will list budget-friendly options.</p>
      </Section>
    </div>
  );
}
