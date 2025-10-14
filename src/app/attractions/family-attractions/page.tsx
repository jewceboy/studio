
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Family Attractions | Costa del Sol Navigator',
  description: 'Explore family-friendly attractions in Malaga.',
};

export default function FamilyAttractionsPage() {
  return (
    <div>
      <PageHeader
        title="Family Attractions in Malaga"
        subtitle="Discover attractions suitable for the whole family in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for family attractions in Malaga. This page will list family-friendly sites.</p>
      </Section>
    </div>
  );
}
