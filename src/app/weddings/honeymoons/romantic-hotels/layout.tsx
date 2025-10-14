
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function RomanticHotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Weddings', href: '/weddings' },
    { label: 'Honeymoons', href: '/weddings/honeymoons' },
    { label: 'Romantic Hotels', href: '/weddings/honeymoons/romantic-hotels' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
