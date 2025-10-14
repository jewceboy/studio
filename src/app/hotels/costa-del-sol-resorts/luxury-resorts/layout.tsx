
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function LuxuryResortsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Costa del Sol Resorts', href: '/hotels/costa-del-sol-resorts' },
    { label: 'Luxury Resorts', href: '/hotels/costa-del-sol-resorts/luxury-resorts' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
