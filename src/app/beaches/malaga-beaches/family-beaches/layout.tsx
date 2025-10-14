
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function FamilyBeachesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Beaches', href: '/beaches' },
    { label: 'Malaga Beaches', href: '/beaches/malaga-beaches' },
    { label: 'Family Beaches', href: '/beaches/malaga-beaches/family-beaches' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
