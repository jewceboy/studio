
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Puerto Banus Guide | Costa del Sol Navigator',
  description: 'Your complete guide to visiting Puerto Banus.',
};

export default function PuertoBanusPage() {
  return (
    <div>
      <PageHeader
        title="Puerto Banus Guide"
        subtitle="Discover the luxury and glamour of Puerto Banus."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Puerto Banus. This page will link to child pages on shopping and the marina.</p>
      </Section>
    </div>
  );
}
