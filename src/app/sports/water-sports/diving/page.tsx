
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Scuba Diving Malaga | Costa del Sol Navigator',
  description: 'Explore the underwater world with scuba diving in Malaga and the Costa del Sol.',
};

export default function DivingPage() {
  return (
    <div>
      <PageHeader
        title="Scuba Diving in Malaga"
        subtitle="Discover the best dive sites and schools."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for scuba diving. This page will list dive centers, popular dive sites, and certification courses.</p>
      </Section>
    </div>
  );
}
