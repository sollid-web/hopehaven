import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes = [
    '',
    '/about',
    '/programs',
    '/adoptions',
    '/caregivers',
    '/donations',
    '/gallery',
    '/faq',
    '/transparency',
    '/contact',
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));
}
