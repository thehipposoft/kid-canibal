"use client";

import { notFound } from "next/navigation";
import { projects } from "@/components/Projects/constants";
import { use } from "react";
import CornersMenu from "@/components/Menu/CornersMenu";
import { useTransitionRouter } from "next-view-transitions";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}
 

export default function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = use(params);
    const router = useTransitionRouter();
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
                    <div className="flex items-end justify-between">
                        <h1 className="text-white font-schabo lg:text-[13vw] text-8xl leading-[0.85] uppercase">
                            {project.title}
                        </h1>

                    </div>

                    <div className="w-full h-px bg-white/30" />

                    <div className="flex justify-between items-center gap-12 md:py-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest text-white">DIRECCIÓN</span>
                            <span className="text-2xl font-inter font-light text-white/70">{project.director}</span>
                            <span className="text-white/50">EST. {project.year}</span>
                        </div>
                        <button
                            onClick={() => router.back()}
                            className="text-white/60 hover:text-white hover:underline font-inter text-sm tracking-widest uppercase transition-colors duration-300 pb-2"
                        >
                            go Back
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
