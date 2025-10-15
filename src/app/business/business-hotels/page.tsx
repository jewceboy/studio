
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { PLACEHOLDER_IMAGE_URL } from '@/lib/constants';

export const metadata = {
  title: 'Business Hotels Malaga | Costa del Sol Navigator',
  description: 'Find hotels equipped for business travelers and corporate events.',
};

const hotelCategories = [
    {
        slug: 'conference-venues',
        name: 'Conference Venues',
        description: 'Explore top venues for your next conference in Malaga.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'conference venue malaga'),
        imageHint: 'conference hall',
        linkHref: '/business/business-hotels/conference-venues',
        linkText: 'Find Venues',
    },
    {
        slug: 'meeting-rooms',
        name: 'Business Meeting Rooms',
        description: 'Professional spaces for your business meetings in Marbella.',
        imageUrl: PLACEHOLDER_IMAGE_URL(600, 400, 'meeting room marbella'),
        imageHint: 'business meeting',
        linkHref: '/business/business-hotels/meeting-rooms',
        linkText: 'Find Rooms',
    },
];

export default function BusinessHotelsPage() {
  return (
    <div>
      <PageHeader
        title="Business Hotels"
        subtitle="Select from top hotels with modern facilities, meeting rooms, and executive services."
      />
      <Section className="pt-0" title="Facilities & Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {hotelCategories.map((category) => (
                <InfoCard
                key={category.slug}
                title={category.name}
                imageUrl={category.imageUrl}
                imageAlt={`Explore ${category.name}`}
                description={category.description}
                linkHref={category.linkHref}
                linkText={category.linkText}
                imageHint={category.imageHint}
                />
            ))}
        </div>
      </Section>
    </div>
  );
}
