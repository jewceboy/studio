
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function FeriaDeMalagaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Events', href: '/events' },
    { label: 'Annual Festivals', href: '/events/annual-festivals' },
    { label: 'Feria de Malaga', href: '/events/annual-festivals/feria-de-malaga' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
