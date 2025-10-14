
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Chauffeur Services Costa del Sol | Costa del Sol Navigator',
  description: 'Hire professional chauffeur services in the Costa del Sol.',
};

export default function ChauffeurPage() {
  return (
    <div>
      <PageHeader
        title="Chauffeur Services in Costa del Sol"
        subtitle="Travel in style and comfort with our professional chauffeur services."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for chauffeur services. This page will feature luxury car and driver hire options.</p>
      </Section>
    </div>
  );
}
