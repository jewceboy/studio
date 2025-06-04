
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { nicheInterestData } from '@/lib/data';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export const metadata = {
  title: 'Interests & Activities in Costa del Sol | Costa del Sol Navigator',
  description: 'Discover activities based on your interests in Costa del Sol. From world-class golf courses to thrilling watersports and cultural experiences.',
};

export default function InterestsPage() {
  const niches = Object.entries(nicheInterestData).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Interests', href: '/interests' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader
        title="Explore Your Interests in Costa del Sol"
        subtitle="Whether you're a golf enthusiast, a beach lover, or a culture seeker, find activities and guides tailored to your passions."
      />
      <Section className="pt-0" title="Browse by Interest">
        {niches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {niches.map((niche) => (
              <InfoCard
                key={niche.slug}
                title={niche.name}
                imageUrl={niche.heroImage} // Using heroImage for the niche overview
                imageAlt={`Explore ${niche.name} in Costa del Sol`}
                description={niche.intro.substring(0, 100) + '...'} // Short excerpt of the intro
                linkHref={`/interests/${niche.slug}`}
                linkText={`Explore ${niche.name}`}
                imageHint={niche.imageHint || niche.slug}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No interests found. Please check back later.</p>
        )}
      </Section>
    </div>
  );
}
