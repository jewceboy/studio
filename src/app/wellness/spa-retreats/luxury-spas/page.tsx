
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Spa Hotels Marbella | Costa del Sol Navigator',
  description: 'Find the best luxury spa hotels in Marbella.',
};

export default function LuxurySpasPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Spa Hotels in Marbella"
        subtitle="Indulge in the ultimate relaxation at Marbella's top spa hotels."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury spa hotels in Marbella. This page will feature a list of the most exclusive spas.</p>
      </Section>
    </div>
  );
}
