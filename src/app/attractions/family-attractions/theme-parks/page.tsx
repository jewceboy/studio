
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Theme Parks near Malaga | Costa del Sol Family Fun',
  description: 'Find theme parks near Malaga for a fun day out. Explore Tivoli World, water parks, and other family-friendly attractions.',
};

export default function ThemeParksPage() {
  return (
    <div>
      <PageHeader
        title="Theme Parks Near Malaga"
        subtitle="Explore the best theme parks in the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for theme parks near Malaga. This page will feature nearby theme parks.</p>
      </Section>
    </div>
  );
}
