
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Seasons Guide | Spring, Summer, Autumn & Winter',
  description: 'A guide to visiting Malaga in spring, summer, autumn, and winter. Discover the pros and cons of each season for your trip to Costa del Sol.',
};

export default function SeasonsPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Seasons Guide"
        subtitle="Discover what each season has to offer in the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for the Malaga seasons guide. This page will describe the pros and cons of visiting during each season.</p>
      </Section>
    </div>
  );
}
