import ProjectsFixed from "@/components/Projects/ProjectsFixed";
import CornersMenu from "@/components/Menu/CornersMenu";
import { BannerVideo } from "@/components/VideoBanner";
import { projects } from "@/components/Projects/constants";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | KID CANIBAL',
  description: 'We throw ourselves into chaos and turn the unpredictable into unique pieces.',
  openGraph: {
    title: 'Home | KID CANIBAL',
    description: 'We throw ourselves into chaos and turn the unpredictable into unique pieces.',
    url: 'https://kidcanibal.com/',
    siteName: 'KID CANIBAL',
    images: [
      {
        url: '/assets/images/logo/logo-varient.png',
        width: 1200,
        height: 630,
        alt: 'KID CANIBAL',
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | KID CANIBAL',
    description: 'We throw ourselves into chaos and turn the unpredictable into unique pieces.',
    images: ['/assets/images/logo/logo-varient.png'],
    creator: '@kidcanibal',
  },
  alternates: {
    canonical: 'https://kidcanibal.com/',
  },
}

export default function Home() {
  return (
    <main>
      <CornersMenu />
      <BannerVideo />
      <ProjectsFixed projects={projects} />
    </main>
  );
}