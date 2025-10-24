import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Family Resorts in Costa del Sol | All-Inclusive Packages',
  description: 'Find the best all-inclusive family resorts in the Costa del Sol. Enjoy a carefree family vacation with activities and amenities for all ages.',
};

export default function AllInclusivePage() {
  return (
    <div>
      <PageHeader
        title="All-Inclusive Family Resorts in Costa del Sol"
        subtitle="Enjoy a carefree family vacation with these all-inclusive resorts."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for all-inclusive family resorts. This page will list top resorts for families.</p>
      </Section>
    </div>
  );
}