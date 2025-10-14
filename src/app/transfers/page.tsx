
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Airport Transfers | Costa del Sol Navigator',
  description: 'Your guide to transportation and transfers from Malaga Airport.',
};

export default function TransfersPage() {
  return (
    <div>
      <PageHeader
        title="Transportation & Transfers"
        subtitle="Getting around the Costa del Sol has never been easier."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for transfers. This page will link to child pages like Airport Transfers and Luxury Transportation.</p>
      </Section>
    </div>
  );
}
