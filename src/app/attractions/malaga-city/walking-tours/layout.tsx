
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function WalkingToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Attractions', href: '/attractions' },
    { label: 'Malaga City', href: '/attractions/malaga-city' },
    { label: 'Walking Tours', href: '/attractions/malaga-city/walking-tours' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
