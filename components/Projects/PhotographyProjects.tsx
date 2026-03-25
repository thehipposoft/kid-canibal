import { getProjects } from "@/lib/getProjects"
import Image from "next/image";
import AnimatedLink from "../AnimatedLink";

const PhotographyProjects = async () => {
    const projects = await getProjects();
    console.log(projects);
  return (
       <section className="w-full min-h-screen bg-black px-4 md:px-8 py-20">
            <div className="flex pt-4 items-end justify-between">
                <h1 className="text-white font-schabo lg:text-[13vw] text-[18vw] uppercase leading-none">
                    photography projects
                </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-2 md:pt-0">
                {projects.map((project, index) => (
                    <AnimatedLink
                            key={index}
                            href={`/photography/${project.slug}`}
                            className="relative group overflow-hidden rounded-xl bg-neutral-900 block min-h-[250px] lg:min-h-[500px]"
                        >
                            {/* Video / Image */}
                            <div className="relative w-full h-full aspect-video">
                                <Image
                                    width={500}
                                    height={500}
                                    alt={project.title.rendered}
                                    src={project.galeria[0].url}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                                />
                                {/* Gradient overlay — always visible at bottom */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />

                                {/* Subtle vignette on hover */}
                                <div
                                    className={`absolute hover:opacity-0 inset-0 z-10 transition-opacity duration-500 bg-black/10`}
                                />
                            </div>

                            {/* Text content */}
                            <div className="absolute bottom-0 left-0 z-20 p-4 md:p-5">
                                <p className="text-white font-bold text-xs md:text-lg tracking-widest uppercase font-inter leading-tight">
                                   {project.title.rendered}
                                </p>
                            </div>

                            {/* Corner arrow */}
                            <div
                                className={`group-hover:opacity-100 group-hover:bg-white group-hover:text-black group-hover:scale-110 absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300`}
                            >
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 10L10 2M10 2H4M10 2V8"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </AnimatedLink>
                ))}
            </div>
        </section>
  )
}

export default PhotographyProjects