
import type { Metadata } from 'next';
import { Anton, Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { SpeedInsights } from "@vercel/speed-insights/next";

// This is the base metadata. Child pages will merge with this.
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

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// JSON-LD Schema Markup
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['TravelAgency', 'Organization'],
      'name': 'MalagaTravelGuide',
      'url': 'https://www.malagatravelguide.net',
      'logo': 'https://www.malagatravelguide.net/logo.png', // Placeholder URL
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+34-XXX-XXX-XXX', // Placeholder phone
        'contactType': 'Customer Service',
        'areaServed': 'ES',
        'availableLanguage': ['en', 'es']
      },
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Malaga',
        'addressCountry': 'ES'
      },
      'description': 'Your ultimate guide to exploring Malaga and the Costa del Sol. We provide expert advice on destinations, hotels, luxury travel, weddings, and business events.',
      'sameAs': [ // Add your social media profiles here
        'https://facebook.com/your-profile',
        'https://twitter.com/your-profile',
        'https://instagram.com/your-profile'
      ]
    },
    {
      '@type': 'WebSite',
      'url': 'https://www.malagatravelguide.net',
      'name': 'MalagaTravelGuide',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://www.malagatravelguide.net/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* Add JSON-LD to the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://picsum.photos" />
      </head>
      <body className={cn(
        'font-body antialiased min-h-screen flex flex-col bg-background',
        inter.variable,
        anton.variable,
        montserrat.variable
      )}>
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-4 pt-8">
            <Breadcrumbs />
          </div>
          {children}
        </main>
        <Footer />
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
