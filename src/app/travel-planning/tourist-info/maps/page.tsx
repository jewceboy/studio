
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Sightseeing Map | Costa del Sol Navigator',
  description: 'A downloadable sightseeing map of Malaga.',
};

export default function MapsPage() {
  return (
    <div>
      <PageHeader
        title="Malaga Sightseeing Map"
        subtitle="Downloadable maps to help you navigate the city."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for maps. This page will offer downloadable PDF maps for tourists.</p>
      </Section>
    </div>
  );
}
