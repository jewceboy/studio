
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Remote Work Spain Visa Requirements | Costa del Sol Navigator',
  description: 'Requirements for the Spanish remote work and digital nomad visa.',
};

export default function RequirementsPage() {
  return (
    <div>
      <PageHeader
        title="Spain Digital Nomad Visa Requirements"
        subtitle="A checklist of all the requirements for the Spanish remote work visa."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for visa requirements. This page will provide a detailed checklist for applicants.</p>
      </Section>
    </div>
  );
}
