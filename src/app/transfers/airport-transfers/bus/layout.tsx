
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function BusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Transfers', href: '/transfers' },
    { label: 'Airport Transfers', href: '/transfers/airport-transfers' },
    { label: 'Bus', href: '/transfers/airport-transfers/bus' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
