"use client";

import { notFound } from "next/navigation";
import { projects } from "@/components/Projects/constants";
import { use } from "react";
import CornersMenu from "@/components/Menu/CornersMenu";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}
 

export default function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }
    return (
        <main>
            <CornersMenu />
            <div className="relative w-full flex flex-col min-h-screen lg:gap-20 bg-black pb-12 pt-[10vh] lg:pt-4">
                <div className="relative lg:w-full h-[80vh] lg:inset-20 z-0 rounded-2xl max-w-[90vw] mx-auto lg:mx-0">
                        <video
                            className="w-full h-full object-cover rounded-2xl "
                            src={project.fullVideoSrc}
                            autoPlay
                            controls
                            muted
                            loop
                            playsInline
                        />
                </div>
                <div className="relative mx-auto z-20 w-full max-w-[90vw] h-full flex flex-col justify-end py-6 lg:px-0 md:py-8 gap-4">
                    <div>
                        <h1 className="text-white font-schabo lg:text-[13vw] text-8xl leading-[0.85] uppercase">
                            {project.title}
                        </h1>
                    </div>

                    <div className="w-full h-px bg-white/30" />

                    <div className="flex justify-start items-center gap-12 md:py-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest text-white">DIRECCIÓN</span>
                            <span className="text-2xl font-inter font-light text-white/70">{project.director}</span>
                            <span className="text-white/50">EST. {project.year}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
