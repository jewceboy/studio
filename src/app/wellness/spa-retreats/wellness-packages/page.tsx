import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Wellness Packages in Malaga | Spa & Relaxation Deals',
  description: 'Discover curated wellness packages in Malaga for a rejuvenating trip. Find deals on spa treatments, yoga, and mind-body experiences.',
};

export default function WellnessPackagesPage() {
  return (
    <div>
      <PageHeader
        title="Wellness Packages in Malaga"
        subtitle="Curated packages for a complete mind and body wellness experience."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for wellness packages in Malaga. This page will list various package deals from local spas and centers.</p>
      </Section>
    </div>
  );
}