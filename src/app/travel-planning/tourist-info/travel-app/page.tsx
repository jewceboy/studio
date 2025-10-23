
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Travel App | Your Pocket Guide to the City',
  description: 'Download our recommended travel app for Malaga. Get offline maps, guides, and tips for exploring the Costa del Sol on your phone.',
};

export default function TravelAppPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Travel App"
        subtitle="Your pocket guide to Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for the Malaga travel app. This page will promote a partner or in-house travel application.</p>
      </Section>
    </div>
  );
}
