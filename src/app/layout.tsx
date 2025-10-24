import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/shared/Breadcrumbs';


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


export const metadata: Metadata = {
  metadataBase: new URL('https://www.malagatravelguide.net'),
  title: {
    default: 'Malaga Travel Guide | Your Ultimate Costa del Sol Resource',
    template: '%s | Malaga Travel Guide',
  },
  description: 'Your ultimate guide to exploring Malaga and the Costa del Sol. Plan your trip with personalized recommendations, discover top destinations, hotels, and activities.',
  keywords: 'Malaga, Costa del Sol, travel guide, Spain, hotels, activities, trip planner',
  openGraph: {
    title: 'Malaga Travel Guide | Your Ultimate Costa del Sol Resource',
    description: 'Your ultimate guide to exploring Malaga and the Costa del Sol.',
    url: 'https://www.malagatravelguide.net',
    siteName: 'Malaga Travel Guide',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malaga Travel Guide | Your Ultimate Costa del Sol Resource',
    description: 'Your ultimate guide to exploring Malaga and the Costa del Sol.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://picsum.photos" />
      </head>
      <body className="font-sans text-text-secondary bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 mt-8">
            <Breadcrumbs />
          </div>
          {children}
        </main>
        <Footer />
        <Toaster />
        <SpeedInsights />
        <Script src="/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
