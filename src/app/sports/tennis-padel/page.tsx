
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Tennis & Padel in Costa del Sol | Costa del Sol Navigator',
  description: 'Find tennis and padel clubs and courts in the Costa del Sol.',
};

export default function TennisPadelPage() {
  return (
    <div>
      <PageHeader
        title="Tennis & Padel in Costa del Sol"
        subtitle="Enjoy racquet sports in the sunshine at top clubs."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for tennis and padel. This page will list clubs, courts, and camps.</p>
      </Section>
    </div>
  );
}
