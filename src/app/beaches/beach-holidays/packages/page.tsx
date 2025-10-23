
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Costa del Sol Holidays | Beach & Hotel Packages',
  description: 'Explore holiday packages for the Costa del Sol. Find the best deals on flights, hotels, and all-inclusive resorts for your next vacation.',
};

export default function PackagesPage() {
  return (
    <div>
      <PageHeader
        title="Costa del Sol Holiday Packages"
        subtitle="Find the perfect holiday package for your trip to the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Costa del Sol holiday packages. This page will feature a variety of travel packages.</p>
      </Section>
    </div>
  );
}
