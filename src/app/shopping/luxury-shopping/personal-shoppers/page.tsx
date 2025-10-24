import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Personal Shoppers in Puerto Banus | VIP Styling Services',
  description: 'Elevate your shopping experience with an expert personal shopper in Puerto Banus. Get bespoke styling and access to exclusive collections.',
};

export default function PersonalShoppersPage() {
  return (
    <div>
      <PageHeader
        title="Personal Shoppers in Puerto Banus"
        subtitle="Bespoke styling and shopping services for a truly luxurious experience."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for personal shoppers. This page will feature elite personal shopping services.</p>
      </Section>
    </div>
  );
}