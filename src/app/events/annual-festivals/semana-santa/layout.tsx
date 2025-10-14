
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function SemanaSantaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Events', href: '/events' },
    { label: 'Annual Festivals', href: '/events/annual-festivals' },
    { label: 'Semana Santa', href: '/events/annual-festivals/semana-santa' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
