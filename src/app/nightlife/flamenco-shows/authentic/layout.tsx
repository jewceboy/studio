
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function AuthenticFlamencoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Nightlife', href: '/nightlife' },
    { label: 'Flamenco Shows', href: '/nightlife/flamenco-shows' },
    { label: 'Authentic Flamenco', href: '/nightlife/flamenco-shows/authentic' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
