

import PageHeader from '@/components/shared/PageHeader';

export default function ChatDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader title="Expandable Chat Component Demo" />
      {children}
    </div>
  );
}
