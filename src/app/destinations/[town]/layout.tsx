
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function DestinationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { town: string };
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Destinations', href: '/destinations' }, // Assuming a /destinations listing page might exist
    { label: params.town.charAt(0).toUpperCase() + params.town.slice(1), href: `/destinations/${params.town}` },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
