
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Incentive Travel Packages Spain | Costa del Sol Navigator',
  description: 'Discover incentive travel packages in Spain.',
};

export default function IncentiveTravelPage() {
  return (
    <div>
      <PageHeader
        title="Incentive Travel Packages in Spain"
        subtitle="Motivate your team with unique incentive travel packages."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for incentive travel packages in Spain. This page will showcase various incentive trips.</p>
      </Section>
    </div>
  );
}
