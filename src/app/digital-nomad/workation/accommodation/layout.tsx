
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function AccommodationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Digital Nomad', href: '/digital-nomad' },
    { label: 'Workation', href: '/digital-nomad/workation' },
    { label: 'Accommodation', href: '/digital-nomad/workation/accommodation' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
