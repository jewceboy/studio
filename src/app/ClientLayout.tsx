
'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { cn } from '@/lib/utils';
import React from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const hideBreadcrumbs = ['blog', 'plan-your-trip', 'contact', 'chat-demo'].some(path => pathname.startsWith(`/${path}`));

  return (
    <main className={cn(!isHomePage && 'pt-16')}>
      {!isHomePage && !hideBreadcrumbs && (
        <div className="container mx-auto px-4 mt-8">
          <Breadcrumbs />
        </div>
      )}
      {pathname.startsWith('/blog/') && (
         <div className="container mx-auto px-4 mt-8">
            <Breadcrumbs />
         </div>
      )}
      {children}
    </main>
  );
}
