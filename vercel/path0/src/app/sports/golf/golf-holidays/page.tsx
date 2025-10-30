
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Golf Holidays in Malaga | Packages & Deals',
  description: 'Plan your perfect golf holiday in Malaga and the Costa del Sol. Find packages, deals, and guides for your ultimate golf vacation.',
};

export default function GolfHolidaysPage() {
  return (
    <div>
      <PageHeader
        title="Golf Holidays in Malaga"
        subtitle="Packages and guides for your ultimate golf vacation."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for golf holidays in Malaga. This page will feature golf packages and deals.</p>
      </Section>
    </div>
  );
}
