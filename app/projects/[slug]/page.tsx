import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import ProjectPageComp from "./Project";
import { getVideoProject } from "@/lib/getVideoProject";

interface ProjectPageProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = await getVideoProject({ slug: resolvedParams.slug });

    if (!project) {
        return {
            title: 'Project Not Found | Project | KID CANIBAL',
            description: 'Project not found',
            robots: 'noindex, nofollow',
        };
    }
    const url = `https://kidcanibal.com/projects/${project.slug}`;
    return {
        title: `${project.title} | Project | KID CANIBAL`,
        description: 'We throw ourselves into chaos and turn the unpredictable into unique pieces.',
        openGraph: {
            title: `${project.title} | Project | KID CANIBAL`,
            description: 'We throw ourselves into chaos and turn the unpredictable into unique pieces.',
            url,
            siteName: 'KID CANIBAL',
            images: [
                {
                    url: '/assets/images/logo/logo-varient.png',
                    width: 1200,
                    height: 630,
                    alt: `${project.title} | Project | KID CANIBAL`,
                },
            ],
            locale: 'es_CR',
            type: 'video.other',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | Project | KID CANIBAL`,
            description: 'We throw ourselves into chaos and turn the unpredictable into unique pieces.',
            images: ['/assets/images/logo/logo-varient.png'],
            creator: '@kidcanibal',
        },
        alternates: {
            canonical: url,
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const project = await getVideoProject({ slug: resolvedParams.slug });

    if (!project) {
        notFound();
    }
    return <ProjectPageComp project={project} />;
}
