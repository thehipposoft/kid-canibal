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

export async function getProjects(): Promise<WPProject[]> {
  const res = await fetch(`${WP_BASE_URL}/proyecto?per_page=100&_fields=id,slug,title,portada_url,galeria`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Error al obtener proyectos');

  const data = await res.json();

  return data.map((project: any) =>
    decodeProjectTitle({
      ...project,
      galeria: project.galeria ? Object.values(project.galeria) : [],
    })
  );
}