"use client";

import { useRef, useState } from "react";
import { projects } from "./constants";
import { Project } from "./index";
import AnimatedLink from "../AnimatedLink";

function ProjectGridItem({ project }: { project: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <AnimatedLink
            href={project.link}
            className="relative group overflow-hidden bg-neutral-900 block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Video / Image */}
            <div className="relative w-full h-full aspect-video">
                <video
                    ref={videoRef}
                    src={project.teaserSrc}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                        hovered ? "scale-105" : "scale-100"
                    }`}
                />
                {/* Gradient overlay — always visible at bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Subtle vignette on hover */}
                <div
                    className={`absolute inset-0 z-10 transition-opacity duration-500 ${
                        hovered ? "opacity-100" : "opacity-0"
                    } bg-black/10`}
                />
            </div>

            {/* Text content */}
            <div className="absolute bottom-0 left-0 z-20 p-4 md:p-5">
                <p className="text-white font-bold text-xs md:text-sm tracking-widest uppercase font-inter leading-tight">
                    {project.title}
                </p>
                <p className="text-white/70 text-xs md:text-sm font-inter font-light mt-0.5">
                    {project.director}
                </p>
            </div>

            {/* Corner arrow */}
            <div
                className={`absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 ${
                    hovered
                        ? "opacity-100 bg-white text-black scale-110"
                        : "opacity-0 bg-transparent text-white"
                }`}
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
    );
}

export default function AllProjects() {
    const firstRow = projects.slice(0, 2);
    const secondRow = projects.slice(2);

    return (
        <section className="w-full min-h-screen bg-black px-4 md:px-8 py-20">
            <div className="flex pt-4 items-end justify-between">
                <h1 className="text-white font-schabo lg:text-[13vw] text-[18vw] uppercase leading-none">
                    film projects
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3 pt-2 md:pt-0">
                {firstRow.map((project) => (
                    <ProjectGridItem key={project.slug} project={project} />
                ))}
            </div>

            {/* Row 2 — remaining items (up to 3 per row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {secondRow.map((project) => (
                    <ProjectGridItem key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
