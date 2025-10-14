
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Local Restaurants in Malaga | Costa del Sol Navigator',
  description: 'Eat like a local at these favorite restaurants in Malaga.',
};

export default function LocalFavoritesPage() {
  return (
    <div>
      <PageHeader
        title="Local Favorite Restaurants in Malaga"
        subtitle="Discover the hidden gems loved by locals."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for local favorite restaurants. This page will showcase authentic, local spots.</p>
      </Section>
    </div>
  );
}
