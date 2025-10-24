// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const aboutLinks = [
  { href: '/blog/mystory-about-us', label: 'About' },
  { href: '/contact', label: 'Contact Me' },
  { href: '/terms-conditions', label: 'Terms of Use' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const travelTipsLinks = [
    { href: '/plan-your-trip', label: 'Start Here'},
    { href: '/blog', label: 'Travel Blog' },
    { href: '/destinations', label: 'Destination Guides' },
    { href: '/hotels/budget-hotels-malaga/hostels', label: 'Favorite Hostels' },
    { href: '/hotels', label: 'Favorite Hotels' },
    // These are placeholders as direct pages might not exist
    { href: '/destinations', label: 'Favorite Neighborhoods' },
    { href: '/attractions/malaga-city/walking-tours', label: 'Favorite Walking Tours' },
];

const bookTripLinks = [
    { href: '/hotels', label: 'Get Accommodation' },
    { href: '/travel-planning/budget-travel/cheap-flights', label: 'Get Flights' },
    { href: '/wellness/medical-tourism', label: 'Get Travel Insurance' }, // Placeholder
    { href: '#', label: 'Get Travel Credit Cards' }, // Placeholder
    { href: '#', label: 'My Favorite Companies' }, // Placeholder
];

const booksCoursesLinks = [
    { href: '/blog', label: 'Ten Years a Nomad' }, // Placeholder
    { href: '/blog', label: 'How To Travel The World' }, // Placeholder
    { href: '/destinations', label: 'Destination Guidebooks' }, // Placeholder
    { href: '/blog', label: 'Blogging Mentorship' }, // Placeholder
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

  return (
    <footer className="bg-primary-dark text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
            <FooterLinkColumn title="About Us" links={aboutLinks} />
            <FooterLinkColumn title="Travel Tips" links={travelTipsLinks} />
            <FooterLinkColumn title="Book Your Trip" links={bookTripLinks} />
            <FooterLinkColumn title="Books and Courses" links={booksCoursesLinks} />
            
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
