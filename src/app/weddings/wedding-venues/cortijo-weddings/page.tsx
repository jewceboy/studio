
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Cortijo Wedding Venues in Andalucia | Rustic Charm',
  description: 'Discover rustic and charming cortijo wedding venues in Andalucia. Celebrate your wedding in a traditional Spanish countryside estate.',
};

export default function CortijoWeddingsPage() {
  return (
    <div>
      <PageHeader
        title="Cortijo Wedding Venues in Andalucia"
        subtitle="Celebrate your wedding in a traditional and rustic Andalusian cortijo."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for cortijo wedding venues. This page will feature beautiful countryside estates.</p>
      </Section>
    </div>
  );
}
