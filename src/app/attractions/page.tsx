
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Things to do in Malaga | Costa del Sol Navigator',
  description: 'Discover the best attractions and things to do in Malaga and the Costa del Sol.',
};

export default function AttractionsPage() {
  return (
    <div>
      <PageHeader
        title="Attractions & Things To Do"
        subtitle="Explore the best attractions, from historic sites to family fun."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for attractions. This page will link to child pages like Malaga City, Family Attractions, and Adventure Activities.</p>
      </Section>
    </div>
  );
}
