import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Private Jet Charter Malaga | Fly to Costa del Sol',
  description: 'Information on private jet charters to and from Malaga (AGP). Experience the ultimate in luxury travel with private flights to the Costa del Sol.',
};

export default function PrivateJetPage() {
  return (
    <div>
      <PageHeader
        title="Private Jet Charter Malaga"
        subtitle="The ultimate in luxury travel."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for private jet charters. This page will provide information on chartering a private jet.</p>
      </Section>
    </div>
  );
}