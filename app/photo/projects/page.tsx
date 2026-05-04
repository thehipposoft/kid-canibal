import CornersMenu from '@/components/Menu/CornersMenu'
// import PhotographyProjects from '@/components/Projects/PhotographyProjects'
import type { Metadata } from 'next'
import PhotographyProjects from '@/components/Projects/PhotographyProjects'

export const metadata: Metadata = {
    title: 'KID CANIBAL - photography',
    description: 'Check our latest photography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
}

export default function PhotographyPage() {
    return (
        <main>
            <CornersMenu />
            <PhotographyProjects />
        </main>
    )
}
