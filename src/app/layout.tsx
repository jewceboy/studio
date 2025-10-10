
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import ExpandableChatDemo from './chat-demo/page'; // Import the chat demo component
import { Anton, Inter, Montserrat } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  variable: '--font-anton',
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'MalagaTravelGuide', // Updated site name
  description: 'Your ultimate guide to exploring Malaga and the Costa del Sol. Plan your trip with personalized recommendations, discover top destinations, hotels, and activities.',
  keywords: 'Malaga, Costa del Sol, travel guide, Spain, hotels, activities, trip planner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'font-body antialiased min-h-screen flex flex-col bg-background',
        anton.variable, 
        inter.variable, 
        montserrat.variable
      )}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
        <ExpandableChatDemo /> {/* Add the chat demo component here */}
      </body>
    </html>
  );
}
