"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_DURATION = 3000; // ms a slide is fully visible
const TRANSITION_MS = 1000;  // ms for blur-in / blur-out
const TOTAL_SLIDES = 3;

// Each mounted slide manages its own in/out opacity so both can co-exist
// during the crossfade, giving us a clean blur-in AND blur-out.
function SlideWrapper({
    children,
    onDone,
    isLeaving,
}: {
    children: React.ReactNode;
    onDone?: () => void;
    isLeaving: boolean;
}) {
    const [mounted, setMounted] = useState(false);

    // Kick off blur-IN on the very next frame after mount
    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const cls = `absolute inset-0 transition-all ease-in-out pointer-events-none
    ${isLeaving ? "opacity-0 blur-md scale-105" : mounted ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-95"}`;

    return (
        <div
            className={cls}
            style={{ transitionDuration: `${TRANSITION_MS}ms` }}
            onTransitionEnd={isLeaving ? onDone : undefined}
        >
            {children}
        </div>
    );
}

// ─── Slide content components ──────────────────────────────────────────────

function Slide0() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-[42vw] max-h-[65vh] leading-none uppercase font-schabo">kidcanibal</h1>
        </div>
    );
}

function Slide1() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <p
                className="font-thunder font-bold text-white text-center leading-none uppercase text-[16vw]"
            >
                BRUTAL. BEAUTIFUL.
            </p>
        </div>
    );
}

// Slide2 only renders logos — text lives outside SlideWrapper so
// mix-blend-difference can reach the video/overlay without being trapped
// inside the stacking context created by SlideWrapper's transform/filter.
function Slide2() {
    return (
        <div className="absolute inset-0">
            <div className="flex absolute top-6 left-4 lg:hidden justify-between">
                <div className="w-[180px] h-[60px]">
                    <Image
                        src="/assets/images/logo/logo.webp"
                        alt="Kid Canibal logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

function Slide2Text({ visible }: { visible: boolean }) {
    return (
        <div
            className="absolute inset-0 flex items-end justify-start py-12 sm:p-10 lg:px-8 lg:py-20 pointer-events-none transition-opacity ease-in-out"
            style={{ transitionDuration: `${TRANSITION_MS}ms`, opacity: visible ? 1 : 0 }}
        >
            <div className="w-screen uppercase leading-[0.9] font-thunder font-bold px-5 md:px-0 text-white mix-blend-difference">
                <div className="flex justify-between w-full flex-wrap lg:text-[8vw] text-[17vw]">
                    <span>We</span>
                    <span>throw</span>
                    <span>ourselves</span>
                    <span>into</span>
                    <span>chaos</span>
                </div>
                <div className="flex justify-between w-full flex-wrap lg:text-[8vw] text-[17vw]">
                    <span>and</span>
                    <span>turn</span>
                    <span>the</span>
                    <span>unpredictable</span>
                </div>
                <div className="flex justify-between w-full flex-wrap lg:text-[8vw] text-[17vw]">
                    <span>into</span>
                    <span>unique</span>
                    <span>pieces</span>
                </div>
            </div>
        </div>
    );
}

const SLIDES = [Slide0, Slide1, Slide2];

// ─── Main component ────────────────────────────────────────────────────────

export default function BannerVideo() {
    const videoUrl =
        "https://res.cloudinary.com/hipposoft/video/upload/f_auto,q_auto,w_1280/v1771611156/reel_v1_2160p_np35yn.mp4";

    // `current` = the slide being shown, `prev` = the one fading out
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState<number | null>(null);

        useEffect(() => {
            if (current >= TOTAL_SLIDES - 1) return; // stop at last slide
    
            const id = setTimeout(() => {
                setPrev(current);
                setCurrent((c) => c + 1);
            }, SLIDE_DURATION);
    
            return () => clearTimeout(id);
        }, [current]);

    const CurrentSlide = SLIDES[current];
    const PrevSlide = prev !== null ? SLIDES[prev] : null;

    return (
        <div className="relative h-screen w-full overflow-hidden rounded-xl aspect-video bg-black shadow-2xl">
            {/* Background video */}
            <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
            >
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Outgoing slide — fades/blurs OUT */}
            {PrevSlide && (
                <SlideWrapper
                    key={`prev-${prev}`}
                    isLeaving={true}
                    onDone={() => setPrev(null)}
                >
                    <PrevSlide />
                </SlideWrapper>
            )}

            {/* Incoming slide — blurs IN */}
            <SlideWrapper key={`current-${current}`} isLeaving={false}>
                <CurrentSlide />
            </SlideWrapper>

            {/* Slide2 text — outside SlideWrapper so mix-blend-difference
                blends with the video/overlay, not an isolated stacking context */}
            <Slide2Text visible={current === 2} />
        </div>
    );
}
