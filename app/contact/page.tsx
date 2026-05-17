import CornersMenu from '@/components/Menu/CornersMenu'
import ContactPage from '@/components/ContactPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | KID CANIBAL',
  description: 'Get in touch with us. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
  openGraph: {
    title: 'Contact | KID CANIBAL',
    description: 'Get in touch with us. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
    url: 'https://kidcanibal.com/contact',
    siteName: 'KID CANIBAL',
    images: [
      {
        url: '/assets/images/logo/logo-varient.png',
        width: 1200,
        height: 630,
        alt: 'Contact | KID CANIBAL',
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | KID CANIBAL',
    description: 'Get in touch with us. We throw ourselves into chaos and turn the unpredictable into unique pieces.',
    images: ['/assets/images/logo/logo-varient.png'],
    creator: '@kidcanibal',
  },
  alternates: {
    canonical: 'https://kidcanibal.com/contact',
  },
}

export default function Contact() {
  return (
    <main className='min-h-screen'>
        <CornersMenu />
        <ContactPage />
    </main>
  )
}
