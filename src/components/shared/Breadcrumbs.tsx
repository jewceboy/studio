
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface BreadcrumbsProps {
  className?: string;
  homeLabel?: string;
}

// Function to format the breadcrumb label
const formatBreadcrumbLabel = (segment: string): string => {
  return segment
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
};

export default function Breadcrumbs({ className, homeLabel = 'Home' }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  if (!pathname || pathname === '/') {
    return null;
  }

  const pathSegments = pathname.split('/').filter(segment => segment);
  
  // Don't show breadcrumbs for top-level pages that are also in nav, or for blog/results pages with no hierarchy
  const topLevelPagesToHideOn = ['blog', 'plan-your-trip', 'contact'];
  if (pathSegments.length <= 1 && topLevelPagesToHideOn.includes(pathSegments[0])) {
      return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn('mb-6 text-sm text-muted-foreground', className)}>
      <ol className="flex items-center space-x-1.5 flex-wrap">
        <li>
          <Link href="/" className="hover:text-primary-dark transition-colors">
            {homeLabel}
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          const label = formatBreadcrumbLabel(segment);

          // Skip breadcrumb for results page under plan-your-trip
          if (pathSegments[0] === 'plan-your-trip' && segment === 'results') {
              return null;
          }
          // Skip slug for blog posts
          if (pathSegments[0] === 'blog' && isLast && pathSegments.length > 1) {
            return (
              <React.Fragment key={href}>
                 <li className="flex items-center space-x-1.5">
                    <ChevronRight className="h-4 w-4 shrink-0" />
                    <span className="font-medium text-primary-dark" aria-current="page">
                        Article
                    </span>
                </li>
              </React.Fragment>
            );
          }


          return (
            <li key={href} className="flex items-center space-x-1.5">
              <ChevronRight className="h-4 w-4 shrink-0" />
              {isLast ? (
                <span className="font-medium text-primary-dark" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-primary-dark transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
