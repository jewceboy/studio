
import { MetadataRoute } from 'next';
import { allSiteUrls } from '@/lib/urls'; // We will create this helper file

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.costadelsolnavigator.com'; // Replace with your actual domain

  const pages = allSiteUrls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  return pages;
}
