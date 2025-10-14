
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function PadelCourtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Sports', href: '/sports' },
    { label: 'Tennis & Padel', href: '/sports/tennis-padel' },
    { label: 'Padel Courts', href: '/sports/tennis-padel/padel-courts' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
