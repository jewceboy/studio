
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Coworking Spaces Malaga | Costa del Sol Navigator',
  description: 'Find the best coworking spaces in Malaga for remote work.',
};

export default function CoworkingPage() {
  return (
    <div>
      <PageHeader
        title="Coworking Spaces in Malaga"
        subtitle="Find the perfect workspace to be productive and connect with other nomads."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for coworking spaces in Malaga. This page will feature a list of top coworking spots.</p>
      </Section>
    </div>
  );
}
