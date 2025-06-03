
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
    <Component className={cn('py-12 md:py-16 lg:py-20', className)}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className={cn('text-3xl md:text-4xl font-montserrat font-bold text-primary-dark mb-4 text-center', titleClassName)}>
            {title}
          </h2>
        )}
        {subtitle && (
           <p className={cn('text-lg text-muted-foreground mb-8 md:mb-12 text-center max-w-2xl mx-auto', subtitleClassName)}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </Component>
  );
}
