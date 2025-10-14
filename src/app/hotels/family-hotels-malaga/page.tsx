
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Family Friendly Hotels in Malaga | Costa del Sol Navigator',
  description: 'Find the best family-friendly hotels in Malaga.',
};

export default function FamilyHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Family Friendly Hotels in Malaga"
        subtitle="Hotels that welcome families with open arms."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for family-friendly hotels. This page will list the best hotels for families.</p>
      </Section>
    </div>
  );
}
