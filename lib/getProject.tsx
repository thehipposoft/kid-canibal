import { WP_BASE_URL } from './client';
import type { WPProject } from '../types';

function decodeHtmlEntities(html: string): string {
  return html
    .replace(/&amp;/g, '&')
    .replace(/&#038;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function decodeProjectTitle(project: WPProject): WPProject {
  return {
    ...project,
    title: {
      ...project.title,
      rendered: decodeHtmlEntities(project.title.rendered),
    },
  };
}

export async function getProject(slug: string): Promise<WPProject | null> {
  const res = await fetch(
    `${WP_BASE_URL}/proyecto?slug=${slug}`,
  );

  if (!res.ok) {
    console.error(`[getProject] fetch failed: ${res.status}`);
    return null;
  }

  const data = await res.json();
  const project = data[0];

  if (!project) {
    console.error(`[getProject] no project found for slug: "${slug}"`);
    return null;
  }

  return decodeProjectTitle({
    ...project,
    galeria: project.galeria ? Object.values(project.galeria) : [],
  });
}

export async function getProjects(): Promise<WPProject[]> {
  const res = await fetch(
    `${WP_BASE_URL}/proyecto?per_page=100&_fields=id,slug,title,portada_url,galeria`,
  );

  if (!res.ok) {
    console.error(`[getProjects] fetch failed: ${res.status}`);
    throw new Error('Error al obtener proyectos');
  }

  const projects: WPProject[] = await res.json();
  return projects.map(decodeProjectTitle);
}