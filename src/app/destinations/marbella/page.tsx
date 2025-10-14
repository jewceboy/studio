
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Marbella Travel Tips | Costa del Sol Navigator',
  description: 'Your essential travel tips for visiting Marbella.',
};

export default function MarbellaPage() {
  return (
    <div>
      <PageHeader
        title="Marbella Travel Tips"
        subtitle="Make the most of your trip to Marbella with these tips."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Marbella. This page will link to child pages about its attractions.</p>
      </Section>
    </div>
  );
}
