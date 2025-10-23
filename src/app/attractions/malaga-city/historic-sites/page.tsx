
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Historic Sites | Alcazaba, Roman Theatre & More',
  description: 'A guide to the historic sites of Malaga, including the Alcazaba, Roman Theatre, and Gibralfaro Castle. Explore the rich history of the city.',
};

export default function HistoricSitesPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Historic Sites"
        subtitle="Explore the rich history of Malaga through its iconic sites."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga historic sites. This page will feature information on historical locations.</p>
      </Section>
    </div>
  );
}
