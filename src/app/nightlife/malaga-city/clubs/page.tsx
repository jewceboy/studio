
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Nightclubs in Malaga | Costa del Sol Navigator',
  description: 'Your guide to the best nightclubs and late-night venues in Malaga.',
};

export default function MalagaClubsPage() {
  return (
    <div>
      <PageHeader
        title="Nightclubs in Malaga"
        subtitle="Dance the night away at Malaga's top clubs."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for nightclubs in Malaga. This page will list the best places for dancing.</p>
      </Section>
    </div>
  );
}
