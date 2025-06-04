
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-conditions', label: 'Terms & Conditions' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">MalagaTravelGuide</h3>
            <p className="text-sm text-primary-light/80">
              Your ultimate guide to Malaga and the Costa del Sol. Discover, plan, and explore with us.
            </p>
          </div>
          <div>
            <h4 className="font-montserrat font-semibold text-md mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-light/80 hover:text-primary-light hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-montserrat font-semibold text-md mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-primary-light/80 hover:text-primary-light transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="font-montserrat font-semibold text-sm mb-2">Our Partners:</h5>
              <div className="flex space-x-4 items-center">
                {/* Placeholder for partner logos - ensure T&Cs allow usage */}
                <span className="text-xs">Booking.com</span>
                <span className="text-xs">GetYourGuide</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-light/20 pt-8 text-center text-sm text-primary-light/60">
          <p>&copy; {new Date().getFullYear()} MalagaTravelGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
