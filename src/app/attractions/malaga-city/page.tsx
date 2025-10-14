
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Malaga City Attractions | Costa del Sol Navigator',
  description: 'Discover the best attractions in Malaga city.',
};

export default function MalagaCityPage() {
  return (
    <div>
      <PageHeader
        title="Malaga City Attractions"
        subtitle="Explore the vibrant heart of the Costa del Sol."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Malaga city attractions. This page will list the top things to see and do.</p>
      </Section>
    </div>
  );
}
