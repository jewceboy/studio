
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function MalagaClubsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Nightlife', href: '/nightlife' },
    { label: 'Malaga City Nightlife', href: '/nightlife/malaga-city' },
    { label: 'Clubs', href: '/nightlife/malaga-city/clubs' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
