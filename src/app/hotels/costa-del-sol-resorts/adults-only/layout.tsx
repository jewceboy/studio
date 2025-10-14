
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function AdultsOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Costa del Sol Resorts', href: '/hotels/costa-del-sol-resorts' },
    { label: 'Adults Only Resorts', href: '/hotels/costa-del-sol-resorts/adults-only' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
