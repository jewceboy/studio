
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Christmas Markets in Malaga | Costa del Sol Navigator',
  description: 'A guide to the Christmas markets and festivities in Malaga.',
};

export default function ChristmasPage() {
  return (
    <div>
      <PageHeader
        title="Christmas Markets in Malaga"
        subtitle="Experience the magic of Christmas in Malaga."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for Christmas in Malaga. This page will feature information on markets and lights.</p>
      </Section>
    </div>
  );
}
