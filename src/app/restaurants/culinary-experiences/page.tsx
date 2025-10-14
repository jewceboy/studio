
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Culinary Experiences in Malaga | Costa del Sol Navigator',
  description: 'Immerse yourself in Malaga\'s food culture with unique culinary experiences.',
};

export default function CulinaryExperiencesPage() {
  return (
    <div>
      <PageHeader
        title="Culinary Experiences in Malaga"
        subtitle="Go beyond dining with cooking classes, food tours, and wine tasting."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for culinary experiences. This page will offer various food-related activities.</p>
      </Section>
    </div>
  );
}
