
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Free Activities in Malaga | Costa del Sol Navigator',
  description: 'A list of free things to do and see in Malaga.',
};

export default function FreeActivitiesPage() {
  return (
    <div>
      <PageHeader
        title="Free Activities in Malaga"
        subtitle="Explore the city without spending a euro."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for free activities. This page will list parks, museums with free entry times, and other free attractions.</p>
      </Section>
    </div>
  );
}
