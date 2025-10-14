
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Business Hotels | Costa del Sol Navigator',
  description: 'Find hotels equipped for business travelers and corporate events.',
};

export default function BusinessHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Business Hotels"
        subtitle="Select from top hotels with modern facilities, meeting rooms, and executive services."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Business Hotels. This page will feature a directory of hotels suitable for corporate clients.</p>
      </Section>
    </div>
  );
}
