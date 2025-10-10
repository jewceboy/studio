
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import ExpandableChatDemo from './chat-demo/page'; // Import the chat demo component

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://picsum.photos" />
      </head>
      <body className={cn(
        'font-body antialiased min-h-screen flex flex-col bg-background',
        'font-inter' // Fallback font class
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
