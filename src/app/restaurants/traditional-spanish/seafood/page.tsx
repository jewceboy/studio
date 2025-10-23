
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Seafood Restaurants in Malaga | Fresh Fish & Espetos',
  description: 'Find the best seafood restaurants in Malaga. Enjoy the freshest catch from the Mediterranean, including traditional espetos de sardinas.',
};

export default function SeafoodPage() {
  return (
    <div>
      <PageHeader
        title="Seafood Restaurants in Malaga"
        subtitle="Enjoy the freshest catch from the Mediterranean."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for seafood restaurants. This page will feature the best places for fresh seafood.</p>
      </Section>
    </div>
  );
}
