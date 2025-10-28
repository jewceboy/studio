
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Sun, Briefcase, Droplets, Heart, ShoppingCart, Calendar, Map, Plane, Sailboat, Users, Tv, Palette, Building, Utensils, Waves, MountainSnow, Star, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react';
import { motion } from 'framer-motion';

const primaryNavLinks = [
  { href: '/destinations', label: 'Destinations', icon: Map },
  { href: '/hotels', label: 'Hotels', icon: Building },
  { href: '/attractions', label: 'Attractions', icon: Star },
];

const luxuryServicesSubItems = [
  { href: '/weddings', title: 'Weddings & Events', description: 'Plan your dream wedding or luxury event.', icon: Heart },
  { href: '/business', title: 'Business & MICE', description: 'Host world-class corporate events.', icon: Briefcase },
  { href: '/wellness', title: 'Wellness & Medical', description: 'Discover premium wellness and medical services.', icon: Droplets },
];

const exploreSubItems = [
    { href: '/restaurants', title: 'Restaurants', description: 'From tapas bars to fine dining.', icon: Utensils },
    { href: '/beaches', title: 'Beaches', description: 'Explore sandy shores and beach clubs.', icon: Waves },
    { href: '/nightlife', title: 'Nightlife', description: 'Bars, clubs, and flamenco shows.', icon: Tv },
    { href: '/sports', title: 'Sports & Golf', description: 'Golf courses, tennis, and water sports.', icon: MountainSnow },
    { href: '/shopping', title: 'Shopping', description: 'From luxury brands to local markets.', icon: ShoppingCart },
    { href: '/events', title: 'Events', description: 'Find festivals and cultural happenings.', icon: Calendar },
    { href: '/travel-planning', title: 'Travel Planning', description: 'Itineraries, tips, and practical info.', icon: Map },
    { href: '/digital-nomad', title: 'Digital Nomad', description: 'Resources for remote work in the sun.', icon: Users },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
];


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname.includes('/chat-demo')) {
    return null;
  }
  
  return (
    <motion.header 
        className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            "bg-primary shadow-md text-primary-foreground"
        )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Sun className="h-7 w-7 text-white" />
          <span className="font-semibold text-lg font-montserrat text-white">MalagaTravelGuide</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
            <NavigationMenu>
            <NavigationMenuList>
                {primaryNavLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(
                            navigationMenuTriggerStyle(),
                            'bg-transparent font-montserrat font-medium text-sm text-primary-foreground',
                            'hover:bg-white/10 focus:bg-white/10',
                            pathname.startsWith(link.href) ? 'bg-white/20' : ''
                            )}>
                            {link.label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn('bg-transparent font-montserrat font-medium text-sm text-primary-foreground', 'hover:bg-white/10 focus:bg-white/10')}>
                        Luxury Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {luxuryServicesSubItems.map((item) => (
                            <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            >
                            {item.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn('bg-transparent font-montserrat font-medium text-sm text-primary-foreground', 'hover:bg-white/10 focus:bg-white/10')}>
                        Explore
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {exploreSubItems.map((item) => (
                            <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            >
                            {item.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/blog" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent font-montserrat font-medium text-sm text-primary-foreground', 'hover:bg-white/10 focus:bg-white/10', pathname.startsWith('/blog') ? 'bg-white/20' : '')}>
                        Blog
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent font-montserrat font-medium text-sm text-primary-foreground', 'hover:bg-white/10 focus:bg-white/10', pathname.startsWith('/contact') ? 'bg-white/20' : '')}>
                        Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

            </NavigationMenuList>
            </NavigationMenu>
             {/* Social Icons */}
            <div className="flex items-center space-x-3 pl-6 ml-4 border-l border-white/20">
                {socialLinks.map((social) => (
                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="opacity-80 hover:opacity-100 transition-opacity">
                    <social.icon className="h-5 w-5" />
                    </Link>
                ))}
            </div>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 focus:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background text-text-primary p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Sun className="h-7 w-7 text-primary" />
                  <span className="font-semibold text-lg font-montserrat">MalagaTravelGuide</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-secondary/10 focus:bg-secondary/10">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav aria-label="Main mobile navigation" className="flex flex-col space-y-2">
                {[...primaryNavLinks, {href: '/blog', label: 'Blog', icon: Palette}, {href: '/contact', label: 'Contact', icon: Users}].map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        'hover:text-primary transition-colors py-2 text-lg',
                        pathname.startsWith(link.href) ? 'font-bold text-primary' : 'font-semibold'
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                
                 <div className='flex flex-col space-y-2 pt-2'>
                    <span className='font-semibold text-lg py-2 border-t border-border'>Luxury Services</span>
                    {luxuryServicesSubItems.map((subItem) => (
                    <SheetClose key={subItem.href} asChild>
                        <Link
                        href={subItem.href}
                        className={cn('font-normal text-text-secondary hover:text-primary transition-colors py-1 text-md pl-4', pathname.startsWith(subItem.href) ? 'font-semibold text-primary' : '')}
                        >
                        {subItem.title}
                        </Link>
                    </SheetClose>
                    ))}
                </div>

                <div className='flex flex-col space-y-2 pt-2'>
                    <span className='font-semibold text-lg py-2 border-t border-border'>Explore</span>
                    {exploreSubItems.map((subItem) => (
                    <SheetClose key={subItem.href} asChild>
                        <Link
                        href={subItem.href}
                        className={cn('font-normal text-text-secondary hover:text-primary transition-colors py-1 text-md pl-4', pathname.startsWith(subItem.href) ? 'font-semibold text-primary' : '')}
                        >
                        {subItem.title}
                        </Link>
                    </SheetClose>
                    ))}
                </div>
              </nav>
              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center space-x-5 pt-8 mt-8 border-t border-border">
                {socialLinks.map((social) => (
                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-text-secondary hover:text-primary transition-colors">
                    <social.icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
