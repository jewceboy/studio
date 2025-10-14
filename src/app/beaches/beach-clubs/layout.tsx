
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function BeachClubsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Beaches', href: '/beaches' },
    { label: 'Beach Clubs', href: '/beaches/beach-clubs' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
