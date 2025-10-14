
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Flamenco Shows in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best flamenco shows in Malaga.',
};

export default function FlamencoShowsPage() {
  return (
    <div>
      <PageHeader
        title="Flamenco Shows in Malaga"
        subtitle="Experience the passion and art of flamenco."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for flamenco shows. This page will link to different types of flamenco experiences.</p>
      </Section>
    </div>
  );
}
