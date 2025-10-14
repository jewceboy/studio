
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function LuxuryRestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Restaurants', href: '/restaurants' },
    { label: 'Fine Dining', href: '/restaurants/fine-dining' },
    { label: 'Luxury Restaurants', href: '/restaurants/fine-dining/luxury' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
