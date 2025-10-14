
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Digital Nomad Malaga | Costa del Sol Navigator',
  description: 'A guide for digital nomads and remote workers in Malaga.',
};

export default function DigitalNomadPage() {
  return (
    <div>
      <PageHeader
        title="Malaga for Digital Nomads"
        subtitle="Everything you need to know to live and work remotely in the beautiful Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for the Digital Nomad parent page. This page will link to child pages about coworking, visas, and workation packages.</p>
      </Section>
    </div>
  );
}
