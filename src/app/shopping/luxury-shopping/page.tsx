
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Shopping Marbella | Costa del Sol Navigator',
  description: 'A guide to luxury shopping in Marbella and Puerto Banus.',
};

export default function LuxuryShoppingPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Shopping in Marbella"
        subtitle="Indulge in a world of high fashion, designer brands, and exclusive boutiques."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury shopping. This page will detail the best areas for high-end retail therapy.</p>
      </Section>
    </div>
  );
}
