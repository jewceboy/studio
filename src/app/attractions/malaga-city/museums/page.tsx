
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Museums Guide | Costa del Sol Navigator',
  description: 'A comprehensive guide to the museums in Malaga.',
};

export default function MuseumsPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Museums Guide"
        subtitle="Discover the rich art and history in Malaga's museums."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga museums guide. This page will provide information on various museums.</p>
      </Section>
    </div>
  );
}
