
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Coworking Marbella | Costa del Sol Navigator',
  description: 'Discover coworking spaces in Marbella.',
};

export default function CoworkingMarbellaPage() {
  return (
    <div>
      <PageHeader
        title="Coworking in Marbella"
        subtitle="Find your ideal workspace in the luxurious setting of Marbella."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for coworking in Marbella. This page will list the best shared workspaces in the area.</p>
      </Section>
    </div>
  );
}
