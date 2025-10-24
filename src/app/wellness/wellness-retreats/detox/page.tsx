import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Detox Retreats in Spain | Juice & Wellness Cleanses',
  description: 'Find the best detox retreats in Spain for a cleansing experience. Explore juice fasts, wellness cleanses, and rejuvenation programs in Costa del Sol.',
};

export default function DetoxRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Detox Retreats in Spain"
        subtitle="Rejuvenate your body and mind with a specialized detox retreat."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for detox retreats in Spain. This page will feature top detox programs and centers.</p>
      </Section>
    </div>
  );
}