
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function LuxuryClubsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Nightlife', href: '/nightlife' },
    { label: 'Marbella & Puerto Banus', href: '/nightlife/marbella-puerto-banus' },
    { label: 'Luxury Clubs', href: '/nightlife/marbella-puerto-banus/luxury-clubs' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
