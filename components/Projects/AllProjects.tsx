"use client";

import { useRef, useState, useEffect } from "react";
import AnimatedLink from "../AnimatedLink";
import { VideoProject } from "@/types";

function ProjectGridItem({ project }: { project: VideoProject }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hovered, setHovered] = useState(false);

    // On mobile there's no hover, so autoplay on mount
    useEffect(() => {
        if (window.matchMedia("(max-width: 1023px)").matches) {
            videoRef.current?.play();
        }
    }, []);

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
            href={`/projects/${project.slug}`}
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

// Filas alternadas: 2, 3, 2, 3... Las clases van completas para que Tailwind las detecte.
const ROW_PATTERN = [
    { size: 2, gridClass: "grid-cols-1 md:grid-cols-2" },
    { size: 3, gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" },
] as const;

// Un proyecto con visibilidadGrid ocupa una fila completa por si solo y no
// consume un lugar del patron 2/3: cierra la fila en curso y el patron sigue despues.
function chunkIntoRows(projects: VideoProject[]) {
    const rows: { projects: VideoProject[]; gridClass: string }[] = [];
    let buffer: VideoProject[] = [];
    let patternIndex = 0;

    const currentPattern = () => ROW_PATTERN[patternIndex % ROW_PATTERN.length];

    const flush = () => {
        if (!buffer.length) return;
        rows.push({ projects: buffer, gridClass: currentPattern().gridClass });
        patternIndex++;
        buffer = [];
    };

    for (const project of projects) {
        if (project.visibilidadGrid) {
            flush();
            rows.push({ projects: [project], gridClass: "grid-cols-1" });
            continue;
        }

        buffer.push(project);
        if (buffer.length === currentPattern().size) flush();
    }
    flush();

    return rows;
}

export default function AllProjects({ projects }: { projects: VideoProject[] }) {
    const rows = chunkIntoRows(projects);

    return (
        <section className="w-full min-h-screen bg-black px-4 md:px-8 py-20">
            <div className="flex pt-4 items-end justify-between">
                <h1 className="text-white font-schabo lg:text-[13vw] text-[18vw] uppercase leading-none">
                    film projects
                </h1>
            </div>

            <div className="flex flex-col gap-3 pt-2 md:pt-0">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className={`grid gap-5 ${row.gridClass}`}>
                        {row.projects.map((project) => (
                            <ProjectGridItem key={project.slug} project={project} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
