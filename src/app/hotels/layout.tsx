
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function HotelsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
  ];

  return (
    <div>
      {/* This layout provides the base breadcrumb for /hotels and its children */}
      {/* Child layouts like /hotels/[region]/layout.tsx will add more specific segments */}
      {children}
    </div>
  );
}
