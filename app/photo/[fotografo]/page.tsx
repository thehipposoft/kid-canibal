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
    if (!data) return {}
    return {
        title: `KID CANIBAL - ${data.title.rendered}`,
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
