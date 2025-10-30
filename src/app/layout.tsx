
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';
import { openSans, playfairDisplay, montserrat } from './fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientLayout from './ClientLayout';


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
    <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable} ${montserrat.variable}`} suppressHydrationWarning>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://picsum.photos" />
      </head>
      <body className="font-sans text-text-secondary bg-background">
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <Toaster />
        <SpeedInsights />
        <Script src="/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
