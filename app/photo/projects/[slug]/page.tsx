
import { notFound } from "next/navigation";
import CornersMenu from "@/components/Menu/CornersMenu";
import { getProject } from "@/lib/getProject";
import { getProjects } from "@/lib/getProjects";
import PhotoGallery from "@/components/Projects/PhotoGallery";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) {
    return {
      title: 'Project Not Found | Photography | KID CANIBAL',
      description: 'Photography project not found',
      robots: 'noindex, nofollow',
    };
  }
  const title = `${project.title.rendered} | Photography | KID CANIBAL`
  const description = 'Explore our photography project collections.'
  const url = `https://kidcanibal.com/photo/projects/${slug}`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'KID CANIBAL',
      images: [
        {
          url: '/assets/images/logo/logo-varient.png',
          width: 1200,
          height: 630,
          alt: project.title.rendered,
        },
      ],
      locale: 'es_CR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/images/logo/logo-varient.png'],
      creator: '@kidcanibal',
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function PhotographyProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const images = project.galeria ?? [];

  return (
    <main className="bg-black min-h-screen">
      <CornersMenu />

      {images.length > 0 ? (
        <PhotoGallery images={images} projectTitle={project.title.rendered} />
      ) : (
        <p className="text-white/30 text-center py-32 tracking-widest text-sm">
          GALERÍA NO DISPONIBLE
        </p>
      )}
    </main>
  );
}