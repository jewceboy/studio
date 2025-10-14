
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Sports Tourism in Costa del Sol | Costa del Sol Navigator',
  description: 'Explore sports tourism in Costa del Sol, from world-class golf courses to tennis and water sports.',
};

export default function SportsPage() {
  return (
    <div>
      <PageHeader
        title="Sports & Golf Tourism"
        subtitle="Active holidays in the sun with world-class facilities for golf, tennis, and water sports."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Sports & Golf Tourism. This page will link to child pages about specific sports.</p>
      </Section>
    </div>
  );
}
