
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function WineTastingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Restaurants', href: '/restaurants' },
    { label: 'Culinary Experiences', href: '/restaurants/culinary-experiences' },
    { label: 'Wine Tasting', href: '/restaurants/culinary-experiences/wine-tasting' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
