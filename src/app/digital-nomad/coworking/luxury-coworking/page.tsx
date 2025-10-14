
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Luxury Coworking Malaga | Costa del Sol Navigator',
  description: 'Explore high-end and luxury coworking spaces in Malaga.',
};

export default function LuxuryCoworkingPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Coworking Spaces in Malaga"
        subtitle="Work in style with these premium coworking options in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for luxury coworking spaces in Malaga. This page will feature exclusive and high-end workspaces.</p>
      </Section>
    </div>
  );
}
