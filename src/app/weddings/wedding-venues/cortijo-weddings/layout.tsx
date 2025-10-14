
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function CortijoWeddingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Weddings', href: '/weddings' },
    { label: 'Wedding Venues', href: '/weddings/wedding-venues' },
    { label: 'Cortijo Weddings', href: '/weddings/wedding-venues/cortijo-weddings' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
