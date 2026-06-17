import { getProjects } from "@/lib/getProjects"
import Image from "next/image"
import AnimatedLink from "../AnimatedLink"
import BackButton from "../BackButton"

interface Props {
    fotografoSlug: string
    title?: string
    descripcion?: string
}

const FotografosIndividual = async ({ fotografoSlug, title, descripcion }: Props) => {
    const allProjects = await getProjects()

    const projects = allProjects.filter((p) =>
        p.fotografos_data?.some((f) => f.slug === fotografoSlug)
    )

    return (
        <section className="w-full min-h-screen bg-black px-4 md:px-8 py-20">
            <div className="pt-4">
                <p className="uppercase text-brand-white/70">photographer</p>
                <h1 className="text-white font-thunder font-semibold lg:text-[13vw] text-[17vw] lg:leading-36 lg:pt-10 pt-4 uppercase leading-none">
                    {title ?? fotografoSlug}
                </h1>
                {descripcion && (
                    <div
                        className="w-full leading-none font-inter font-medium uppercase text-brand-white/80 lg:text-[1.5vw] text-lg text-justify [text-align-last:justify] [&_p]:m-0 pt-2 pb-4"
                        dangerouslySetInnerHTML={{ __html: descripcion }}
                    />
                )}
            </div>
            <div className="grid md:grid-cols-2 gap-4 pt-6 md:pt-8">
                {projects.map((project, index) => (
                    <AnimatedLink
                        key={index}
                        href={`/photo/projects/${project.slug}`}
                        className="relative group overflow-hidden bg-neutral-900 block min-h-[250px] lg:min-h-[500px]"
                    >
                        <div className="relative w-full h-full aspect-video">
                            <Image
                                width={500}
                                height={500}
                                alt={project.title.rendered}
                                src={project.portada_url}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <div className="absolute hover:opacity-0 inset-0 z-10 transition-opacity duration-500 bg-black/10" />
                        </div>

                        <div className="absolute bottom-0 left-0 z-20 p-4 md:p-5">
                            <p className="text-white font-bold text-xs md:text-lg tracking-widest uppercase font-inter leading-tight">
                                {project.title.rendered}
                            </p>
                        </div>

                        <div className="group-hover:opacity-100 group-hover:bg-white group-hover:text-black group-hover:scale-110 absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </AnimatedLink>
                ))}

                {projects.length === 0 && (
                    <p className="text-white/30 col-span-2 text-center py-32 tracking-widest text-sm uppercase">
                        No projects found
                    </p>
                )}
            </div>
        </section>
    )
}

export default FotografosIndividual
