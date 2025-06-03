
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Sun } from 'lucide-react'; // Using Sun as placeholder for logo
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/hotels', label: 'Hotels' },
  { href: '/activities', label: 'Activities' },
  { href: '/plan-your-trip', label: 'Plan Your Trip' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; 
  }

  return (
    <header className="bg-primary-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-primary-dark hover:text-accent-1-red transition-colors">
          <Sun className="h-8 w-8" />
          <span className="font-montserrat font-bold text-xl">Costa del Sol Navigator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-montserrat font-medium text-primary-dark hover:text-accent-1-red transition-colors pb-1',
                pathname.startsWith(link.href) ? 'border-b-2 border-accent-1-red text-accent-1-red' : 'border-b-2 border-transparent'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-dark hover:bg-primary-light/80">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-primary-light p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center space-x-2 text-primary-dark" onClick={() => setIsMobileMenuOpen(false)}>
                  <Sun className="h-7 w-7" />
                  <span className="font-montserrat font-bold text-lg">Costa del Sol Navigator</span>
                </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="text-primary-dark hover:bg-primary-light/80">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        'font-montserrat font-medium text-primary-dark hover:text-accent-1-red transition-colors py-2 text-lg',
                         pathname.startsWith(link.href) ? 'text-accent-1-red' : ''
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
