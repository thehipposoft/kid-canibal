"use client";

import { useRef, useState, useEffect, useLayoutEffect, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedLink from "../AnimatedLink";
import FitTitle from "./FitTitle";
import { VideoProject } from "@/types";

// Copy de la seccion. Cada linea es un array de segmentos: los marcados
// como "emphasis" salen grandes/bold, el resto chico — matching el print
// del diseño. El texto va en case normal, el "uppercase" del contenedor
// se encarga de mostrarlo todo en mayuscula.
type CopySegment = { text: string; emphasis?: boolean };

const HERO_COPY: CopySegment[][] = [
    [
        { text: "Embracing the " },
        { text: "chaos of real-time creation, ", emphasis: true },
        { text: "we craft visually " },
        { text: "striking films", emphasis: true },
    ],
    [
        { text: "That blend " },
        { text: "unpolished grit ", emphasis: true },
        { text: "with " },
        { text: "high-end direction.", emphasis: true },
    ],
    [
        { text: "Diving headfirst into " },
        { text: "unpredictable environments, ", emphasis: true },
        { text: "we translate " },
        { text: "real moments", emphasis: true },
    ],
    [
        { text: "Into " },
        { text: "high-contrast cinematic pieces.", emphasis: true },
    ],
];

// Desktop: whitespace-nowrap fuerza las 4 lineas del diseño, y esto mide el
// ancho natural de la linea y la escala con un transform para que siempre
// entre en su contenedor — mismo espiritu que FitTitle, pero via scale (no
// font-size) porque hay dos tamaños de texto mezclados en la misma linea y
// scale los achica a los dos por igual sin romper la proporcion entre ellos.
// Mobile: nada de esto — el texto envuelve normal y usa el espacio vertical
// que necesite, en vez de forzar 4 lineas achicadas.
const DESKTOP_QUERY = "(min-width: 768px)"; // md de Tailwind

function FitLine({ children }: { children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLParagraphElement>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const line = lineRef.current;
        if (!container || !line) return;

        const fit = () => {
            if (!window.matchMedia(DESKTOP_QUERY).matches) {
                setScale(1); // mobile: sin forzar una sola linea, sin escalar
                return;
            }

            const containerWidth = container.clientWidth;
            const naturalWidth = line.scrollWidth;
            if (!containerWidth || !naturalWidth) return;
            // transform no afecta scrollWidth, asi que siempre medimos el
            // ancho real sin escalar, sin necesitar un clon oculto aparte.
            // *0.99 de margen para que un redondeo de 1px no vuelva a cortar.
            setScale(Math.min(1, (containerWidth / naturalWidth) * 0.99));
        };

        fit();
        // Observa el contenedor para reaccionar tambien si el resize cruza
        // el breakpoint desktop/mobile, no solo cambios de ancho en desktop.
        const observer = new ResizeObserver(fit);
        observer.observe(container);
        return () => observer.disconnect();
    }, [children]);

    return (
        // text-center (no flex) a proposito: un flex container con
        // justify-center no reporta el overflow "de arranque" (izquierda)
        // en scrollWidth de forma confiable — el scale salia corto y
        // seguia cortando ambos bordes. text-align:center con contenido
        // inline mide el overflow completo sin ese problema.
        <div ref={containerRef} className="w-full flex justify-center overflow-x-hidden pb-1 md:pb-0">
            <p
                ref={lineRef}
                className="whitespace-normal md:whitespace-nowrap leading-normal md:leading-snug text-center origin-center"
                style={{ transform: `scale(${scale})` }}
            >
                {children}
            </p>
        </div>
    );
}

function ProjectGridItem({ project, aspectClass }: { project: VideoProject; aspectClass: string }) {
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
            <div className={`relative w-full h-full ${aspectClass}`}>
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
// Cada tamaño de fila tiene su propio aspect-ratio: 2 columnas => 16:9,
// 3 columnas => 4:3 (mas espacio vertical al achicarse el ancho por item).
const ROW_PATTERN = [
    { size: 2, gridClass: "grid-cols-1 md:grid-cols-2", aspectClass: "aspect-video" },
    { size: 3, gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3", aspectClass: "aspect-[4/3]" },
] as const;

// Un proyecto con visibilidadGrid ocupa una fila completa por si solo y no
// consume un lugar del patron 2/3: cierra la fila en curso y el patron sigue despues.
// Va en formato panoramico 2.39:1 (cinemascope), no el 16:9 de las demas filas.
function chunkIntoRows(projects: VideoProject[]) {
    const rows: { projects: VideoProject[]; gridClass: string; aspectClass: string }[] = [];
    let buffer: VideoProject[] = [];
    let patternIndex = 0;

    const currentPattern = () => ROW_PATTERN[patternIndex % ROW_PATTERN.length];

    const flush = () => {
        if (!buffer.length) return;
        const pattern = currentPattern();
        rows.push({ projects: buffer, gridClass: pattern.gridClass, aspectClass: pattern.aspectClass });
        patternIndex++;
        buffer = [];
    };

    for (const project of projects) {
        if (project.visibilidadGrid) {
            flush();
            rows.push({ projects: [project], gridClass: "grid-cols-1", aspectClass: "aspect-[2.39/1]" });
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
    const copyRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const segments = gsap.utils.toArray<HTMLElement>(".hero-copy-segment", copyRef.current);
            if (!segments.length) return;

            // Fade con stagger por segmento (no por char/palabra) — da el
            // efecto de que el texto se va "escribiendo" de a bloques.
            gsap.set(segments, { opacity: 0 });
            gsap.to(segments, {
                opacity: 1,
                duration: 0.7,
                ease: "power1.out",
                delay: 0.5,
                stagger: { each: 0.3, from: "start" },
            });
        },
        { scope: copyRef }
    );

    return (
        <section className="w-full min-h-screen bg-black px-4 md:px-8 pt-40 md:pt-48 pb-20">
            <div className="flex pt-4 items-end justify-between">
                <FitTitle text="film projects" className="text-brand-yellow font-schabo uppercase" />
            </div>

            {/* Solo el tamaño diferencia lo grande de lo chico — mismo color
            y peso siempre — y whitespace-nowrap fuerza las 4 lineas del
            diseño en vez de que el ancho del contenedor las parta en mas */}
            <div
                ref={copyRef}
                className="w-full text-center font-inter text-brand-yellow uppercase pt-6 md:pt-4 pb-8 md:pb-12"
            >
                {HERO_COPY.map((line, lineIndex) => (
                    <FitLine key={lineIndex}>
                        {line.map((segment, segmentIndex) => (
                            <span
                                key={segmentIndex}
                                className={`hero-copy-segment ${segment.emphasis ? " text-xl md:text-2xl " : "text-sm"}`}
                            >
                                {segment.text}
                            </span>
                        ))}
                    </FitLine>
                ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 md:pt-0">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className={`grid gap-2 ${row.gridClass}`}>
                        {row.projects.map((project) => (
                            <ProjectGridItem key={project.slug} project={project} aspectClass={row.aspectClass} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
