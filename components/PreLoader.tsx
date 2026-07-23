"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { videoPreloadTracker } from "@/lib/videoPreloadTracker";

// Counter never jumps straight to the real progress: it eases toward it,
// gets capped below 100 until every video actually reports loaded, then
// races to 100 and fades the overlay out.
const CAP_WHILE_LOADING = 92;
const SAFETY_TIMEOUT_MS = 6000;

export default function PreLoader() {
    const [mounted, setMounted] = useState(true);
    const [hidden, setHidden] = useState(false);
    const [display, setDisplay] = useState(0);
    const proxy = useRef({ value: 0 });
    const overlayRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const finishedRef = useRef(false);

    useEffect(() => {
        const finish = () => {
            if (finishedRef.current) return;
            finishedRef.current = true;

            gsap.to(proxy.current, {
                value: 100,
                duration: 0.5,
                ease: "power1.out",
                onUpdate: () => setDisplay(Math.round(proxy.current.value)),
                onComplete: () => {
                    gsap.to(overlayRef.current, {
                        opacity: 0,
                        duration: 0.6,
                        delay: 0.15,
                        ease: "power2.inOut",
                        onStart: () => setHidden(true),
                        onComplete: () => setMounted(false),
                    });
                },
            });
        };

        const update = () => {
            if (finishedRef.current) return;

            if (videoPreloadTracker.isDone()) {
                finish();
                return;
            }

            const target = Math.min(
                CAP_WHILE_LOADING,
                Math.round(videoPreloadTracker.getProgress() * 100)
            );

            if (target > proxy.current.value) {
                gsap.to(proxy.current, {
                    value: target,
                    duration: 0.8,
                    ease: "power1.out",
                    onUpdate: () => setDisplay(Math.round(proxy.current.value)),
                });
            }
        };

        const unsubscribe = videoPreloadTracker.subscribe(update);
        update();

        // Fallback so the site never gets stuck behind the preloader if a
        // video fails to fire a load event.
        const safety = setTimeout(finish, SAFETY_TIMEOUT_MS);

        return () => {
            unsubscribe();
            clearTimeout(safety);
        };
    }, []);

    useEffect(() => {
        if (!lineRef.current) return;
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
        gsap.to(lineRef.current, { scaleX: display / 100, duration: 0.3, ease: "power1.out" });
    }, [display]);

    if (!mounted) return null;

    return (
        <div
            ref={overlayRef}
            className={`fixed inset-0 z-[100] bg-black p-8 flex flex-col justify-end ${hidden ? "pointer-events-none" : ""}`}
        >
            <div className="flex items-end justify-between gap-8">
                <div className="flex flex-col shrink-0">
                    <span className="inline-block w-[4ch] text-left font-schabo text-white text-[11vw] lg:text-[20vw] leading-none uppercase tabular-nums">
                        {display}%
                    </span>
                </div>

                <div className="flex-1 h-px bg-white/20 overflow-hidden mb-3">
                    <div ref={lineRef} className="w-full h-full bg-white" />
                </div>

                <div className="relative w-28 h-28 lg:w-32 lg:h-32 shrink-0">
                    <Image
                        src="/kid.png"
                        alt="Kid Canibal"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
