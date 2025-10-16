
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Image from 'next/image';
import imageData from '@/lib/placeholder-images.json';
import { allSiteUrls } from '@/lib/urls';
import { destinationsData } from '@/lib/data';

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
      {/* Marbella Hero Section */}
      <div className="relative h-[calc(100vh-80px)] min-h-[500px] md:min-h-[600px] flex items-center justify-center text-center -mt-8 -mx-4 sm:-mx-container-padding overflow-hidden">
        {/* Mobile Image */}
        <Image
          src={images['Marbella-panoramic-beach-luxury-mobile'].url}
          alt="Envision the stunning beauty of Marbella: sun-drenched coasts and luxurious lifestyle"
          width={600}
          height={800}
          className="absolute inset-0 z-0 object-cover w-full h-full sm:hidden"
          data-ai-hint={images['Marbella-panoramic-beach-luxury-mobile'].hint}
        />
        {/* Desktop Image */}
        <Image
          src={images['Marbella-panoramic-beach-luxury'].url}
          alt="Envision the stunning beauty of Marbella: sun-drenched coasts and luxurious lifestyle"
          width={1920}
          height={1080}
          priority
          className="absolute inset-0 z-0 object-cover w-full h-full hidden sm:block"
          data-ai-hint={images['Marbella-panoramic-beach-luxury'].hint}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Experience Marbella's Splendor
          </h1>
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Discover a world of golden beaches, azure waters, and vibrant luxury. Your unforgettable Marbella story begins now.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 font-montserrat font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/destinations/marbella">
              Explore Marbella <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
              buttonClassName="bg-accent text-white hover:bg-accent/90"
            />
          ))}
        </div>
      </Section>

      {/* New Features Teaser (Plan Your Trip) */}
      <Section title="Plan Your Perfect Trip" subtitle="Let our smart trip planner craft a personalized itinerary just for you." className="bg-secondary/10">
        <div className="text-center bg-accent/20 p-8 md:p-12 rounded-lg shadow-lg max-w-3xl mx-auto">
          <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="font-montserrat text-3xl font-bold text-primary-dark mb-4">
            Personalized Itineraries in Minutes
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Answer a few simple questions about your travel style, interests, and budget, and our AI-powered tool will create a custom trip plan tailored to your preferences.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 font-montserrat font-semibold">
            <Link href="/plan-your-trip">
              Start Planning <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Newsletter Sign-up Section */}
      <Section>
        <div>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
