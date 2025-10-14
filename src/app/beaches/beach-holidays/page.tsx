
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Beach Holidays in Malaga | Costa del Sol Navigator',
  description: 'Plan your perfect beach holiday in Malaga.',
};

export default function BeachHolidaysPage() {
  return (
    <div>
      <PageHeader
        title="Beach Holidays in Malaga"
        subtitle="Everything you need to plan your beach vacation in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for beach holidays in Malaga. This page will provide tips and package deals.</p>
      </Section>
    </div>
  );
}
