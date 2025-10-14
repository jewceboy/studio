
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Resorts Costa del Sol | Costa del Sol Navigator',
  description: 'Explore the most luxurious resorts in the Costa del Sol.',
};

export default function LuxuryResortsPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Resorts in Costa del Sol"
        subtitle="Indulge in the finest resorts the Costa del Sol has to offer."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury resorts in Costa del Sol. This page will showcase the best luxury resorts.</p>
      </Section>
    </div>
  );
}
