import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Airlines Operating at Malaga Airport (AGP) | Full List',
  description: 'A comprehensive list of all airlines operating out of Malaga-Costa del Sol Airport (AGP), including terminals and contact information.',
};

export default function AirlinesPage() {
  return (
    <div>
      <PageHeader
        title="Airlines at Malaga Airport"
        subtitle="A list of airlines operating out of Malaga (AGP)."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for airlines at Malaga Airport. This page will list all airlines with their terminal information.</p>
      </Section>
    </div>
  );
}