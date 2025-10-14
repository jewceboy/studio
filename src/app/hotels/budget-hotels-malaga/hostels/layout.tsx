
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function HostelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Budget Hotels Malaga', href: '/hotels/budget-hotels-malaga' },
    { label: 'Hostels', href: '/hotels/budget-hotels-malaga/hostels' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
