
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga City Walking Tours | Free & Guided Tours',
  description: 'Discover Malaga on foot with the best guided and free walking tours. Explore the old town, historic sites, and hidden gems with a local guide.',
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
