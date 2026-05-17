import AboutPageContent from '@/components/AboutPage'
import CornersMenu from '@/components/Menu/CornersMenu'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | KID CANIBAL',
    description: 'Get to know us better. No presentamos un estilo especifico, sino una forma de mirar y hacer. Podemos trabajar sofisticadas pero nunca desde lo obvio.',
    openGraph: {
        title: 'About | KID CANIBAL',
        description: 'Get to know us better. No presentamos un estilo especifico, sino una forma de mirar y hacer. Podemos trabajar sofisticadas pero nunca desde lo obvio.',
        url: 'https://kidcanibal.com/about',
        siteName: 'KID CANIBAL',
        images: [
            {
                url: '/assets/images/logo/logo-varient.png',
                width: 1200,
                height: 630,
                alt: 'About | KID CANIBAL',
            },
        ],
        locale: 'es_CR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About | KID CANIBAL',
        description: 'Get to know us better. No presentamos un estilo especifico, sino una forma de mirar y hacer. Podemos trabajar sofisticadas pero nunca desde lo obvio.',
        images: ['/assets/images/logo/logo-varient.png'],
        creator: '@kidcanibal',
    },
    alternates: {
        canonical: 'https://kidcanibal.com/about',
    },
}
export default function About() {
    return (
        <main>
            <CornersMenu />
            <AboutPageContent />
        </main>
    )
}