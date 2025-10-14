
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Restaurants in Mijas Pueblo | Costa del Sol Navigator',
  description: 'Find the best restaurants in Mijas Pueblo.',
};

export default function MijasPuebloRestaurantsPage() {
  return (
    <div>
      <PageHeader
        title="Restaurants in Mijas Pueblo"
        subtitle="A guide to the best dining experiences in Mijas Pueblo."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Mijas Pueblo restaurants. This page will feature a list of top places to eat.</p>
      </Section>
    </div>
  );
}
