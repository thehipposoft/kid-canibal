export interface WPFotografoRef {
  id: number;
  slug: string;
  title: string;
  descripcion: string;
  portada_url: string | null;
}

export interface WPProject {
  link: string;
  id: number;
  slug: string;
  title: { rendered: string };
  portada_url: string;
  modified: string;
  galeria: WPImage[];
  fotografos_data?: WPFotografoRef[];
}

export type VideoProject = {
  slug: string;
  modified: string;
  title: string;
  director: string;
  year: string;
  location: string;
  teaserSrc: string;
  teaserVerticalSrc: string;
  fullVideoSrc: string;
  mediaType: "image" | "video";
}

export interface WPFotografo {
  slug: string;
  title: { rendered: string };
  descripcion: string;
  portada_url: string | null;
  modified: string;
}

export interface WPImage {
  id: number;
  url: string;
  thumb?: string;
  alt: string;
  width: number;
  height: number;
}