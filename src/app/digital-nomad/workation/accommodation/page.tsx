
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Premium Digital Nomad Accommodation | Costa del Sol Navigator',
  description: 'Find premium accommodation for digital nomads in the Costa del Sol.',
};

export default function AccommodationPage() {
  return (
    <div>
      <PageHeader
        title="Premium Digital Nomad Accommodation"
        subtitle="Find comfortable and well-equipped accommodation for your remote work stay."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for premium digital nomad accommodation. This page will list apartments and hotels suitable for remote workers.</p>
      </Section>
    </div>
  );
}
