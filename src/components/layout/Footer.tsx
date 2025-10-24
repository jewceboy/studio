'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';

const aboutLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/terms-conditions', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const planningLinks = [
    { href: '/plan-your-trip', label: 'Personalized Trip Planner'},
    { href: '/blog', label: 'Travel Blog' },
    { href: '/destinations', label: 'Destination Guides' },
    { href: '/travel-planning', label: 'Travel Planning' },
];

const topExperiencesLinks = [
    { href: '/hotels', label: 'Hotels in Malaga' },
    { href: '/restaurants', label: 'Malaga Restaurants Guide' },
    { href: '/attractions', label: 'Things to do in Malaga' },
    { href: '/beaches', label: 'Best Beaches near Malaga' },
    { href: '/nightlife', label: 'Malaga Nightlife Guide' },
    { href: '/shopping', label: 'Shopping in Malaga' },
];

const luxuryNicheLinks = [
    { href: '/weddings', label: 'Weddings Costa del Sol' },
    { href: '/business', label: 'Business Tourism Malaga' },
    { href: '/wellness', label: 'Wellness Costa del Sol' },
    { href: '/sports', label: 'Sports Tourism Costa del Sol' },
    { href: '/digital-nomad', label: 'Digital Nomad Malaga' },
];


const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
];


const FooterLinkColumn = ({ title, links }: { title: string, links: { href: string, label: string }[] }) => (
    <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-dotted border-white/50 pb-2 mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map((link) => (
            <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-white hover:underline transition-colors">
                {link.label}
                </Link>
            </li>
            ))}
        </ul>
    </div>
);


export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const pathname = usePathname();
    if (pathname.includes('/chat-demo')) {
        return null;
    }

  return (
    <footer className="bg-primary-dark text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            <FooterLinkColumn title="About & Info" links={aboutLinks} />
            <FooterLinkColumn title="Plan Your Trip" links={planningLinks} />
            <FooterLinkColumn title="Top Experiences" links={topExperiencesLinks} />
            <FooterLinkColumn title="Luxury & Niche" links={luxuryNicheLinks} />
            
            <div className="col-span-2 md:col-span-1">
                 <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-dotted border-white/50 pb-2 mb-4">Follow me on the web</h3>
                 <div className="flex space-x-4 mb-6">
                    {socialLinks.map((social) => (
                        <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-white/80 hover:text-white transition-colors">
                        <social.icon className="h-6 w-6" />
                        </Link>
                    ))}
                </div>

                <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b-2 border-dotted border-white/50 pb-2 mb-4">Search</h3>
                <form action="/search" method="get">
                    <Input 
                        type="search" 
                        name="q" 
                        placeholder="Search the site here..." 
                        className="bg-white/90 text-gray-800 placeholder:text-gray-500 border-none"
                    />
                </form>
            </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} MalagaTravelGuide. All rights reserved.</p>
        </div>

         <Button 
            onClick={scrollToTop}
            variant="default" 
            size="icon" 
            className="absolute bottom-5 right-5 bg-black/40 hover:bg-black/60"
            aria-label="Scroll to top"
        >
            <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
}
