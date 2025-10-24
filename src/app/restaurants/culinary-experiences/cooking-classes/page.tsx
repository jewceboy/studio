import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Cooking Classes in Malaga | Spanish & Tapas Courses',
  description: 'Learn to cook traditional Spanish cuisine and tapas with expert-led cooking classes in Malaga. A fun and immersive culinary experience.',
};

export default function CookingClassesPage() {
  return (
    <div>
      <PageHeader
        title="Cooking Classes in Malaga"
        subtitle="Master the art of Spanish cooking."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for cooking classes in Malaga. This page will list available classes and workshops.</p>
      </Section>
    </div>
  );
}