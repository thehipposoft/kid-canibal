import AllProjects from "@/components/Projects/AllProjects";
import CornersMenu from "@/components/Menu/CornersMenu";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
    title: 'KID CANIBAL - work',
    description: 'Check our latest videoghraphy projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
}

export default function ProjectsPage() {
    return (
        <main>
            <CornersMenu />
            <AllProjects />
        </main>
    );
}