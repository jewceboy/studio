
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Wedding Planning | Costa del Sol Navigator',
  description: 'Connect with expert wedding planners in Costa del Sol.',
};

export default function WeddingPlanningPage() {
  return (
    <div>
      <PageHeader
        title="Expert Wedding Planning Services"
        subtitle="Connect with top-tier wedding planners who will bring your vision to life with flawless execution."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Wedding Planning. This page will list expert wedding planners, their services, and galleries of their work.</p>
      </Section>
    </div>
  );
}
