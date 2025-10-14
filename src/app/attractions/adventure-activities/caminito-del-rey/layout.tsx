
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function CaminitoDelReyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Attractions', href: '/attractions' },
    { label: 'Adventure Activities', href: '/attractions/adventure-activities' },
    { label: 'Caminito del Rey', href: '/attractions/adventure-activities/caminito-del-rey' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
