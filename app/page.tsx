import Projects from "@/components/Projects";
import CornersMenu from "@/components/Menu/CornersMenu";
import VideoBanner from "@/components/VideoBanner";
import { projects } from "@/components/Projects/constants";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'KID CANIBAL',
  description: 'We throw ourselves into chaos and turn the unpredictable into unique pieces.',
}

export default function Home() {
  return (
    <main className="">
      <CornersMenu />
      <VideoBanner />
      <Projects projects={projects} />
    </main>
  );
}
