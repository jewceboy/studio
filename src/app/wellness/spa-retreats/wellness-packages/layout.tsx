
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function WellnessPackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Wellness & Medical', href: '/wellness' },
    { label: 'Spa Retreats', href: '/wellness/spa-retreats' },
    { label: 'Wellness Packages', href: '/wellness/spa-retreats/wellness-packages' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
