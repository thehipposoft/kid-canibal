import CornersMenu from '@/components/Menu/CornersMenu'
import FotografosList from '@/components/FotografosList'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Photography | KID CANIBAL',
    description: 'Check our latest photography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
    openGraph: {
        title: 'Photography | KID CANIBAL',
        description: 'Check our latest photography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
        url: 'https://kidcanibal.com/photo',
        siteName: 'KID CANIBAL',
        images: [
            {
                url: '/assets/images/logo/logo-varient.png',
                width: 1200,
                height: 630,
                alt: 'Photography | KID CANIBAL',
            },
        ],
        locale: 'es_CR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Photography | KID CANIBAL',
        description: 'Check our latest photography projects. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
        images: ['/assets/images/logo/logo-varient.png'],
        creator: '@kidcanibal',
    },
    alternates: {
        canonical: 'https://kidcanibal.com/photo',
    },
}

export default function PhotographyPage() {
    return (
        <main>
            <CornersMenu />
            <FotografosList />
        </main>
    )
}
