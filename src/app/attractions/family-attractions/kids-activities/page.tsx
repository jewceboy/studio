
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Kids Activities in Malaga | Family Fun Guide',
  description: 'Discover fun activities for kids in Malaga, from theme parks and water parks to playgrounds and museums for the whole family.',
};

export default function KidsActivitiesPage() {
  return (
    <div>
      <PageHeader
        title="Kids Activities in Malaga"
        subtitle="A guide to the best activities for children in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for kids activities in Malaga. This page will showcase fun things for kids to do.</p>
      </Section>
    </div>
  );
}
