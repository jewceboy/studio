
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Hotels in Malaga | Costa del Sol Navigator',
  description: 'Discover the best luxury hotels in Malaga for an unforgettable stay.',
};

export default function LuxuryHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Hotels in Malaga"
        subtitle="Indulge in the finest hotels Malaga has to offer."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury hotels. This page will feature a curated list of high-end hotels.</p>
      </Section>
    </div>
  );
}
