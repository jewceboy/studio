
'use client';

import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GETYOURGUIDE_AFFILIATE_LINK_MALAGA_ACTIVITY } from '@/lib/constants'; // PLACEHOLDER_IMAGE_URL used by data
import Image from 'next/image';
import { Golf, Waves, MountainSnow, Utensils } from 'lucide-react'; // Example icons
import { nicheInterestData } from '@/lib/data'; // Import data from new location
// import type { NicheSubCategory } from '@/types'; // Type comes implicitly from nicheInterestData

const NicheIcons: { [key: string]: React.ElementType } = {
  golf: Golf,
  watersports: Waves,
  hiking: MountainSnow,
  culinary: Utensils,
  default: Sparkles, // Default icon from lucide-react
};


export async function generateStaticParams() {
  return Object.keys(nicheInterestData).map((niche) => ({
    niche,
  }));
}

export default function NicheInterestParentPage({ params }: { params: { niche: string } }) {
  const nicheData = nicheInterestData[params.niche];

  if (!nicheData) {
    notFound();
  }
  
  const IconComponent = NicheIcons[params.niche] || NicheIcons.default;


  return (
    <div>
       <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={nicheData.heroImage}
          alt={`Hero image for ${nicheData.name}`}
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint={nicheData.imageHint || params.niche}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="font-anton text-5xl md:text-6xl text-white text-center shadow-text">{nicheData.name}</h1>
        </div>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }
      `}</style>

      <Section title={`Explore ${params.niche.charAt(0).toUpperCase() + params.niche.slice(1)}`} className="pt-0">
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">{nicheData.intro}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {nicheData.subCategories.map((category) => (
            <InfoCard
              key={category.slug}
              title={category.name}
              imageUrl={category.imageUrl}
              imageAlt={`Image representing ${category.name}`}
              description={category.description}
              linkHref={`/interests/${params.niche}/${category.slug}`}
              linkText={`Explore ${category.name}`}
              imageHint={category.imageHint}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/10 text-center">
         <IconComponent className="h-16 w-16 text-accent-1-red mx-auto mb-6" />
        <h3 className="font-montserrat text-2xl font-bold text-primary-dark mb-4">
          Book Your {params.niche.charAt(0).toUpperCase() + params.niche.slice(1)} Adventure
        </h3>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Find and book tours, packages, and experiences related to {params.niche.toLowerCase()} in Costa del Sol.
        </p>
        <Button asChild variant="default" size="lg" className="bg-accent-1-red text-primary-light hover:bg-accent-1-red/90">
          <Link href={`${GETYOURGUIDE_AFFILIATE_LINK_MALAGA_ACTIVITY}?query=${params.niche}`} target="_blank" rel="noopener noreferrer">
            Browse {params.niche.charAt(0).toUpperCase() + params.niche.slice(1)} Packages
          </Link>
        </Button>
      </Section>
    </div>
  );
}

// Added a default icon Sparkles in case a niche is added without an icon in NicheIcons map
import { Sparkles } from 'lucide-react';
