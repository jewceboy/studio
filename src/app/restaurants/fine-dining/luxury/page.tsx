
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Restaurants in Marbella | Costa del Sol Navigator',
  description: 'Dine at the most luxurious restaurants in Marbella.',
};

export default function LuxuryRestaurantsPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Restaurants in Marbella"
        subtitle="Experience exquisite dining in glamorous settings."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury restaurants in Marbella. This page will highlight high-end dining experiences.</p>
      </Section>
    </div>
  );
}
