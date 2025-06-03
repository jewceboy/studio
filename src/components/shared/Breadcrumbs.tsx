
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn('mb-6 text-sm text-muted-foreground', className)}>
      <ol className="flex items-center space-x-1.5">
        <li>
          <Link href="/" className="hover:text-primary-dark transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-1.5">
            <ChevronRight className="h-4 w-4 shrink-0" />
            {index === items.length - 1 ? (
              <span className="font-medium text-primary-dark" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-primary-dark transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
