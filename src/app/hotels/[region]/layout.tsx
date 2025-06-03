
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function HotelSiloLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { region: string };
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Hotels', href: '/hotels' }, // Assuming a /hotels root listing page might exist
    { label: params.region.charAt(0).toUpperCase() + params.region.slice(1), href: `/hotels/${params.region}` },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
