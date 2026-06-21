import { MetadataRoute } from 'next';

const baseUrl = 'https://kidcanibal.com';
//Apis
import { getVideoProjects } from "@/lib/getVideoProjects";
import { getFotografos } from "@/lib/getFotografos";
import { getProjects } from "@/lib/getProjects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    lastModified: new Date(),
  }));

  const videoProjects = await getVideoProjects();

  const projectPages = videoProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.modified),
  }));

  const fotografos = await getFotografos();

  const fotografoPages = fotografos.map((fotografo) => ({
    url: `${baseUrl}/photographers/${fotografo.slug}`,
    lastModified: new Date(fotografo.modified),
  }));

  const photoProjects = await getProjects();

  const photoProjectPages = photoProjects.map((project) => ({
    url: `${baseUrl}/photo/projects/${project.slug}`,
    lastModified: new Date(project.modified),
  }));

  return [...staticPages, ...projectPages, ...fotografoPages, ...photoProjectPages];
}