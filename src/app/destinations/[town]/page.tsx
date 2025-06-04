
'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
// import InfoCard from '@/components/shared/InfoCard'; Removed as not used directly here
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Utensils, Umbrella, BedDouble, Info, Camera } from 'lucide-react';
// import type { Destination } from '@/lib/constants'; Removed, type comes from data import implicitly
import TestimonialCard from '@/components/shared/TestimonialCard';
import { destinationsData } from '@/lib/data'; // Import data from new location

// Placeholder data for testimonials (can be moved to data.ts later if needed)
const testimonials = [
  { quote: "Malaga was amazing! The guide helped us find the best spots.", author: "Sarah L.", source: "TripAdvisor" },
  { quote: "Loved the detailed info on beaches and food. Highly recommend!", author: "John B.", source: "Travel Blog" },
];


export async function generateStaticParams() {
  return Object.keys(destinationsData).map((town) => ({
    town,
  }));
}

export default function DestinationPage({ params }: { params: { town: string } }) {
  const destination = destinationsData[params.town];

  if (!destination) {
    notFound();
  }

  return (
    <div>
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src={destination.heroImage}
          alt={`Hero image for ${destination.name}`}
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint={destination.imageHint || destination.name.toLowerCase()}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="font-anton text-5xl md:text-7xl text-white text-center shadow-text">{destination.name}</h1>
        </div>
      </div>
       <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
        }
      `}</style>

      <Section title="Overview" className="pt-0">
        <p className="text-lg text-foreground leading-relaxed">{destination.overview}</p>
      </Section>

      <Section title="Things to Do" className="bg-secondary/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destination.thingsToDo.map((activity, index) => (
            <div key={index} className="flex items-start p-4 bg-card rounded-lg shadow">
              <Camera className="h-6 w-6 text-accent-1-red mr-4 mt-1 shrink-0" />
              <p className="text-foreground">{activity}</p>
            </div>
          ))}
        </div>
        {/* Placeholder for GetYourGuide CTAs */}
        <div className="mt-8 text-center">
          <Button variant="default" className="bg-accent-1-red text-primary-light">
            <Link href={`https://getyourguide.com/${destination.slug}-activities?partner_id=YOUR_PARTNER_ID`} target="_blank" rel="noopener noreferrer">
              Find Tours in {destination.name}
            </Link>
          </Button>
        </div>
      </Section>

      {destination.beaches && destination.beaches.length > 0 && (
        <Section title="Beaches">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {destination.beaches.map((beach, index) => (
              <div key={index} className="flex items-center p-3 bg-card rounded-md shadow-sm">
                <Umbrella className="h-5 w-5 text-accent-3-light-blue mr-3 shrink-0" />
                <span className="text-foreground">{beach}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section title="Hotels" className="bg-secondary/10">
         <div className="text-center">
          <BedDouble className="h-12 w-12 text-accent-1-red mx-auto mb-4" />
          <p className="text-lg text-foreground mb-6 leading-relaxed max-w-2xl mx-auto">{destination.hotelsIntro}</p>
          <Button asChild variant="default" size="lg" className="bg-accent-1-red text-primary-light">
            <Link href={`/destinations/${destination.slug}/hotels`}>
              Find Hotels in {destination.name}
            </Link>
          </Button>
        </div>
      </Section>

      <Section title="Food & Drink">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
             <Utensils className="h-24 w-24 text-accent-1-red" />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-foreground leading-relaxed">{destination.foodAndDrink}</p>
          </div>
        </div>
      </Section>

      <Section title="Practical Information" className="bg-secondary/10">
         <div className="flex items-start p-6 bg-card rounded-lg shadow">
            <Info className="h-8 w-8 text-accent-3-light-blue mr-4 mt-1 shrink-0" />
            <p className="text-foreground leading-relaxed">{destination.practicalInfo}</p>
          </div>
      </Section>
      
      <Section title={`What People Say About ${destination.name}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>

    </div>
  );
}
