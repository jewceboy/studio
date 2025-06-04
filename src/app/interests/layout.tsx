
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function InterestsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Interests', href: '/interests' },
  ];
  return (
    <div>
      {/* This layout provides the base breadcrumb for /interests and its children */}
      {/* Child layouts like /interests/[niche]/layout.tsx will add more specific segments */}
      {children}
    </div>
  );
}
