
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Benalmadena Marina | Costa del Sol Navigator',
  description: 'Explore the beautiful Benalmadena marina.',
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
