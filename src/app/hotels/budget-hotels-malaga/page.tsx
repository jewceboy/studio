
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Budget Hotels in Malaga | Costa del Sol Navigator',
  description: 'Find affordable and budget-friendly hotels in Malaga.',
};

export default function BudgetHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Budget Hotels in Malaga"
        subtitle="Great value hotels for your stay in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for budget hotels in Malaga. This page will list affordable hotel options.</p>
      </Section>
    </div>
  );
}
