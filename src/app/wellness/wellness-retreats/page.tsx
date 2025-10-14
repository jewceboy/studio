
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Wellness Retreats | Costa del Sol Navigator',
  description: 'Embark on a journey of self-care with yoga, meditation, and fitness retreats.',
};

export default function WellnessRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Wellness Retreats"
        subtitle="Embark on a journey of self-care with yoga, meditation, and fitness retreats in beautiful locations."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Wellness Retreats. This page will feature yoga, meditation, and fitness retreats.</p>
      </Section>
    </div>
  );
}
