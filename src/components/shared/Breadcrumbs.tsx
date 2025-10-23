
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import Script from 'next/script';

interface BreadcrumbsProps {
  className?: string;
  homeLabel?: string;
}

const formatBreadcrumbLabel = (segment: string): string => {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

export default function Breadcrumbs({ className, homeLabel = 'Home' }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  if (!pathname || pathname === '/') {
    return null;
  }

  const pathSegments = pathname.split('/').filter(segment => segment);
  
  const topLevelPagesToHideOn = ['blog', 'plan-your-trip', 'contact'];
  if (pathSegments.length <= 1 && topLevelPagesToHideOn.includes(pathSegments[0])) {
      return null;
  }
  
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    return {
      name: formatBreadcrumbLabel(segment),
      href: href,
      isLast: index === pathSegments.length - 1,
    };
  });
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeLabel,
        item: `https://www.costadelsolnavigator.com`, // Replace with your actual domain
      },
      ...breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: (pathSegments[0] === 'blog' && breadcrumb.isLast && pathSegments.length > 1) ? 'Article' : breadcrumb.name,
        item: `https://www.costadelsolnavigator.com${breadcrumb.href}`,
      })),
    ],
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className={cn('mb-6 text-sm text-muted-foreground', className)}>
        <ol className="flex items-center space-x-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-primary-dark transition-colors">
              {homeLabel}
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => {
            if (pathSegments[0] === 'plan-your-trip' && breadcrumb.name.toLowerCase() === 'results') {
                return null;
            }
            
            const label = (pathSegments[0] === 'blog' && breadcrumb.isLast && pathSegments.length > 1) ? 'Article' : breadcrumb.name;

            return (
              <li key={breadcrumb.href} className="flex items-center space-x-1.5">
                <ChevronRight className="h-4 w-4 shrink-0" />
                {breadcrumb.isLast ? (
                  <span className="font-medium text-primary-dark" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link href={breadcrumb.href} className="hover:text-primary-dark transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
