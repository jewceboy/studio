
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function AllInclusiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Family Hotels Malaga', href: '/hotels/family-hotels-malaga' },
    { label: 'All-Inclusive', href: '/hotels/family-hotels-malaga/all-inclusive' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
