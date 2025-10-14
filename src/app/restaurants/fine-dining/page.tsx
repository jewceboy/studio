
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Fine Dining in Malaga | Costa del Sol Navigator',
  description: 'Experience the best of fine dining in Malaga.',
};

export default function FineDiningPage() {
  return (
    <div>
      <PageHeader
        title="Fine Dining in Malaga"
        subtitle="Exquisite culinary experiences for the discerning palate."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for fine dining in Malaga. This page will feature top-tier restaurants.</p>
      </Section>
    </div>
  );
}
