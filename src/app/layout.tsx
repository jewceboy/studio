
import type { Metadata } from 'next';
import { Anton, Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import ExpandableChatDemo from './chat-demo/page'; // Import the chat demo component
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.costadelsolnavigator.com'),
  title: 'MalagaTravelGuide', // Updated site name
  description: 'Your ultimate guide to exploring Malaga and the Costa del Sol. Plan your trip with personalized recommendations, discover top destinations, hotels, and activities.',
  keywords: 'Malaga, Costa del Sol, travel guide, Spain, hotels, activities, trip planner',
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://picsum.photos" />
        <link
          rel="preload"
          as="style"
          href={`https://fonts.googleapis.com/css2?family=Anton&family=Inter&family=Montserrat&display=swap`}
        />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Anton&family=Inter&family=Montserrat&display=swap`}
        />
      </head>
      <body className={cn(
        'font-body antialiased min-h-screen flex flex-col bg-background',
        inter.variable,
        anton.variable,
        montserrat.variable
      )}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
        <Toaster />
        <ExpandableChatDemo /> {/* Add the chat demo component here */}
      </body>
    </html>
  );
}
