
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Wedding Venues Malaga | Costa del Sol Navigator',
  description: 'Find exclusive and luxury wedding venues in Malaga.',
};

export default function LuxuryVenuesPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Wedding Venues in Malaga"
        subtitle="Host an unforgettable celebration at one of Malaga's most exclusive venues."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury wedding venues in Malaga. This page will showcase high-end and exclusive locations.</p>
      </Section>
    </div>
  );
}
