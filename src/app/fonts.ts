import { Inter, Playfair_Display, Anton, Montserrat } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

export const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
  weight: ['400'],
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
