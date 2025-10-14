
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function PuertoBanusBeachClubsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Beaches', href: '/beaches' },
    { label: 'Beach Clubs', href: '/beaches/beach-clubs' },
    { label: 'Puerto Banus', href: '/beaches/beach-clubs/puerto-banus' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
