
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Festival Dates | Costa del Sol Navigator',
  description: 'Find out the dates for Malaga\'s main annual festivals.',
};

export default function AnnualFestivalsPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Festival Dates"
        subtitle="A calendar of the most important annual festivals in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for annual festivals. This page will link to details about each major festival.</p>
      </Section>
    </div>
  );
}
