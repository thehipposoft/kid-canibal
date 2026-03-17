import Projects from "@/components/Projects";
import CornersMenu from "@/components/Menu/CornersMenu";
import VideoBanner from "@/components/VideoBanner";
import { projects } from "@/components/Projects/constants";


export default function Home() {
  return (
    <main className="">
      <CornersMenu />
      <VideoBanner />
      <Projects projects={projects} />
    </main>
  );
}
