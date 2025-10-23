
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Shopping in Puerto Banus | The Ultimate Luxury Guide',
  description: 'The ultimate guide to luxury shopping in Puerto Banus, from flagship designer stores to exclusive boutiques and jewelry shops.',
};

export default function PuertoBanusPage() {
  return (
    <div>
      <PageHeader
        title="Shopping in Puerto Banus"
        subtitle="Explore the world-famous marina and its luxury shopping scene."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for shopping in Puerto Banus. This page will feature a directory of high-end stores.</p>
      </Section>
    </div>
  );
}
