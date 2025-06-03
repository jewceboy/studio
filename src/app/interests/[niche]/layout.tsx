
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function NicheInterestLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { niche: string };
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Interests', href: '/interests' }, // Assuming a /interests root listing page might exist
    { label: params.niche.charAt(0).toUpperCase() + params.niche.slice(1), href: `/interests/${params.niche}` },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      {children}
    </div>
  );
}
