
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'About Us | Malaga Travel Guide',
  description: 'Learn about the story and mission behind the Malaga Travel Guide.',
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="The story behind the Malaga Travel Guide."
      />
      <Section>
        <p className="text-center text-lg max-w-3xl mx-auto">
            Welcome to the Malaga Travel Guide! This is placeholder content for the about us page. You can share your story, mission, and what makes your travel guide unique.
        </p>
      </Section>
    </div>
  );
}
