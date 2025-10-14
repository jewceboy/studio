
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Restaurants Guide | Costa del Sol Navigator',
  description: 'Your ultimate guide to restaurants and dining in Malaga.',
};

export default function RestaurantsPage() {
  return (
    <div>
      <PageHeader
        title="Restaurants & Dining"
        subtitle="A culinary journey through Malaga's best restaurants."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for restaurants. This page will link to child pages like Traditional Spanish, Fine Dining, and more.</p>
      </Section>
    </div>
  );
}
