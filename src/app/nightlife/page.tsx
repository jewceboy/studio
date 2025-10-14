
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Nightlife Guide | Costa del Sol Navigator',
  description: 'Your complete guide to nightlife in Malaga and the Costa del Sol.',
};

export default function NightlifePage() {
  return (
    <div>
      <PageHeader
        title="Nightlife & Entertainment"
        subtitle="Discover the best bars, clubs, and entertainment on the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for nightlife. This page will link to child pages for different nightlife scenes.</p>
      </Section>
    </div>
  );
}
