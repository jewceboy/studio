
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga City Walking Tours | Costa del Sol Navigator',
  description: 'Discover Malaga on foot with guided walking tours.',
};

export default function WalkingToursPage() {
  return (
    <div>
      <PageHeader
        title="Malaga City Walking Tours"
        subtitle="The best way to see Malaga is on foot. Find guided tours here."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga city walking tours. This page will feature various walking tour options.</p>
      </Section>
    </div>
  );
}
