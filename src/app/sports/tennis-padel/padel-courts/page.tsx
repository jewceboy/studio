import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Padel Courts in Costa del Sol | Book & Play',
  description: 'Find and book padel courts across the Costa del Sol. A guide to the best padel clubs and facilities for Spain\'s most popular racquet sport.',
};

export default function PadelCourtsPage() {
  return (
    <div>
      <PageHeader
        title="Padel Courts in Costa del Sol"
        subtitle="Discover the best places to play Spain's most popular racquet sport."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for padel courts. This page will provide a directory of padel clubs and courts.</p>
      </Section>
    </div>
  );
}