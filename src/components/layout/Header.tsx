'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Sun, Briefcase, Droplets, Heart, ShoppingCart, Calendar, Map, Plane, Sailboat, Users, Tv, Palette, Building, Utensils, Waves, MountainSnow, Star } from 'lucide-react';
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


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-accent-1-red text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors">
          <Sun className="h-8 w-8" />
          <span className="font-montserrat font-bold text-xl">MalagaTravelGuide</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {primaryNavLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(
                        navigationMenuTriggerStyle(),
                        'font-montserrat font-medium text-white bg-transparent hover:bg-white/10 focus:bg-white/10 data-[active]:bg-white/10',
                        pathname.startsWith(link.href) ? 'bg-white/10' : ''
                        )}>
                        {link.label}
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
                <NavigationMenuTrigger className="font-montserrat font-medium text-white bg-transparent hover:bg-white/10 focus:bg-white/10 data-[active]:bg-white/10 data-[state=open]:bg-white/10">
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
                <NavigationMenuTrigger className="font-montserrat font-medium text-white bg-transparent hover:bg-white/10 focus:bg-white/10 data-[active]:bg-white/10 data-[state=open]:bg-white/10">
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
                    <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    'font-montserrat font-medium text-white bg-transparent hover:bg-white/10 focus:bg-white/10 data-[active]:bg-white/10',
                    pathname.startsWith('/blog') ? 'bg-white/10' : ''
                    )}>
                    Blog
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    'font-montserrat font-medium text-white bg-transparent hover:bg-white/10 focus:bg-white/10 data-[active]:bg-white/10',
                    pathname.startsWith('/contact') ? 'bg-white/10' : ''
                    )}>
                    Contact
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-accent-1-red text-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center space-x-2 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                  <Sun className="h-7 w-7" />
                  <span className="font-montserrat font-bold text-lg">MalagaTravelGuide</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
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
                        'font-montserrat font-medium text-white hover:text-white/80 transition-colors py-2 text-lg',
                        pathname.startsWith(link.href) ? 'font-bold' : ''
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                
                <div className='flex flex-col space-y-2 pt-2'>
                    <span className='font-montserrat font-semibold text-white text-lg py-2 border-t border-white/20'>Luxury Services</span>
                     {luxuryServicesSubItems.map((subItem) => (
                      <SheetClose key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          className={cn('font-montserrat font-normal text-white hover:text-white/80 transition-colors py-1 text-md pl-4', pathname.startsWith(subItem.href) ? 'font-semibold' : '')}
                        >
                          {subItem.title}
                        </Link>
                      </SheetClose>
                     ))}
                </div>

                <div className='flex flex-col space-y-2 pt-2'>
                    <span className='font-montserrat font-semibold text-white text-lg py-2 border-t border-white/20'>Explore</span>
                     {exploreSubItems.map((subItem) => (
                      <SheetClose key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          className={cn('font-montserrat font-normal text-white hover:text-white/80 transition-colors py-1 text-md pl-4', pathname.startsWith(subItem.href) ? 'font-semibold' : '')}
                        >
                          {subItem.title}
                        </Link>
                      </SheetClose>
                     ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
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
  )
})
ListItem.displayName = "ListItem"
