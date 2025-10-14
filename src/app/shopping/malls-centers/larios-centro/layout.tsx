
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function LariosCentroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Shopping', href: '/shopping' },
    { label: 'Shopping Malls', href: '/shopping/malls-centers' },
    { label: 'Larios Centro', href: '/shopping/malls-centers/larios-centro' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
