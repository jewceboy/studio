

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import MarbellaHero from '@/components/custom/MarbellaHero'; // Import the new hero component

const featuredDestinations = [
  { title: 'Málaga', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Malaga City skyline', description: 'Vibrant culture, historic sites, and stunning beaches.', linkHref: '/destinations/malaga', imageHint: 'Malaga port' },
  { title: 'Marbella', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Marbella luxury port', description: 'Luxury boutiques, glamorous nightlife, and beautiful marinas.', linkHref: '/destinations/marbella', imageHint: 'Marbella yacht' },
  { title: 'Mijas Pueblo', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Mijas Pueblo white village', description: 'Charming white-washed village with breathtaking views.', linkHref: '/destinations/mijas', imageHint: 'Mijas village' },
  { title: 'Nerja', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Nerja Balcon de Europa', description: 'Famous caves, stunning coastline, and the Balcón de Europa.', linkHref: '/destinations/nerja', imageHint: 'Nerja coast' },
];

const topActivities = [
  { title: 'Caminito del Rey Hike', imageUrl: 'https://picsum.photos/seed/caminito/600/400', imageAlt: 'Caminito del Rey gorge walk', description: 'Thrilling cliffside path with spectacular views.', linkHref: '/activities/caminito-del-rey', imageHint: 'gorge hike' },
  { title: 'Picasso Museum Visit', imageUrl: 'https://picsum.photos/seed/picasso/600/400', imageAlt: 'Picasso Museum Malaga', description: 'Explore the works of the legendary artist in his birthplace.', linkHref: '/activities/picasso-museum', imageHint: 'art museum' },
  { title: 'Flamenco Show Experience', imageUrl: 'https://picsum.photos/seed/flamenco/600/400', imageAlt: 'Flamenco dancers', description: 'Immerse yourself in the passion of authentic Andalusian flamenco.', linkHref: '/activities/flamenco-show', imageHint: 'flamenco dance' },
];

const accommodationHighlights = [
  { title: 'Hotels in Málaga', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Luxury hotel in Malaga', linkHref: '/hotels/malaga', description: 'Find the perfect stay in the heart of the Costa del Sol.', imageHint: 'Malaga hotel' },
  { title: 'Hotels in Marbella', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Beachfront resort in Marbella', linkHref: '/hotels/marbella', description: 'Experience luxury and comfort in glamorous Marbella.', imageHint: 'Marbella resort' },
];

const topArticles = [
  { title: 'Best Tapas Bars in Málaga Old Town', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Spanish tapas selection', description: 'A culinary journey through Málaga\'s most authentic tapas spots.', linkHref: '/blog/best-tapas-malaga', imageHint: 'tapas food' },
  { title: 'Top 5 Hidden Beaches on the Costa del Sol', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Secluded beach cove', description: 'Discover tranquil coves and pristine sands away from the crowds.', linkHref: '/blog/hidden-beaches-costa-del-sol', imageHint: 'secluded beach' },
  { title: 'A Day Trip to Ronda: What to See and Do', imageUrl: 'https://placehold.co/600x400.png', imageAlt: 'Ronda bridge Puente Nuevo', description: 'Explore the dramatic landscapes and historic charm of Ronda.', linkHref: '/blog/day-trip-ronda', imageHint: 'Ronda bridge' },
];


export default function Home() {
  return (
    <>
      {/* New Marbella Hero Section */}
      <MarbellaHero />

      {/* Featured Destinations Section */}
      <Section title="Featured Destinations" subtitle="Explore the jewels of the Costa del Sol, each with its unique charm and attractions.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredDestinations.map((dest) => (
            <InfoCard 
              key={dest.title} 
              {...dest} 
              linkText="Explore" 
              imageHint={dest.imageHint}
              buttonClassName="bg-orange-500 text-white hover:bg-orange-600" // Apply orange button style
            />
          ))}
        </div>
      </Section>

      {/* Top Activities Section */}
      <Section title="Top Activities" subtitle="Dive into exciting adventures and cultural experiences that make Costa del Sol unforgettable." className="bg-secondary/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topActivities.map((activity) => (
            <InfoCard key={activity.title} {...activity} linkText="Learn More" imageHint={activity.imageHint}/>
          ))}
        </div>
      </Section>

      {/* Accommodation Highlights Section */}
      <Section title="Accommodation Highlights" subtitle="Find the perfect place to stay, from luxury resorts to charming boutique hotels.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {accommodationHighlights.map((acc) => (
            <InfoCard key={acc.title} {...acc} linkText="Explore Hotels" imageHint={acc.imageHint} />
          ))}
        </div>
      </Section>

      {/* "Don't Miss" Articles Section */}
      <Section title="Don't Miss Our Latest Articles" subtitle="Get insider tips, travel guides, and inspiration for your Costa del Sol journey." className="bg-secondary/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topArticles.map((article) => (
            <InfoCard key={article.title} {...article} linkText="Read Article" imageHint={article.imageHint} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent-1-red text-accent-1-red hover:bg-accent-1-red hover:text-primary-light font-montserrat font-medium">
            <Link href="/blog">
              View All Articles <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* New Features Teaser (Plan Your Trip) */}
      <Section title="Plan Your Perfect Trip" subtitle="Let our smart trip planner craft a personalized itinerary just for you.">
        <div className="text-center bg-accent-3-light-blue/20 p-8 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto">
          <Sparkles className="h-16 w-16 text-accent-1-red mx-auto mb-6" />
          <h3 className="font-montserrat text-3xl font-bold text-primary-dark mb-4">
            Personalized Itineraries in Minutes
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Answer a few simple questions about your travel style, interests, and budget, and our AI-powered tool will create a custom trip plan tailored to your preferences.
          </p>
          <Button asChild size="lg" className="bg-accent-1-red text-primary-light hover:bg-accent-1-red/90 text-lg px-10 py-7 font-montserrat font-semibold">
            <Link href="/plan-your-trip">
              Start Planning <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Newsletter Sign-up Section */}
      <Section>
        <NewsletterForm />
      </Section>
    </>
  );
}
