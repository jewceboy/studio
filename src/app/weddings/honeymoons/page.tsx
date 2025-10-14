
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Honeymoons | Costa del Sol Navigator',
  description: 'Plan a romantic honeymoon in Costa del Sol.',
};

export default function HoneymoonsPage() {
  return (
    <div>
      <PageHeader
        title="Luxury Honeymoons in Costa del Sol"
        subtitle="Begin your life together with an unforgettable romantic escape in the beautiful south of Spain."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Honeymoons. This page will feature romantic packages, boutique hotels, and experiences for newlyweds.</p>
      </Section>
    </div>
  );
}
