"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "../AnimatedLink";

export interface Project {
    slug: string;
    title: string;
    director: string;
    year: string;
    link: string;
    teaserSrc: string;
    fullVideoSrc: string,
    mediaType: "image" | "video";
}

interface ProjectsProps {
    projects: Project[];
}

const ProjectCard = ({ project, index, total }: { project: Project; index: number; total: number }) => {
    return (
        <AnimatedLink
            href={project.link}
            className="sticky pointer-events-none lg:pointer-events-auto top-0 w-full h-screen flex items-center justify-center overflow-hidden video-container"
        >
            <div className="relative w-full h-full">
                {/* Media Background */}
                <div className="absolute inset-0 z-0">
                    {project.mediaType === "video" ? (
                        <video
                            className="w-full h-full object-cover"
                            src={project.teaserSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <Image
                            src={project.teaserSrc}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 w-full h-full flex flex-col justify-end p-6 md:px-12 md:py-4 gap-4">

                    <div className="">
                        <h2 className="text-white font-schabo lg:text-[13vw] text-9xl leading-28 lg:leading-[0.6] uppercase">
                            {project.title}
                        </h2>
                    </div>

                    <div className="w-full h-px bg-white/30" />
                    <div className="flex justify-center items-center lg:gap-20 md:py-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest">DIRECCIÓN</span>
                            <span className="text-2xl font-inter font-light text-white/70">{project.director}</span>
                            <span className="text-white/50">EST. {project.year}</span>
                        </div>
                    </div>

                </div>
            </div>
        </AnimatedLink>
    );
};

const ProjectCardMobile = ({ project, index, total }: { project: Project; index: number; total: number }) => {
    return (
        <div
            className="sticky pointer-events-none lg:pointer-events-auto top-0 w-full h-screen flex items-center justify-center overflow-hidden video-container"
            style={{ zIndex: index + 1 }}
        >
            <div className="relative w-full h-full">
                {/* Media Background */}
                <div className="absolute inset-0 z-0">
                    {project.mediaType === "video" ? (
                        <video
                            className="w-full h-full object-cover"
                            src={project.teaserSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <Image
                            src={project.teaserSrc}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    )}
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                {/* Content */}
                <div className="relative z-20 w-full h-full flex flex-col justify-end px-6 py-8 gap-4">
                    <div className="">
                        <h2 className="text-white font-schabo lg:text-[13vw] text-9xl leading-28 lg:leading-[0.6] uppercase">
                            {project.title}
                        </h2>
                    </div>
                    <div className="w-full h-px bg-white/30" />
                    <div className="flex justify-between items-center md:py-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest">DIRECCIÓN</span>
                            <span className="text-xl leading-6 font-inter font-light text-white/70">{project.director}</span>
                            <span className="text-white/50">EST. {project.year}</span>
                        </div>
                        <div className="flex gap-4">
                           <Link
                                href={project.link}
                                className="group lg:hidden flex items-center gap-2 text-white font-inter text-xs md:text-sm tracking-widest uppercase opacity-80 hover:opacity-100 hover:underline transition-opacity "
                            >
                                VER PROYECTO
                                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                    <ArrowUpRight size={14} />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default function Projects({ projects }: ProjectsProps) {
    return (
        <section className="relative w-full bg-black">
            <div className="lg:hidden">
                {projects.map((project, index) => (
                    <ProjectCardMobile
                        key={index}
                        project={project}
                        index={index}
                        total={projects.length}
                    />
                ))}
            </div>
            <div className="lg:block hidden">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        total={projects.length}
                    />
                ))}
            </div>
        </section>
    );
}
