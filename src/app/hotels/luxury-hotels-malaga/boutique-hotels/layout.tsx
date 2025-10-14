
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function BoutiqueHotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Luxury Hotels Malaga', href: '/hotels/luxury-hotels-malaga' },
    { label: 'Boutique Hotels', href: '/hotels/luxury-hotels-malaga/boutique-hotels' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
