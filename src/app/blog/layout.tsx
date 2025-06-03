
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

export default function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug?: string }; // slug is optional, present for single post page
}) {
  const baseItems: BreadcrumbItem[] = [
    { label: 'Blog', href: '/blog' },
  ];

  // If params.slug exists, it means it's a single post page, so add it to breadcrumbs
  // This logic is basic; a real app might fetch the post title for the breadcrumb.
  const breadcrumbItems = params.slug 
    ? [...baseItems, { label: params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), href: `/blog/${params.slug}` }]
    : baseItems;

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} className="container mx-auto px-4" />
      {children}
    </div>
  );
}
