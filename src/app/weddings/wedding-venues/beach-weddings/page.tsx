
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Beach Wedding Venues Marbella | Costa del Sol Navigator',
  description: 'Find the perfect beach wedding venue in Marbella.',
};

export default function BeachWeddingsPage() {
  return (
    <div>
      <PageHeader
        title="Beach Wedding Venues in Marbella"
        subtitle="Say 'I do' with the sand between your toes and the Mediterranean as your witness."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for beach wedding venues in Marbella. This page will showcase stunning seaside locations.</p>
      </Section>
    </div>
  );
}
