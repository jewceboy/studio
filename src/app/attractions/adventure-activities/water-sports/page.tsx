
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Water Sports in Malaga | Costa del Sol Navigator',
  description: 'Enjoy a variety of water sports in Malaga.',
};

export default function WaterSportsPage() {
  return (
    <div>
      <PageHeader
        title="Water Sports in Malaga"
        subtitle="Information on water sports activities available in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for water sports in Malaga. This page will list available water sports.</p>
      </Section>
    </div>
  );
}
