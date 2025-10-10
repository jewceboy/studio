
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Sun } from 'lucide-react'; 
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

  return (
    <header className="bg-accent-1-red text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors">
          <Sun className="h-8 w-8" />
          <span className="font-montserrat font-bold text-xl">MalagaTravelGuide</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-montserrat font-medium text-white hover:text-white/90 transition-colors pb-1',
                pathname.startsWith(link.href) ? 'border-b-2 border-white text-white' : 'border-b-2 border-transparent'
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
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-accent-1-red text-white p-6">
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
              <nav aria-label="Main mobile navigation" className="flex flex-col space-y-4">
                {navLinks.map((link) => (
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
