import { notFound } from 'next/navigation'
import { getFotografo, getFotografos } from '@/lib/getFotografos'
import CornersMenu from '@/components/Menu/CornersMenu'
import FotografosIndividual from '@/components/Projects/FotografosIndividual'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ fotografo: string }>
}

export async function generateStaticParams() {
    const fotografos = await getFotografos()
    return fotografos.map((f) => ({ fotografo: f.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { fotografo } = await params
    const data = await getFotografo(fotografo)
    if (!data) {
        return {
            title: 'Photographer Not Found | Photography | KID CANIBAL',
            description: 'Photographer not found',
            robots: 'noindex, nofollow',
        }
    }
    const title = `${data.title.rendered} | Photography | KID CANIBAL`
    const description = 'Discover our photography collections by talented photographers.'
    const url = `https://kidcanibal.com/photo/${fotografo}`
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: 'KID CANIBAL',
            images: [
                {
                    url: '/assets/images/logo/logo-varient.png',
                    width: 1200,
                    height: 630,
                    alt: data.title.rendered,
                },
            ],
            locale: 'es_CR',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/assets/images/logo/logo-varient.png'],
            creator: '@kidcanibal',
        },
        alternates: {
            canonical: url,
        },
    }
}

export default async function FotografoPage({ params }: Props) {
    const { fotografo } = await params
    const data = await getFotografo(fotografo)

    if (!data) return notFound()

    return (
        <main>
            <CornersMenu />
            <FotografosIndividual fotografoSlug={fotografo} title={data.title.rendered} />
        </main>
    )
}
