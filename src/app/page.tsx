
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import NewsletterForm from '@/components/forms/NewsletterForm';
import { ArrowRight, BookOpen, Sparkles, Map, Star, PenSquare, Mail, List } from 'lucide-react';
import Image from 'next/image';
import imageData from '@/lib/placeholder-images.json';
import { allSiteUrls } from '@/lib/urls';
import { destinationsData } from '@/lib/data';
import ClientOnly from '@/components/shared/ClientOnly';
import SectionDivider from '@/components/shared/SectionDivider';

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

const topArticles = [
  { href: '/travel-planning/budget-travel/cheap-flights', text: 'How to Find Cheap Flights' },
  { href: '/hotels/budget-hotels-malaga', text: 'How to Find Cheap Accommodation' },
  { href: '/blog/best-tapas-malaga', text: 'Best Tapas Bars in Malaga' },
  { href: '/travel-planning/itineraries', text: '16 Steps for Planning a Trip' },
  { href: '/blog/andalusian-white-villages', text: 'Exploring the White Villages' },
  { href: '/travel-planning/when-to-visit/weather', text: 'Malaga Weather Guide' },
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
      <div className="relative w-full h-[70vh] min-h-[500px] flex flex-col -mt-8">
        <div className="relative w-full flex-grow">
          <Image
            src={images['travel-hero-background'].url}
            alt="A beautiful travel landscape representing the Costa del Sol"
            fill
            priority
            className="object-cover"
            data-ai-hint={images['travel-hero-background'].hint}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl text-primary mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
              Your Costa del Sol Journey Starts Here
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              The ultimate travel guide for independent and luxury travelers. Personalized recommendations, destinations, hotels, and activities.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
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
        {/* Newsletter Form Section */}
        <div className="bg-newsletter-blue py-6">
          <div className="container mx-auto px-4">
            <ClientOnly>
              <NewsletterForm />
            </ClientOnly>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4'>
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
        <SectionDivider />
      </div>

      {/* Content Pillars Section */}
      <div className="bg-secondary/20">
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
      </div>

       {/* About Section */}
       <div className="bg-secondary/20 w-full">
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
                    {/* Left Column */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold font-montserrat text-primary-dark mb-4">About Malaga Travel Guide</h2>
                        <div className="relative aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                            <Image
                                src={images['about-me-image'].url}
                                alt="Founder of Malaga Travel Guide"
                                fill
                                className="object-cover"
                                data-ai-hint={images['about-me-image'].hint}
                            />
                        </div>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Welcome! Every day we wake up with one goal in mind: “How can we help other people travel better for less?” Our mission is to help you realize your travel dreams by making you a smarter, more informed traveler.
                            </p>
                            <p>
                                Since 2024, we've helped countless travelers save money, travel more, and have a more authentic experience in the Costa del Sol. Everything we teach you here, we do ourselves! You will get the tips, tricks, and tools you need to have the trip of your dreams — without breaking the bank!
                            </p>
                            <Button asChild variant="link" className="px-0 text-primary hover:text-primary/80">
                                <Link href="/blog/mystory-about-us">
                                    Learn more about our story <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-card p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold font-montserrat text-primary-dark mb-4 flex items-center">
                            <List className="mr-2 h-5 w-5" />
                            Top Articles
                        </h3>
                        <ul className="space-y-3">
                            {topArticles.map((article) => (
                                <li key={article.href}>
                                    <Link href={article.href} className="text-muted-foreground hover:text-primary hover:underline transition-colors flex items-start">
                                        <ArrowRight className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary/70" />
                                        <span>{article.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    </>
  );
}
