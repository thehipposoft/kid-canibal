import { getFotografos } from '@/lib/getFotografos'
import FotografosListClient from './FotografosListClient'

export default async function FotografosList() {
    const fotografos = await getFotografos()
    return <FotografosListClient fotografos={fotografos} />
}
