
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Five Star Hotels in Malaga | Costa del Sol Navigator',
  description: 'Explore the most luxurious five-star hotels in Malaga.',
};

export default function FiveStarHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Five Star Hotels in Malaga"
        subtitle="Experience ultimate luxury and service at these five-star hotels."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for five-star hotels. This page will list the top luxury hotels in Malaga.</p>
      </Section>
    </div>
  );
}
