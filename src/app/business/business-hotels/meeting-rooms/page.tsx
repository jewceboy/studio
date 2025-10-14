
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Business Meeting Venues Marbella | Costa del Sol Navigator',
  description: 'Find business meeting venues in Marbella.',
};

export default function MeetingRoomsPage() {
  return (
    <div>
      <PageHeader
        title="Business Meeting Venues in Marbella"
        subtitle="Professional spaces for your business meetings in Marbella."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for business meeting venues in Marbella. This page will list available spaces.</p>
      </Section>
    </div>
  );
}
