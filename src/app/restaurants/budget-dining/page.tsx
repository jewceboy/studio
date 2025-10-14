
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Budget Restaurants in Malaga | Costa del Sol Navigator',
  description: 'Find affordable dining options in Malaga.',
};

export default function BudgetDiningPage() {
  return (
    <div>
      <PageHeader
        title="Budget Dining in Malaga"
        subtitle="Enjoy great food without spending a fortune."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for budget dining in Malaga. This page will provide options for affordable meals.</p>
      </Section>
    </div>
  );
}
