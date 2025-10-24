'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      <Header />
      <main className={cn(!isHomePage && 'pt-20')}>
        {!isHomePage && (
          <div className="container mx-auto px-4 mt-8">
            <Breadcrumbs />
          </div>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
}
