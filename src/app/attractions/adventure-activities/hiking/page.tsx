
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Costa del Sol Hiking Trails | Your Guide to the Best Hikes',
  description: 'Explore the best hiking trails in the Costa del Sol region, from coastal paths to mountain treks. Find routes for all fitness levels.',
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
