
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function FiveStarHotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Luxury Hotels Malaga', href: '/hotels/luxury-hotels-malaga' },
    { label: 'Five Star Hotels', href: '/hotels/luxury-hotels-malaga/five-star-hotels' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
