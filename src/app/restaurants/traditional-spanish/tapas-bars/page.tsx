
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Best Tapas Bars in Malaga | Costa del Sol Navigator',
  description: 'A guide to the best tapas bars in Malaga.',
};

export default function TapasBarsPage() {
  return (
    <div>
      <PageHeader
        title="Best Tapas Bars in Malaga"
        subtitle="Experience the vibrant tapas culture of Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for the best tapas bars in Malaga. This page will review top tapas spots.</p>
      </Section>
    </div>
  );
}
