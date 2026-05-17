import { projects } from '@/components/Projects/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kidcanibal.com';
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/photo',
    '/photography',
    '/projects',
  ];
  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));
  return [...staticPages, ...projectPages];
}
