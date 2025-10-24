
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga Sightseeing Map | Printable & Downloadable',
  description: 'A downloadable and printable sightseeing map of Malaga city center, highlighting key attractions, museums, and points of interest.',
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