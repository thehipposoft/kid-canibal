"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface Project {
    title: string;
    director: string;
    year: string;
    link: string;
    mediaSrc: string;
    mediaType: "image" | "video";
}

interface ProjectsProps {
    projects: Project[];
}

const ProjectCard = ({ project, index, total }: { project: Project; index: number; total: number }) => {
    return (
        <div
            className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden"
            style={{ zIndex: index + 1 }}
        >
            <div className="relative w-full h-full">
                {/* Media Background */}
                <div className="absolute inset-0 z-0">
                    {project.mediaType === "video" ? (
                        <video
                            className="w-full h-full object-cover"
                            src={project.mediaSrc}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        <Image
                            src={project.mediaSrc}
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
                <div className="relative z-20 w-full h-full flex flex-col justify-end p-6 md:px-12 md:py-28 gap-6">

                    <div className="">
                        <h2 className="text-white font-thunder font-bold text-[13vw] leading-[0.8] uppercase">
                            {project.title}
                        </h2>
                    </div>

                    <div className="w-full h-px bg-white/30" />
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1">
                            <span className="text-brand-blue font-bold tracking-widest">DIRECCIÓN</span>
                            <span className="text-2xl font-inter font-light text-white/60">{project.director}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex gap-4">
                                <span className="text-white/40">EST. {project.year}</span>
                            </div>
                            <Link
                                href={project.link}
                                className="group flex items-center gap-2 text-white font-inter text-xs md:text-sm tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity"
                            >
                                VER PROYECTO
                                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
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
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    index={index}
                    total={projects.length}
                />
            ))}
        </section>
    );
}
