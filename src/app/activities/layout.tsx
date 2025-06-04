
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function ActivitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Activities', href: '/activities' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
