
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function MijasPuebloRestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Destinations', href: '/destinations' },
    { label: 'Mijas Pueblo', href: '/destinations/mijas-pueblo' },
    { label: 'Restaurants', href: '/destinations/mijas-pueblo/restaurants' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
