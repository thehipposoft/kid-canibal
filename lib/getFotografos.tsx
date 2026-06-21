import { WP_BASE_URL } from './client';
import type { WPFotografo } from '../types';

export async function getFotografos(): Promise<WPFotografo[]> {
  const res = await fetch(
    `${WP_BASE_URL}/fotografo?_fields=title,slug,descripcion,portada_url,modified`,
  );

  if (!res.ok) {
    console.error(`[getFotografos] fetch failed: ${res.status}`);
    throw new Error('Error al obtener fotógrafos');
  }

  const data: WPFotografo[] = await res.json();
  return data.reverse();
}

export async function getFotografo(slug: string): Promise<WPFotografo | null> {
  const res = await fetch(
    `${WP_BASE_URL}/fotografo?slug=${slug}&_fields=title,slug,descripcion,portada_url,modified`,
  );

  if (!res.ok) {
    console.error(`[getFotografo] fetch failed: ${res.status}`);
    return null;
  }

  const data = await res.json();
  const fotografos = data[0];

  if (!fotografos) {
    console.error(`[getFotografo] no fotografo found for slug: "${slug}"`);
    return null;
  }

  return fotografos;
}
