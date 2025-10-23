
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Golf Resorts in Costa del Sol | Best Stay & Play Hotels',
  description: 'Discover the best golf resorts in the Costa del Sol. Find luxury hotels with on-site courses for the perfect stay and play vacation.',
};

export default function GolfResortsPage() {
  return (
    <div>
      <PageHeader
        title="Golf Resorts in Costa del Sol"
        subtitle="Stay and play at these top-tier golf resorts."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for golf resorts in Costa del Sol. This page will list the best resorts with on-site courses.</p>
      </Section>
    </div>
  );
}
