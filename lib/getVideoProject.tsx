import { WP_BASE_URL } from './client';
import { VideoProject } from "@/types";

type WPProjectResponse = {
    slug: string;
    title: { rendered: string };
    acf: {
        director: string;
        year: string;
        location: string;
        teaser_src: string;
        teaser_vertical_src: string;
        full_video_source: string;
        media_type: "image" | "video";
    };
    status: string; // 'publish', 'draft', etc.
};

export async function getVideoProject({slug}: {slug: string}): Promise<VideoProject> {
    const res = await fetch(`${WP_BASE_URL}/video_projects?slug=${encodeURIComponent(slug)}`, {
        next: { revalidate: 60 }, // revalida cada 60 segundos
    });
    if (!res.ok) throw new Error('Error al obtener proyectos');

    const data = await res.json();

    const project = data.filter((item: WPProjectResponse) => item.status === 'publish').map((item: WPProjectResponse) => ({
        slug: item.slug,
        title: item.title.rendered,
        director: item.acf.director || "Unknown Director",
        year: item.acf.year || "Unknown Year", // Placeholder, adjust as needed
        location: item.acf.location || "Unknown Location", // Placeholder, adjust as needed
        teaserSrc: item.acf.teaser_src || '',
        teaserVerticalSrc: item.acf.teaser_vertical_src || '',
        fullVideoSrc: item.acf.full_video_source || '',
        mediaType: item.acf.media_type || 'image',
    }))[0];

    if (!project) throw new Error('No se encontró ningún proyecto');

    return project;
}