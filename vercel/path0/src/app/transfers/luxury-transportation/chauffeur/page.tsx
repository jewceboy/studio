
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Chauffeur Services in Costa del Sol | Luxury Car & Driver Hire',
  description: 'Hire professional chauffeur services in the Costa del Sol. Travel in style and comfort with a luxury car and private driver in Marbella and Malaga.',
};

export default function ChauffeurPage() {
  return (
    <div>
      <PageHeader
        title="Chauffeur Services in Costa del Sol"
        subtitle="Travel in style and comfort with our professional chauffeur services."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for chauffeur services. This page will list companies offering private driver services.</p>
      </Section>
    </div>
  );
}
