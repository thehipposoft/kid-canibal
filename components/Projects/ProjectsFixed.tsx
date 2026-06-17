"use client";

import Image from "next/image";
import AnimatedLink from "../AnimatedLink";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import type { Project } from "./index";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProjectsProps {
    projects: Project[];
}

const ProjectCard = ({ project, index, isLast }: { project: Project; index: number; isLast?: boolean }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const chars = gsap.utils.toArray<HTMLElement>(".reveal-char", wrapperRef.current);
            if (!chars.length) return;

            gsap.set(chars, { opacity: 0.05 });
            gsap.to(chars, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: { each: 0.04, from: "start" },
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "5% 40%",
                    end: "35% 35%",
                    toggleActions: "play none none reverse",
                    scrub: 4,
                },
            });

            gsap.from(".line", {
                scaleX: 0,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: { trigger: wrapperRef.current, start: "20% 35%" },
            });

            gsap.from(".info-container", {
                opacity: 0,
                y: 20,
                ease: "power2.out",
                scrollTrigger: { trigger: wrapperRef.current, start: "30% 35%" },
            });
        },
        { scope: wrapperRef, dependencies: [] }
    );

    return (
        <div
            ref={wrapperRef}
            className={`lg:sticky top-0 w-full ${isLast ? "h-screen" : "h-screen"}`}
            style={{ zIndex: index + 1 }}
        >
            <AnimatedLink
                href={project.link}
                className="pointer-events-none lg:pointer-events-auto w-full h-full overflow-hidden"
            >
                <div
                    className="relative w-full h-full video-container"
                    data-cursor={index % 2 === 1 ? "video-red" : "video"}
                >
                    <div className="absolute inset-0 z-0">
                        {project.mediaType === "video" ? (
                            <>
                                {/* Mobile: vertical */}
                                <video
                                    className="block lg:hidden w-full h-full object-cover"
                                    src={project.teaserVerticalSrc ?? project.teaserSrc}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                {/* Desktop: horizontal */}
                                <video
                                    className="hidden lg:block w-full h-full object-cover"
                                    src={project.teaserSrc}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </>
                        ) : (
                            <Image
                                src={project.teaserSrc}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40 z-10" />
                    </div>

                    <div className={`${isLast ? "h-screen lg:h-auto" : "h-screen"} relative z-20 w-full  flex flex-col justify-end lg:justify-start lg:top-[67vh] p-6 md:px-12 md:py-4 gap-4`}>
                        <div className="flex flex-wrap">
                            {project.title.split(" ").map((word, wi) => (
                                <span key={wi} className="flex mr-[0.35em]">
                                    {word.split("").map((char, ci) => (
                                        <span
                                            key={ci}
                                            className="reveal-char font-schabo lg:text-[13vw] text-9xl leading-28 lg:leading-[0.6] uppercase text-white"
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </span>
                            ))}
                        </div>

                        <div className="w-full h-px bg-white/30 line" />

                        <div className="flex justify-center items-center md:py-2">
                            <div className="flex flex-col info-container">
                                <span className="text-sm font-bold tracking-widest text-white/70">
                                    DIRECTED BY:
                                </span>
                                <span className="text-2xl leading-6 font-inter font-light text-white/70">
                                    {project.director}
                                </span>
                                <div className="flex gap-2">
                                    <span className="text-white/50">{project.location}</span>
                                    <span className="text-white/50">- EST. {project.year}</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedLink>
        </div>
    );
};

export default function ProjectsFixed({ projects }: ProjectsProps) {
    return (
        <section className="relative w-full bg-black">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} isLast={index === projects.length - 1} />
            ))}
        </section>
    );
}
