
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function ThemeParksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Attractions', href: '/attractions' },
    { label: 'Family Attractions', href: '/attractions/family-attractions' },
    { label: 'Theme Parks', href: '/attractions/family-attractions/theme-parks' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
