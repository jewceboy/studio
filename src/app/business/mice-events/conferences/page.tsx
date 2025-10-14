
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Executive Conferences Malaga | Costa del Sol Navigator',
  description: 'Host executive conferences in Malaga.',
};

export default function ConferencesPage() {
  return (
    <div>
      <PageHeader
        title="Executive Conferences in Malaga"
        subtitle="World-class venues and services for your executive conferences."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for executive conferences in Malaga. This page will list top conference facilities.</p>
      </Section>
    </div>
  );
}
