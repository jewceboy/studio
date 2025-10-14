
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Costa del Sol Golf Courses | Costa del Sol Navigator',
  description: 'A guide to the best golf courses in the Costa del Sol.',
};

export default function GolfPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Golf Courses"
        subtitle="Discover why this region is known as the 'Costa del Golf'."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Costa del Sol golf courses. This page will provide details on top courses and resorts.</p>
      </Section>
    </div>
  );
}
