
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Benalmadena Marina | Puerto Marina Guide',
  description: 'Explore the beautiful Benalmadena marina (Puerto Marina), with its unique architecture, shops, restaurants, and boat trips.',
};

export default function BenalmadenaMarinaPage() {
  return (
    <div>
      <PageHeader
        title="Benalmadena Marina"
        subtitle="A guide to the stunning marina in Benalmadena."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Benalmadena marina. This page will showcase the shops, restaurants, and attractions.</p>
      </Section>
    </div>
  );
}
