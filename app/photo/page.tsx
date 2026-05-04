import CornersMenu from '@/components/Menu/CornersMenu'
import FotografosList from '@/components/FotografosList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'KID CANIBAL - photography',
    description: 'Check our latest photography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
}

export default function PhotographyPage() {
    return (
        <main>
            <CornersMenu />
            <FotografosList />
        </main>
    )
}
