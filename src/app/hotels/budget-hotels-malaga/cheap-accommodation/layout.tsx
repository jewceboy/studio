
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function CheapAccommodationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Budget Hotels Malaga', href: '/hotels/budget-hotels-malaga' },
    { label: 'Cheap Accommodation', href: '/hotels/budget-hotels-malaga/cheap-accommodation' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
