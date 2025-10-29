import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Section({
  children,
  className,
  title,
  titleClassName,
  subtitle,
  subtitleClassName,
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component className={cn('py-xl', className)}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className={cn('text-h2 font-bold mb-m text-center', titleClassName)}>
            {title}
          </h2>
        )}
        {subtitle && (
           <p className={cn('text-lg text-muted-foreground mb-l text-center max-w-2xl mx-auto', subtitleClassName)}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </Component>
  );
}
