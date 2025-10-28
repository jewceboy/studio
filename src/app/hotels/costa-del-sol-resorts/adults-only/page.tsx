
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Adults-Only Luxury Resorts in Costa del Sol | Child-Free',
  description: 'Discover adults-only luxury resorts for a peaceful and romantic getaway in the Costa del Sol. Find the best child-free hotels and spas.',
};

export default function AdultsOnlyPage() {
  return (
    <div>
      <PageHeader
        title="Adults Only Luxury Resorts"
        subtitle="Experience tranquility and luxury at these adults-only resorts."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for adults-only luxury resorts. This page will feature exclusive resorts for adults.</p>
      </Section>
    </div>
  );
}
