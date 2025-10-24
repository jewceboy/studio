import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Tennis Camps in Costa del Sol | Coaching & Academies',
  description: 'Join intensive tennis camps for all ages and levels in the Costa del Sol. Find professional coaching and top tennis academies.',
};

export default function TennisCampsPage() {
  return (
    <div>
      <PageHeader
        title="Tennis Camps in Costa del Sol"
        subtitle="Improve your game with professional coaching and facilities."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for tennis camps. This page will feature various tennis programs and academies.</p>
      </Section>
    </div>
  );
}