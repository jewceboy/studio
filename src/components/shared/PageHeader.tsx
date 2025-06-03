
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  children,
}: PageHeaderProps) {
  return (
    <div className={cn('mb-8 md:mb-12 text-center', className)}>
      <h1 className={cn('font-anton text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4', titleClassName)}>
        {title}
      </h1>
      {subtitle && (
        <p className={cn('text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto', subtitleClassName)}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
