
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function SeasonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Travel Planning', href: '/travel-planning' },
    { label: 'When to Visit', href: '/travel-planning/when-to-visit' },
    { label: 'Seasons', href: '/travel-planning/when-to-visit/seasons' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
