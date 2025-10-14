
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Travel App | Costa del Sol Navigator',
  description: 'Download our recommended travel app for Malaga.',
};

export default function TravelAppPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Travel App"
        subtitle="Your pocket guide to Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for the Malaga travel app. This page will promote a partner or in-house travel application.</p>
      </Section>
    </div>
  );
}
