
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Personal Shoppers in Puerto Banus | Costa del Sol Navigator',
  description: 'Elevate your shopping experience with a personal shopper in Puerto Banus.',
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
