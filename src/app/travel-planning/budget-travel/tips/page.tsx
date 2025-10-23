
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Budget Travel Tips for Spain | Save Money on Your Trip',
  description: 'General budget travel tips for visiting Spain. Save money on accommodation, food, and transport with our expert advice.',
};

export default function TipsPage() {
  return (
    <div>
      <PageHeader
        title="Budget Travel Tips for Spain"
        subtitle="Money-saving advice for your trip to Spain."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for budget travel tips. This page will provide general advice for saving money while traveling in Spain.</p>
      </Section>
    </div>
  );
}
