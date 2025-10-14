
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Limousine Services Marbella | Costa del Sol Navigator',
  description: 'Arrive in style with limousine services in Marbella.',
};

export default function LimousinePage() {
  return (
    <div>
      <PageHeader
        title="Limousine Services in Marbella"
        subtitle="Exclusive limousine hire for any occasion."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for limousine services. This page will list companies offering limo hire in Marbella.</p>
      </Section>
    </div>
  );
}
