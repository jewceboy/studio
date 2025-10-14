
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function CoworkingMarbellaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Digital Nomad', href: '/digital-nomad' },
    { label: 'Coworking Spaces', href: '/digital-nomad/coworking' },
    { label: 'Coworking Marbella', href: '/digital-nomad/coworking/coworking-marbella' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
