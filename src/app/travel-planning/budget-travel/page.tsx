
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Budget Travel in Malaga | Costa del Sol Navigator',
  description: 'Tips and tricks for traveling in Malaga on a budget.',
};

export default function BudgetTravelPage() {
  return (
    <div>
      <PageHeader
        title="Budget Travel in Malaga"
        subtitle="Enjoy the best of Malaga without breaking the bank."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for budget travel. This page will provide tips on saving money on accommodation, food, and activities.</p>
      </Section>
    </div>
  );
}
