
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Golf Holidays Malaga | Costa del Sol Navigator',
  description: 'Plan your perfect golf holiday in Malaga and the Costa del Sol.',
};

export default function GolfHolidaysPage() {
  return (
    <div>
      <PageHeader
        title="Golf Holidays in Malaga"
        subtitle="Packages and guides for your ultimate golf vacation."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for golf holidays in Malaga. This page will feature golf packages and travel tips.</p>
      </Section>
    </div>
  );
}
