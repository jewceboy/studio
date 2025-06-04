
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import PageHeader from '@/components/shared/PageHeader';
import type { BreadcrumbItem } from '@/types';

export default function ChatDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Chat Demo', href: '/chat-demo' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <PageHeader title="Expandable Chat Component Demo" />
      {children}
    </div>
  );
}
