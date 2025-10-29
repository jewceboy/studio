import { Inter, Open_Sans, Marcellus, Montserrat } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const marcellus = Marcellus({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus',
  weight: ['400'],
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
});
