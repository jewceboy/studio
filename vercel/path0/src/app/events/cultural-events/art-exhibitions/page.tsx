
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Art Exhibitions in Malaga | Current & Upcoming Shows',
  description: 'Find current and upcoming art exhibitions in Malaga\'s top museums and galleries, including the Picasso Museum and Centre Pompidou.',
};

export default function ArtExhibitionsPage() {
  return (
    <div>
      <PageHeader
        title="Art Exhibitions in Malaga"
        subtitle="A guide to the vibrant art scene and exhibitions in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for art exhibitions in Malaga. This page will provide information on current and upcoming shows.</p>
      </Section>
    </div>
  );
}
