import React from 'react'
import CornersMenu from '@/components/Menu/CornersMenu'
import ContactPage from '@/components/ContactPage'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
    title: 'KID CANIBAL - contact',
    description: 'Get in touch with use. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
}

export default function Contact() {
  return (
    <main className='min-h-screen'>
        <CornersMenu />
        <ContactPage />
    </main>
  )
}
