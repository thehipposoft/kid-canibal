import { WP_BASE_URL } from './client';
import { VideoProject } from "@/types";

type WPProjectResponse = {
    slug: string;
    modified: string;
    title: { rendered: string };
    acf: {
        director: string;
        year: string;
        location: string;
        teaser_src: string;
        teaser_vertical_src: string;
        full_video_src: string;
        media_type: "image" | "video";
        display_in_home_page: boolean;
    };
    status: string; // 'publish', 'draft', etc.
};

type Props = {
    extraParameters?: Record<string, string>;
}

export async function getVideoProjects({ extraParameters }: Props = {}): Promise<VideoProject[]> {
    const queryParams = new URLSearchParams({
        per_page: "100",
        orderby: "menu_order",
        order: "asc",
        ...extraParameters,
    });

    const res = await fetch(`${WP_BASE_URL}/video_projects?${queryParams.toString()}`, {
        next: { revalidate: 60 }, // revalida cada 60 segundos
    });
    if (!res.ok) throw new Error('Error al obtener proyectos');

    const data = await res.json();

    return data.filter((item: WPProjectResponse) => item.status === 'publish').map((item: WPProjectResponse) => ({
        slug: item.slug,
        title: item.title.rendered,
        director: item.acf.director || "Unknown Director",
        year: item.acf.year || "Unknown Year", // Placeholder, adjust as needed
        location: item.acf.location || "Unknown Location", // Placeholder, adjust as needed
        teaserSrc: item.acf.teaser_src || '',
        teaserVerticalSrc: item.acf.teaser_vertical_src || '',
        fullVideoSrc: item.acf.full_video_src || '',
        mediaType: item.acf.media_type || 'image',
        modified: item.modified,
    }));
}