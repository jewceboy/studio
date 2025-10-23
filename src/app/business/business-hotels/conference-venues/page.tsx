
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Conference Venues in Malaga | MICE & Business Events',
  description: 'Find the best conference venues in Malaga for your corporate events, meetings, and MICE tourism needs. Explore hotels and convention centers.',
};

export default function ConferenceVenuesPage() {
  return (
    <div>
      <PageHeader
        title="Conference Venues in Malaga"
        subtitle="Explore top venues for your next conference in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for conference venues in Malaga. This page will feature a directory of venues.</p>
      </Section>
    </div>
  );
}
