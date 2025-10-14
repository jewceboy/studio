
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Costa del Sol Hiking Trails | Costa del Sol Navigator',
  description: 'Explore the best hiking trails in the Costa del Sol region.',
};

export default function HikingPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Hiking Trails"
        subtitle="Discover the most scenic hiking trails in the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Costa del Sol hiking trails. This page will feature various hiking routes.</p>
      </Section>
    </div>
  );
}
