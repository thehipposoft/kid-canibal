"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type Lenis from "lenis";
import { introStatus } from "@/lib/introStatus";

const REVEAL_DURATION = 1;
const REVEAL_STAGGER = 0.1;
const EASE = "power3.inOut";

const VIDEO_URL =
    "https://res.cloudinary.com/hipposoft/video/upload/f_auto,q_auto,w_1280/v1771611156/reel_v1_2160p_np35yn.mp4";

// ─── Sub-componentes ────────────────────────────────────────────────────

const LongStatement = ({
    textRef,
}: {
    textRef: React.RefObject<HTMLDivElement | null>;
}) => (
    <div
        ref={textRef}
        className="absolute inset-0 flex items-end justify-start px-5 py-12 pointer-events-none sm:p-10 md:px-0 lg:px-8 lg:py-20 mix-blend-difference will-change-transform"
    >
        <div className="w-screen font-thunder font-bold uppercase leading-[0.9] text-white">
            <div className="flex w-full flex-wrap justify-between text-[17vw] lg:text-[8vw]">
                <span>We</span>
                <span>throw</span>
                <span>ourselves</span>
                <span>into</span>
                <span>chaos</span>
            </div>
            <div className="flex w-full flex-wrap justify-between text-[17vw] lg:text-[8vw]">
                <span>and</span>
                <span>turn</span>
                <span>the</span>
                <span>unpredictable</span>
            </div>
            <div className="flex w-full flex-wrap justify-between text-[17vw] lg:text-[8vw]">
                <span>into</span>
                <span>unique</span>
                <span>pieces</span>
            </div>
        </div>
    </div>
);

const MobileLogo = ({
    logoRef,
}: {
    logoRef: React.RefObject<HTMLDivElement | null>;
}) => (
    <div ref={logoRef} className="absolute left-4 top-6 flex justify-between lg:hidden">
        <div className="relative h-[60px] w-[180px]">
            <Image
                src="/assets/images/logo/logo.webp"
                alt="Kid Canibal logo"
                fill
                className="object-contain"
            />
        </div>
    </div>
);

// ─── Componente principal ──────────────────────────────────────────────

export const BannerVideo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const longTextRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Bloqueo de scroll — mismo patrón de doble capa que ya tenías,
            // pero ahora se libera cuando termina el Lottie (introStatus),
            // no al final de un timeline propio de este componente
            const html = document.documentElement;
            const { body } = document;
            const prevHtmlOverflow = html.style.overflow;
            const prevBodyOverflow = body.style.overflow;
            html.style.overflow = "hidden";
            body.style.overflow = "hidden";

            const getLenis = () => (window as Window & { __lenis?: Lenis }).__lenis;
            let cancelled = false;
            let lenisInstance: Lenis | undefined;

            const attachLenis = () => {
                if (cancelled) return;
                const found = getLenis();
                if (found) {
                    lenisInstance = found;
                    found.stop();
                } else {
                    requestAnimationFrame(attachLenis);
                }
            };
            attachLenis();

            const releaseScroll = () => {
                html.style.overflow = prevHtmlOverflow;
                body.style.overflow = prevBodyOverflow;
                lenisInstance?.start();
            };

            gsap.set([longTextRef.current, logoRef.current], { opacity: 0, y: 24 });

            const revealFinal = () => {
                gsap.to([longTextRef.current, logoRef.current], {
                    opacity: 1,
                    y: 0,
                    duration: REVEAL_DURATION,
                    ease: EASE,
                    stagger: REVEAL_STAGGER,
                    onComplete: releaseScroll,
                });
            };

            const unsubscribeIntro = introStatus.subscribe(revealFinal);

            return () => {
                cancelled = true;
                unsubscribeIntro();
                releaseScroll();
            };
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="relative aspect-video h-screen w-full overflow-hidden rounded-xl bg-black shadow-2xl"
        >
            <video
                src={VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            >
                Tu navegador no soporta el tag de video.
            </video>

            <div className="absolute inset-0 bg-black/40" />

            <LongStatement textRef={longTextRef} />
            <MobileLogo logoRef={logoRef} />
        </div>
    );
};