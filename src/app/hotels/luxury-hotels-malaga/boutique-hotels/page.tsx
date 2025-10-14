
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Boutique Hotels Malaga Center | Costa del Sol Navigator',
  description: 'Discover the best boutique hotels in the center of Malaga.',
};

export default function BoutiqueHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Boutique Hotels in Malaga Center"
        subtitle="Charming and unique hotels in the heart of the city."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for boutique hotels. This page will showcase unique and stylish hotels.</p>
      </Section>
    </div>
  );
}
