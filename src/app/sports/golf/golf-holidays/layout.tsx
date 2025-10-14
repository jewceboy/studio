
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function GolfHolidaysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Sports', href: '/sports' },
    { label: 'Golf', href: '/sports/golf' },
    { label: 'Golf Holidays', href: '/sports/golf/golf-holidays' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
