
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Digital Nomad', href: '/digital-nomad' },
    { label: 'Visa Guide', href: '/digital-nomad/visa-guide' },
    { label: 'Application', href: '/digital-nomad/visa-guide/application' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
