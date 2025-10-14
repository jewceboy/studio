
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function YogaRetreatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Wellness & Medical', href: '/wellness' },
    { label: 'Wellness Retreats', href: '/wellness/wellness-retreats' },
    { label: 'Yoga Retreats', href: '/wellness/wellness-retreats/yoga' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
