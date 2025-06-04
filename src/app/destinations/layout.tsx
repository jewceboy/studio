
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout serves as the base for all /destinations/* routes
  // The breadcrumb for the root /destinations page is handled here.
  // Child layouts (e.g., /destinations/[town]/layout.tsx) will add further segments.
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Destinations', href: '/destinations' },
  ];

  return (
    <div>
      {/* Note: The Breadcrumbs component prepends "Home" automatically.
          The actual displayed breadcrumb for /destinations will be "Home / Destinations"
          And for /destinations/malaga it will be "Home / Destinations / Malaga" (handled by child layout)
      */}
      {children}
    </div>
  );
}
