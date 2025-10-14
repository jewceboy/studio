
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Yoga Retreats Costa del Sol | Costa del Sol Navigator',
  description: 'Find yoga retreats in the Costa del Sol.',
};

export default function YogaRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Yoga Retreats in Costa del Sol"
        subtitle="Find your inner peace with a yoga retreat on the sunny coast."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for yoga retreats in Costa del Sol. This page will showcase various yoga centers and retreat packages.</p>
      </Section>
    </div>
  );
}
