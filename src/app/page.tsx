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
      <div className="relative bg-secondary/30 -mx-4 -mt-8 sm:-mx-container-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 md:py-20">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Your Costa del Sol Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              The ultimate travel guide for independent and luxury travelers. Personalized recommendations, destinations, hotels, and activities.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/plan-your-trip">
                  Plan Your Trip <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/destinations">
                  Explore Destinations
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-xl">
             <Image
              src={images['Marbella-panoramic-beach-luxury'].url}
              alt="Panoramic view of a luxury beach in Marbella"
              fill
              priority
              className="object-cover"
              data-ai-hint={images['Marbella-panoramic-beach-luxury'].hint}
            />
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
              description={page.description}
              linkHref={page.linkHref}
              imageUrl={images[page.imageKey].url}
              imageHint={images[page.imageKey].hint}
              imageAlt={page.title}
              linkText="Explore" 
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
              description={page.description}
              linkHref={page.linkHref}
              imageUrl={images[page.imageKey].url}
              imageHint={images[page.imageKey].hint}
              imageAlt={page.title}
              linkText="Discover" 
            />
          ))}
        </div>
      </Section>

      {/* New Features Teaser (Plan Your Trip) */}
      <Section title="Plan Your Perfect Trip" subtitle="Let our smart trip planner craft a personalized itinerary just for you." className="bg-secondary/30">
        <div className="text-center bg-background p-8 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto">
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-primary-dark mb-4">
            Personalized Itineraries in Minutes
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Answer a few simple questions about your travel style, interests, and budget, and our AI-powered tool will create a custom trip plan tailored to your preferences.
          </p>
          <Button asChild size="lg">
            <Link href="/plan-your-trip">
              Start Planning <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Newsletter Form Section */}
      <Section title="Stay in the Know" subtitle="Subscribe to our newsletter for the latest travel tips and exclusive deals.">
        <ClientOnly>
          <NewsletterForm />
        </ClientOnly>
      </Section>
    </>
  );
}
