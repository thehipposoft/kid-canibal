export interface WPProject {
  link: string;
  id: number;
  slug: string;
  title: { rendered: string };
  featured_media: number;  // ID de la imagen destacada (0 si no tiene)
  galeria: WPImage[];
}

export interface WPImage {
  id: number;
  url: string;
  thumb?: string;
  alt: string;
  width: number;
  height: number;
}