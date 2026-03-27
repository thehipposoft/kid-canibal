export interface WPProject {
  link: string;
  id: number;
  slug: string;
  title: { rendered: string };
  portada_url: string;
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