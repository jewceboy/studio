
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function MeetingRoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Business & MICE', href: '/business' },
    { label: 'Business Hotels', href: '/business/business-hotels' },
    { label: 'Meeting Rooms', href: '/business/business-hotels/meeting-rooms' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
