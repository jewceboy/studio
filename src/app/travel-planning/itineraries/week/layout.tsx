
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function WeekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Travel Planning', href: '/travel-planning' },
    { label: 'Itineraries', href: '/travel-planning/itineraries' },
    { label: 'One Week Itinerary', href: '/travel-planning/itineraries/week' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
