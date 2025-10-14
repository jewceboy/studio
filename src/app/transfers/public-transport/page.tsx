
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Public Transport Tips | Costa del Sol Navigator',
  description: 'Tips for using public transport in Malaga.',
};

export default function PublicTransportPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Public Transport Tips"
        subtitle="Getting around Malaga using public transport."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for public transport tips. This page will give advice on using buses and trains.</p>
      </Section>
    </div>
  );
}
