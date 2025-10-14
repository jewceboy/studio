
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Plaza Mayor Malaga | Costa del Sol Navigator',
  description: 'A guide to the Plaza Mayor shopping and leisure center near Malaga airport.',
};

export default function PlazaMayorPage() {
  return (
    <div>
      <PageHeader
        title="Plaza Mayor Shopping Center"
        subtitle="Your guide to one of the largest open-air shopping and leisure centers on the coast."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Plaza Mayor. This page will feature store directories, dining options, and cinema information.</p>
      </Section>
    </div>
  );
}
