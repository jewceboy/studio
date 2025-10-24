'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, List } from 'lucide-react';
import NewsletterForm from '@/components/forms/newsletter-form';

// --- Header Component ---
function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-250 ease-out"
      animate={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        borderColor: isScrolled ? 'rgba(230, 234, 240, 1)' : 'rgba(230, 234, 240, 0)',
      }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="font-display text-xl font-bold">
          <motion.span animate={{ color: isScrolled ? '#1E1E1E' : '#FFFFFF' }}>
            MalagaTravelGuide
          </motion.span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {['Destinations', 'Hotels', 'Experiences', 'Blog'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-wider transition-colors" >
               <motion.span animate={{ color: isScrolled ? '#4E5661' : '#FFFFFF' }} className="hover:text-primary">
                {item}
               </motion.span>
            </Link>
          ))}
        </nav>
        <Link href="/plan-your-trip" passHref>
          <motion.button className="hidden md:block bg-primary text-white text-button-label px-m py-s rounded-2xl hover:bg-primary-dark transition-colors">
            Plan Your Trip
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
}

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
            <button className="bg-primary text-white text-button-label px-m py-s rounded-2xl hover:bg-primary-dark transition-colors">
              Plan Your Trip
            </button>
          </Link>
          <Link href="/destinations" passHref>
            <button className="bg-transparent border border-primary text-primary text-button-label px-m py-s rounded-2xl hover:bg-primary/10 transition-colors">
              Explore Destinations
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// --- Section Wrapper for Animations ---
function AnimatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// --- Luxury Experience Card ---
function LuxuryCard({ title }: { title: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-DEFAULT shadow-card p-m"
    >
      <div className="aspect-[4/3] w-full bg-gray-100 rounded-lg overflow-hidden">
        <Image src="https://placehold.co/600x400/F8FBFD/E6EAF0?text=Premium+Service" alt={title} width={600} height={400} className="w-full h-full object-cover"/>
      </div>
      <h3 className="font-sans text-h3 text-text-primary mt-s">{title}</h3>
    </motion.div>
  );
}

// --- Footer Component ---
function Footer() {
    return (
        <footer className="bg-[#00374D] text-white/90">
            <div className="container mx-auto py-l">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-l">
                    <div>
                        <h3 className="font-display text-xl font-bold mb-s">MalagaTravelGuide</h3>
                        <p className="text-body-s">Your ultimate guide to the Costa del Sol.</p>
                    </div>
                    <div>
                        <h4 className="font-sans text-button-label mb-s">About</h4>
                        <ul className="space-y-xs">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-sans text-button-label mb-s">Explore</h4>
                        <ul className="space-y-xs">
                            <li><Link href="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-sans text-button-label mb-s">Follow Us</h4>
                        <ul className="space-y-xs">
                            <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-l border-t border-white/20 pt-m text-center text-sm text-text-light">
                    © {new Date().getFullYear()} Malaga Travel Guide. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

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
            <Header />
            <main>
                <HeroSection />

                <AnimatedSection className="py-l bg-background-alt">
                    <div className="container mx-auto text-center">
                         <h4 className="font-sans text-button-label text-text-light mb-s">GET MY BEST TIPS SENT STRAIGHT TO YOU!</h4>
                         <NewsletterForm />
                    </div>
                </AnimatedSection>
                
                <AnimatedSection className="py-xl">
                    <div className="container mx-auto">
                        <h2 className="font-display text-h2 text-text-primary text-center">Plan Your Luxury Experience</h2>
                        <p className="font-sans text-body-l text-text-secondary text-center max-w-xl mx-auto mb-l">
                            Focusing on high-value services to create your perfect costa del sol journey
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-m">
                           <LuxuryCard title="Weddings & Luxury Events" />
                           <LuxuryCard title="Business & MICE Tourism" />
                           <LuxuryCard title="Luxury Accommodation & Hotels" />
                           <LuxuryCard title="Airport Transfers & VIP Transport" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="py-xl bg-background-alt">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-l items-center">
                        <div>
                            <Image src="https://placehold.co/800x600/E6EAF0/4E5661?text=About+Us" alt="About Us" width={800} height={600} className="rounded-lg shadow-lg w-full"/>
                        </div>
                        <div>
                            <h2 className="font-display text-h2 text-text-primary">About Malaga Travel Guide</h2>
                            <p className="font-sans text-body-l text-text-secondary mt-s">
                               Welcome! Every day we wake up with one goal in mind: “How can we help other people travel better for less?” Our mission is to help you realize your travel dreams by making you a smarter, more informed traveler.
                            </p>
                             <div className="mt-m">
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
                </AnimatedSection>
            </main>
            <Footer />
        </motion.div>
    );
}
