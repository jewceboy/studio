
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Family Resorts Costa del Sol | Costa del Sol Navigator',
  description: 'Find all-inclusive family resorts in the Costa del Sol.',
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
