
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function DesignerBoutiquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Shopping', href: '/shopping' },
    { label: 'Luxury Shopping', href: '/shopping/luxury-shopping' },
    { label: 'Designer Boutiques', href: '/shopping/luxury-shopping/designer-boutiques' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
