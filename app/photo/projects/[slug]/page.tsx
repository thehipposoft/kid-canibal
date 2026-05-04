
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
  if (!project) return {};

  return {
    title: `PROJECTS - ${project.title.rendered}`,
    description: project.title.rendered,
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