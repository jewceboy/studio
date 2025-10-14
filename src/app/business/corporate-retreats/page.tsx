
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Corporate Retreats | Costa del Sol Navigator',
  description: 'Organize impactful corporate retreats in Costa del Sol.',
};

export default function CorporateRetreatsPage() {
  return (
    <div>
      <PageHeader
        title="Corporate Retreats"
        subtitle="Inspire your team with executive retreats in luxurious and motivating settings."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Corporate Retreats. This page will showcase exclusive hotels, team-building activities, and planning services.</p>
      </Section>
    </div>
  );
}
