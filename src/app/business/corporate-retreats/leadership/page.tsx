import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Leadership Retreats in Andalucia | Executive Offsites',
  description: 'Find exclusive and luxurious leadership retreats in Andalucia, Spain. Plan your next executive offsite in a motivating and inspiring setting.',
};

export default function LeadershipRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Leadership Retreats in Andalucia"
        subtitle="Exclusive retreats for executive leadership teams in Andalucia."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for leadership retreats in Andalucia. This page will feature high-end retreat options.</p>
      </Section>
    </div>
  );
}