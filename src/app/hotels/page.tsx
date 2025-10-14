
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Hotels in Malaga | Costa del Sol Navigator',
  description: 'Find the best hotels in Malaga and the Costa del Sol, from luxury to budget-friendly options.',
};

export default function HotelsPage() {
  return (
    <div>
      <PageHeader
        title="Hotels in Malaga"
        subtitle="Find your perfect stay in the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for hotels. This page will link to child pages like Luxury Hotels, Budget Hotels, and Family Hotels.</p>
      </Section>
    </div>
  );
}
