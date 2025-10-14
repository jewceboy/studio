
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function TravelAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Travel Planning', href: '/travel-planning' },
    { label: 'Tourist Information', href: '/travel-planning/tourist-info' },
    { label: 'Travel App', href: '/travel-planning/tourist-info/travel-app' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
