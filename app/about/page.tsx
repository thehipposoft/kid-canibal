import React from 'react'
import AboutPageContent from '@/components/AboutPage'
import CornersMenu from '@/components/Menu/CornersMenu'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
    title: 'KID CANIBAL - about',
    description: 'Get to know us better. No presentamos un estilo especifico, sino una forma de mirar y hacer. Podemos trabajar sofisticadas pero nunca desde lo obvio.',
}
export default function About() {
    return (
        <main>
            <CornersMenu />
            <AboutPageContent />
        </main>
    )
}