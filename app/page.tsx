import Banner from "@/components/Banner";
import ScrollingBanner from "@/components/ScrollingBanner";
import Image from "next/image";
import Projects, { Project } from "@/components/Projects";
import Menu from "@/components/Menu";
import PhysicsMenu from "@/components/PhysicsMenu";

const projects: Project[] = [
  {
    title: "PARK HYATT",
    director: "RUBENS BELLO",
    year: "2023",
    link: "/",
    mediaSrc: "/assets/images/projects/projects-1.jpg",
    mediaType: "image"
  },
  {
    title: "Belmond Copacabana Palace",
    director: "SARAH JENKINS",
    year: "2024",
    link: "/",
    mediaSrc: "/assets/images/projects/projects-2.jpg",
    mediaType: "image"
  },
  {
    title: "Reel 2025",
    director: "ALEXANDER MCQUEEN",
    year: "2022",
    link: "/",
    mediaSrc: "/assets/images/projects/projects-3.jpg",
    mediaType: "image"
  },
  {
    title: "a land between two volcanoes",
    director: "SARAH JENKINS",
    year: "2024",
    link: "/",
    mediaSrc: "/assets/images/projects/projects-4.jpg",
    mediaType: "image"
  },
  {
    title: "some b&w stills",
    director: "ALEXANDER MCQUEEN",
    year: "2022",
    link: "/",
    mediaSrc: "/assets/images/projects/projects-5.jpg",
    mediaType: "image"
  }
];

export default function Home() {
  return (
    <main className="">
      <Menu />
      <Banner />
      <ScrollingBanner />
      <Projects projects={projects} />
     {/*  <PhysicsMenu /> */}
    </main>
  );
}
