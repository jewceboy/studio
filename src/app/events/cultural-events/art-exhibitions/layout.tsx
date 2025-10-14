
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function ArtExhibitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Events', href: '/events' },
    { label: 'Cultural Events', href: '/events/cultural-events' },
    { label: 'Art Exhibitions', href: '/events/cultural-events/art-exhibitions' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
