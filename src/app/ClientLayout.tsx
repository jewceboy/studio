
'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import FocusOverlay from '@/components/shared/FocusOverlay';
import { FocusContext } from '@/hooks/use-focus';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const hideBreadcrumbs = ['blog', 'plan-your-trip', 'contact'].some(path => pathname.startsWith(`/${path}`));
  const [isFocus, setIsFocus] = useState(false);

  return (
    <FocusContext.Provider value={{ isFocus, setIsFocus }}>
        <FocusOverlay isVisible={isFocus} />
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
    </FocusContext.Provider>
  );
}
