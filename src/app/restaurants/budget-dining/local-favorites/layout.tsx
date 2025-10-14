
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function LocalFavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Restaurants', href: '/restaurants' },
    { label: 'Budget Dining', href: '/restaurants/budget-dining' },
    { label: 'Local Favorites', href: '/restaurants/budget-dining/local-favorites' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
