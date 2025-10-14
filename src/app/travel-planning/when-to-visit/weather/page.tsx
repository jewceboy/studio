
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Weather Guide | Costa del Sol Navigator',
  description: 'A detailed guide to the weather in Malaga throughout the year.',
};

export default function WeatherPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Weather Guide"
        subtitle="Month-by-month weather averages and what to expect."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for the Malaga weather guide. This page will include temperature, rainfall, and sunshine hours.</p>
      </Section>
    </div>
  );
}
