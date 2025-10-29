
'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, List } from 'lucide-react';
import { NewsletterForm } from '@/components/forms/newsletter-form';
import { allSiteUrls } from '@/lib/urls';
import Section from '@/components/shared/Section';
import InfoCard from '@/components/shared/InfoCard';
import imageData from '@/lib/placeholder-images.json';


type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
    width: number;
    height: number;
  };
};
const images: ImageData = imageData;


// --- Hero Section ---
function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/4434250/4434250-hd_1920_1080_25fps.mp4"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <motion.div style={{ y }} className="relative z-20 p-4">
        <motion.h1
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-h1 text-white"
          style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
        >
          Your Costa del Sol Journey Starts Here
        </motion.h1>
        <motion.p
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-sans text-body-l text-white/90 max-w-2xl mx-auto mt-s"
        >
          The ultimate travel guide for independent and luxury travelers. Personalized recommendations, destinations, hotels, and more.
        </motion.p>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-m flex flex-wrap gap-s justify-center"
        >
          <Link href="/plan-your-trip" passHref>
            <motion.button className="bg-primary text-white text-button-label px-m py-s rounded-2xl hover:bg-primary-dark transition-colors">
              Plan Your Trip
            </motion.button>
          </Link>
          <Link href="/destinations" passHref>
            <motion.button className="bg-transparent border border-primary text-primary text-button-label px-m py-s rounded-2xl hover:bg-primary/10 transition-colors">
              Explore Destinations
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}


const luxuryExperiences = [
    {
        slug: 'weddings',
        name: 'Weddings & Luxury Events',
        imageKey: 'luxury-wedding',
    },
    {
        slug: 'business',
        name: 'Business & MICE Tourism',
        imageKey: 'corporate-event',
    },
     {
        slug: 'wellness',
        name: 'Wellness & Medical Tourism',
        imageKey: 'wellness-spa',
    },
    {
        slug: 'hotels',
        name: 'Luxury Accommodation & Hotels',
        imageKey: 'luxury-hotel',
    },
    {
        slug: 'transfers',
        name: 'Airport Transfers & VIP Transport',
        imageKey: 'vip-transport',
    }
]

const exploreCategories = [
    { title: "Destinations", href: "/destinations", imageKey: "mijas-pueblo-village" },
    { title: "Attractions", href: "/attractions", imageKey: "malaga-city-skyline" },
    { title: "Restaurants", href: "/restaurants", imageKey: "tapas-food-variety" },
    { title: "Beaches", href: "/beaches", imageKey: "secluded-cove-beach" },
    { title: "Nightlife", href: "/nightlife", imageKey: "rooftop-bar-malaga" },
    { title: "Sports & Golf", href: "/sports", imageKey: "golf-course-green" },
];


const topArticles = [
  { href: '/travel-planning/budget-travel/cheap-flights', text: 'How to Find Cheap Flights' },
  { href: '/hotels/budget-hotels-malaga', text: 'How to Find Cheap Accommodation' },
  { href: '/blog/best-tapas-malaga', text: 'Best Tapas Bars in Malaga' },
  { href: '/travel-planning/itineraries', text: '16 Steps for Planning a Trip' },
  { href: '/blog/andalusian-white-villages', text: 'Exploring the White Villages' },
  { href: '/travel-planning/when-to-visit/weather', text: 'Malaga Weather Guide' },
];

// --- Main Homepage Component ---
export default function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <HeroSection />
            
            <div className='bg-newsletter-blue'>
              <Section className="py-12">
                  <div className="container mx-auto text-center">
                      <NewsletterForm />
                  </div>
              </Section>
            </div>
            
            <div>
                <Section className="py-xl">
                    <h2 className="font-display text-h2 text-text-primary text-center">Plan Your Luxury Experience</h2>
                    <p className="font-sans text-body-l text-text-secondary text-center max-w-xl mx-auto mb-l">
                        Focusing on high-value services to create your perfect costa del sol journey
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-m">
                        {luxuryExperiences.map(exp => (
                            <InfoCard
                                key={exp.slug}
                                title={exp.name}
                                imageUrl={images[exp.imageKey]?.url}
                                imageWidth={images[exp.imageKey]?.width}
                                imageHeight={images[exp.imageKey]?.height}
                                imageAlt={exp.name}
                                imageHint={images[exp.imageKey]?.hint}
                                linkHref={`/${exp.slug}`}
                            />
                        ))}
                    </div>
                </Section>
            </div>
            <Section className="py-xl bg-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-l items-center">
                    <div className="md:col-span-2">
                        <h2 className="font-display text-h2 text-text-primary">About Malaga Travel Guide</h2>
                        <Image src="https://picsum.photos/seed/about-us-image/800/500" alt="About Us" width={800} height={500} className="rounded-lg shadow-lg w-full my-m"/>
                        <p className="font-sans text-body-l text-text-secondary">
                            Welcome! Every day we wake up with one goal in mind: “How can we help other people travel better for less?” Our mission is to help you realize your travel dreams by making you a smarter, more informed traveler.
                        </p>
                        <p className='mt-s font-sans text-body-l text-text-secondary'>Read more about <Link href="/blog/mystory-about-us" className='text-primary hover:underline'>my story and why I started this website.</Link></p>
                    </div>
                    <div>
                        <div className="bg-background p-m rounded-lg shadow-card">
                            <h4 className="font-sans text-h4 text-text-primary mb-s flex items-center"><List className="mr-2"/>Top Articles</h4>
                            <ul className="space-y-xs">
                              {topArticles.map(article => (
                                <li key={article.href}>
                                    <Link href={article.href} className="flex items-center text-text-secondary hover:text-primary transition-colors">
                                      <ArrowRight className="h-4 w-4 mr-2 text-primary/70 shrink-0"/>
                                      <span>{article.text}</span>
                                    </Link>
                                </li>
                              ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="py-xl">
                 <h2 className="font-display text-h2 text-text-primary text-center">Explore the Costa del Sol</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-m mt-l">
                     {exploreCategories.map(cat => (
                            <InfoCard
                                key={cat.href}
                                title={cat.title}
                                imageUrl={images[cat.imageKey]?.url}
                                imageWidth={images[cat.imageKey]?.width}
                                imageHeight={images[cat.imageKey]?.height}
                                imageAlt={cat.title}
                                imageHint={images[cat.imageKey]?.hint}
                                linkHref={cat.href}
                            />
                        ))}
                </div>
            </Section>
        </motion.div>
    );
}
