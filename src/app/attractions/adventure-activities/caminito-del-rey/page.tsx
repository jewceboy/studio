
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Caminito del Rey Walk | Costa del Sol Navigator',
  description: 'Learn about the Caminito del Rey walk, a stunning hiking trail in Malaga.',
};

export default function CaminitoDelReyPage() {
  return (
    <div>
      <PageHeader
        title="Caminito del Rey Walk"
        subtitle="Detailed guide for the breathtaking Caminito del Rey walk."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Caminito del Rey walk. This page will provide detailed information about the trail.</p>
      </Section>
    </div>
  );
}
