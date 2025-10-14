
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function TapasBarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Restaurants', href: '/restaurants' },
    { label: 'Traditional Spanish', href: '/restaurants/traditional-spanish' },
    { label: 'Tapas Bars', href: '/restaurants/traditional-spanish/tapas-bars' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
