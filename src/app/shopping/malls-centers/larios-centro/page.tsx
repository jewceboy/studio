import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Larios Centro Shopping Guide | Malaga Mall',
  description: 'A guide to Larios Centro, a major shopping mall in the heart of Malaga city. Find store directories, opening hours, and practical information.',
};

export default function LariosCentroPage() {
  return (
    <div>
      <PageHeader
        title="Larios Centro Shopping"
        subtitle="Explore one of Malaga's most popular city-center shopping malls."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Larios Centro. This page will list stores, opening hours, and practical information.</p>
      </Section>
    </div>
  );
}