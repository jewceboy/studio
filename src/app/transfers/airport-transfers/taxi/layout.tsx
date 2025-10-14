
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function TaxiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Transfers', href: '/transfers' },
    { label: 'Airport Transfers', href: '/transfers/airport-transfers' },
    { label: 'Taxi', href: '/transfers/airport-transfers/taxi' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
