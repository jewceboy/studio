
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Shopping Malls in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best shopping malls and centers in Malaga.',
};

export default function MallsCentersPage() {
  return (
    <div>
      <PageHeader
        title="Shopping Malls in Malaga"
        subtitle="Discover the best places for one-stop shopping."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for shopping malls. This page will provide a directory of the main shopping centers.</p>
      </Section>
    </div>
  );
}
