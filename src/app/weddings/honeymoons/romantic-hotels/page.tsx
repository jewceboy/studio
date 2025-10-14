
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Romantic Hotels Malaga | Costa del Sol Navigator',
  description: 'Find the most romantic hotels in Malaga for your honeymoon or special occasion.',
};

export default function RomanticHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Romantic Hotels in Malaga"
        subtitle="Discover charming and romantic hotels for an unforgettable stay."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for romantic hotels in Malaga. This page will feature a curated list of romantic accommodations.</p>
      </Section>
    </div>
  );
}
