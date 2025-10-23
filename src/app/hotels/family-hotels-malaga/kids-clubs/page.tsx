
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';

export const metadata = {
  title: 'Hotels with Kids Clubs in Malaga | Family-Friendly Stays',
  description: 'Find the best hotels in Malaga that offer kids clubs and activities to keep children entertained on your family holiday.',
};

export default function KidsClubsPage() {
  return (
    <div>
      <PageHeader
        title="Hotels with Kids Clubs in Malaga"
        subtitle="Keep the little ones entertained with these family-friendly hotels."
      />
      <Section>
        <p className="text-center text-lg">Placeholder content for hotels with kids clubs. This page will feature hotels with great amenities for children.</p>
      </Section>
    </div>
  );
}
