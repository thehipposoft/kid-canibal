"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "../AnimatedLink";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface Project {
    slug: string;
    title: string;
    director: string;
    year: string;
    location: string;
    link: string;
    teaserSrc: string;
    fullVideoSrc: string;
    mediaType: "image" | "video";
}

interface ProjectsProps {
    projects: Project[];
}

const ProjectCard = ({
    project,
    index,
}: {
    project: Project;
    index: number;
    total: number;
}) => {
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
                stagger: {
                    each: 0.04,
                    from: "start",
                },
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
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "20% 35%",
                },
            });

            gsap.from(".info-container", {
                opacity: 0,
                y: 20,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "30% 35%",
                },
            });
        },
        { scope: wrapperRef, dependencies: [] }
    );

    return (
        // Plain div wrapper so useGSAP has a reliable DOM ref.
        // AnimatedLink can't reliably accept/forward refs, so we scope GSAP here.
        <div ref={wrapperRef} className=" top-0 w-full h-screen">
            <AnimatedLink
                href={project.link}
                className="pointer-events-none lg:pointer-events-auto w-full h-full flex items-center justify-center overflow-hidden block"
            >
                <div className="relative w-full h-full video-container" data-cursor={index % 2 === 1 ? "video-red" : "video"}>
                    {/* ── Media Background ── */}
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
                        <div className="absolute inset-0 bg-black/40 z-10" />
                    </div>

                    {/* ── Content ── */}
                    <div className="relative z-20 w-full h-full flex flex-col justify-end p-6 md:px-12 md:py-4 gap-4">
                        <div>
                            <div className="flex flex-wrap">
                                {project.title.split(" ").map((word: string, wi: number) => (
                                    <span key={wi} className="flex mr-[0.35em]">
                                        {word.split("").map((char: string, ci: number) => (
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
                        </div>

                        <div className="w-full h-px bg-white/30 line" />

                        <div className="flex justify-center items-center  md:py-2">
                            <div className="flex flex-col info-container">
                                <span className="text-sm font-bold tracking-widest text-white/70">
                                    DIRECCIÓN
                                </span>
                                <span className="text-2xl leading-6 font-inter font-light text-white/70">
                                    {project.director}
                                </span>
                                <span className="text-white/50">EST. {project.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedLink>
        </div>
    );
};

// ─── Mobile Card ─────────────────────────────────────────────────────────────
const ProjectCardMobile = ({
    project,
    index,
}: {
    project: Project;
    index: number;
    total: number;
}) => {
    return (
        <div
            className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden video-container"
            style={{ zIndex: index + 1 }}
            data-cursor={index % 2 === 1 ? "video-red" : "video"}
        >
            <div className="relative w-full h-full">
                {/* ── Media Background ── */}
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
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </div>

                {/* ── Content ── */}
                <div className="relative z-20 w-full h-full flex flex-col justify-end px-6 py-8 gap-4">
                    <div>
                        <h2 className="text-white font-schabo lg:text-[13vw] text-9xl leading-28 lg:leading-[0.6] uppercase">
                            {project.title}
                        </h2>
                    </div>

                    <div className="w-full h-px bg-white/30" />

                    <div className="flex justify-between items-center md:py-2">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest text-white">
                                DIRECCIÓN
                            </span>
                            <span className="text-xl leading-6 font-inter font-light text-white/70">
                                {project.director}
                            </span>
                            <span className="text-white/50">EST. {project.year}</span>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href={project.link}
                                className="group lg:hidden flex items-center gap-2 text-white font-inter text-xs md:text-sm tracking-widest uppercase opacity-80 hover:opacity-100 hover:underline transition-opacity"
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

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Projects({ projects }: ProjectsProps) {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)')
        if (!mq.matches) return

        const section = sectionRef.current
        if (!section) return

        type LenisWindow = Window & { __lenis?: import('lenis').default }
        const getLenis = () => (window as LenisWindow).__lenis

        let isAnimating = false

        const getSectionTop = () => section.getBoundingClientRect().top + window.scrollY

        const goTo = (index: number) => {
            const lenis = getLenis()
            if (!lenis) return
            const clamped = Math.max(0, Math.min(projects.length - 1, index))
            isAnimating = true
            lenis.scrollTo(getSectionTop() + clamped * window.innerHeight, {
                duration: 1.5,
                easing: (t: number) => 1 - Math.pow(1 - t, 4),
            })
            setTimeout(() => { isAnimating = false }, 1300)
        }

        const handleWheel = (e: WheelEvent) => {
            const sectionTop = getSectionTop()
            const scrollY = window.scrollY
            const vh = window.innerHeight
            const currentIndex = Math.round((scrollY - sectionTop) / vh)
            const inSection = scrollY >= sectionTop - vh * 0.3 && scrollY <= sectionTop + (projects.length - 0.5) * vh

            if (!inSection) return

            // Let the wheel escape at the edges so the user can reach other sections
            if (currentIndex <= 0 && e.deltaY < 0) return
            if (currentIndex >= projects.length - 1 && e.deltaY > 0) return

            // Capture phase: stop Lenis from also processing this event
            e.preventDefault()
            e.stopPropagation()
            if (isAnimating) return

            goTo(currentIndex + (e.deltaY > 0 ? 1 : -1))
        }

        // capture: true fires before Lenis's bubble-phase listener
        window.addEventListener('wheel', handleWheel, { passive: false, capture: true })
        return () => window.removeEventListener('wheel', handleWheel, { capture: true })
    }, [projects.length])

    return (
        <section ref={sectionRef} className="relative w-full bg-black h-screen">
            {/* Mobile */}
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

            {/* Desktop */}
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