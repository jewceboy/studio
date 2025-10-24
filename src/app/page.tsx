
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { ArrowRight, BookOpen, Sparkles, Map, Star, PenSquare, Mail } from 'lucide-react';
import Image from 'next/image';
import imageData from '@/lib/placeholder-images.json';
import { allSiteUrls } from '@/lib/urls';
import { destinationsData } from '@/lib/data';
import ClientOnly from '@/components/shared/ClientOnly';

const topMoneyPages = [
    {
      title: 'Weddings & Luxury Events',
      description: 'Discover exclusive venues and bespoke planning for your dream wedding in Costa del Sol.',
      linkHref: '/weddings',
      imageKey: 'luxury-wedding',
    },
    {
      title: 'Business & MICE Tourism',
      description: 'Host exceptional corporate events, conferences, and retreats in world-class facilities.',
      linkHref: '/business',
      imageKey: 'corporate-event',
    },
    {
      title: 'Wellness & Medical Tourism',
      description: 'Access premium wellness retreats, spa services, and leading medical facilities.',
      linkHref: '/wellness',
      imageKey: 'wellness-spa',
    },
    {
      title: 'Luxury Accommodation & Hotels',
      description: 'Explore a curated selection of the finest luxury hotels and 5-star resorts.',
      linkHref: '/hotels',
      imageKey: 'luxury-hotel',
    },
    {
      title: 'Airport Transfers & VIP Transport',
      description: 'Arrange seamless and private transportation, from airport transfers to VIP travel.',
      linkHref: '/transfers',
      imageKey: 'vip-transport',
    },
];

const contentPillars = [
  {
    title: 'Destinations',
    description: 'Explore the charming towns and vibrant cities of the Costa del Sol.',
    linkHref: '/destinations',
    imageKey: 'mijas-pueblo-village',
    icon: Map,
  },
  {
    title: 'Attractions',
    description: 'Discover the best attractions, from historic sites to family fun.',
    linkHref: '/attractions',
    imageKey: 'malaga-city-skyline',
    icon: Star,
  },
  {
    title: 'Travel Blog',
    description: 'Get insider tips, guides, and stories from our local experts.',
    linkHref: '/blog',
    imageKey: 'tapas-food-variety',
    icon: PenSquare,
  },
];


type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
  };
};

const images: ImageData = imageData;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative -mx-4 -mt-8 sm:-mx-container-padding">
        <Image
          src={images['travel-hero-background'].url}
          alt="A beautiful travel landscape representing the Costa del Sol"
          fill
          priority
          className="object-cover"
          data-ai-hint={images['travel-hero-background'].hint}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto text-center py-12 md:py-20">
            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-accent-1-red mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Your Costa del Sol Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl text-white max-w-xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              The ultimate travel guide for independent and luxury travelers. Personalized recommendations, destinations, hotels, and activities.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-1-red hover:bg-accent-1-red-hover text-primary-foreground">
                <Link href="/plan-your-trip">
                  Plan Your Trip <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/90 text-primary-dark border-gray-300 hover:bg-white">
                <Link href="/destinations">
                  Explore Destinations
                </Link>
              </Button>
            </div>
        </div>
      </div>
      
      {/* High-Value Money Pages Section */}
      <Section title="Plan Your Luxury Experience" subtitle="Focusing on high-value services to create your perfect Costa del Sol journey.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topMoneyPages.map((page) => (
            <InfoCard 
              key={page.title} 
              title={page.title}
              linkHref={page.linkHref}
              imageUrl={images[page.imageKey].url}
              imageHint={images[page.imageKey].hint}
              imageAlt={page.title}
              variant="overlay"
            />
          ))}
        </div>
      </Section>
      
      {/* Content Pillars Section */}
      <Section title="Explore the Costa del Sol" subtitle="From stunning destinations to insider tips, start your journey here.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {contentPillars.map((page) => (
            <InfoCard 
              key={page.title} 
              title={page.title}
              linkHref={page.linkHref}
              imageUrl={images[page.imageKey].url}
              imageHint={images[page.imageKey].hint}
              imageAlt={page.title}
              variant="overlay"
            />
          ))}
        </div>
      </Section>

      {/* Newsletter Form Section */}
      <div className="bg-newsletter-blue py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ClientOnly>
            <NewsletterForm />
          </ClientOnly>
        </div>
      </div>
    </>
  );
}
