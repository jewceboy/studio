
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Budget Travel Tips for Spain | Costa del Sol Navigator',
  description: 'General budget travel tips for visiting Spain.',
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
