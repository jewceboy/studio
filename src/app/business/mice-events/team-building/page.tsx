
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Team Building Events Malaga | Costa del Sol Navigator',
  description: 'Find team building events and activities in Malaga.',
};

export default function TeamBuildingPage() {
  return (
    <div>
      <PageHeader
        title="Team Building Events in Malaga"
        subtitle="Boost morale and collaboration with engaging team building activities."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for team building events in Malaga. This page will list a variety of activities.</p>
      </Section>
    </div>
  );
}
