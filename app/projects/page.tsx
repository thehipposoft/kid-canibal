import AllProjects from "@/components/Projects/AllProjects";
import CornersMenu from "@/components/Menu/CornersMenu";
import type { Metadata } from 'next';
import { getVideoProjects } from "@/lib/getVideoProjects";

export const metadata: Metadata = {
    title: 'Projects | KID CANIBAL',
    description: 'Check our latest videography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
    openGraph: {
        title: 'Projects | KID CANIBAL',
        description: 'Check our latest videography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
        url: 'https://kidcanibal.com/projects',
        siteName: 'KID CANIBAL',
        images: [
            {
                url: '/assets/images/logo/logo-varient.png',
                width: 1200,
                height: 630,
                alt: 'KID CANIBAL',
            },
        ],
        locale: 'es_CR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects | KID CANIBAL',
        description: 'Check our latest videography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
        images: ['/assets/images/logo/logo-varient.png'],
        creator: '@kidcanibal',
    },
    alternates: {
        canonical: 'https://kidcanibal.com/projects',
    },
}

export default async function ProjectsPage() {
    const projects = await getVideoProjects();

    return (
        <main>
            <CornersMenu />
            <AllProjects projects={projects} />
        </main>
    );
}