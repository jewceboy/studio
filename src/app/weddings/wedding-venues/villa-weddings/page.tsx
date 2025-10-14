
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Villa Wedding Venues Costa del Sol | Costa del Sol Navigator',
  description: 'Find stunning villa wedding venues in the Costa del Sol.',
};

export default function VillaWeddingsPage() {
  return (
    <div>
      <PageHeader
        title="Villa Wedding Venues in Costa del Sol"
        subtitle="Celebrate your special day in a private and luxurious villa."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for villa wedding venues. This page will feature exclusive villas available for weddings.</p>
      </Section>
    </div>
  );
}
