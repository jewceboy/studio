
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function PresidentialSuitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' },
    { label: 'Luxury Hotels Malaga', href: '/hotels/luxury-hotels-malaga' },
    { label: 'Presidential Suites', href: '/hotels/luxury-hotels-malaga/presidential-suites' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
