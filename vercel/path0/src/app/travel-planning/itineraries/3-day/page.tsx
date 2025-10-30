
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: '3-Day Malaga Itinerary | The Perfect Long Weekend',
  description: 'A perfect and detailed 3-day itinerary for exploring the best of Malaga, from historic sites and museums to tapas bars and the beach.',
};

export default function ThreeDayPage() {
  return (
    <div>
      <PageHeader
        title="3-Day Malaga Itinerary"
        subtitle="How to spend a perfect long weekend in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for a 3-day Malaga itinerary. This page will provide a detailed day-by-day plan.</p>
      </Section>
    </div>
  );
}
