"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Lottie, type LottieHandle } from "lottie-react";
import { preloaderStatus } from "@/lib/preloaderStatus";
import { introStatus } from "@/lib/introStatus";

const FADE_OUT_DURATION = 0.5;
const INTRO_SRC = "/assets/lottie/intro.json";

export const IntroLottie = () => {
    const lottieRef = useRef<LottieHandle>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(!introStatus.isDone());
    const readyRef = useRef(false);
    const preloaderDoneRef = useRef(false);

    // play() antes de que el Lottie termine de cargar (evento "ready") no
    // hace nada, asi que se espera a que se cumplan las dos condiciones:
    // cargado + preloader listo.
    const tryPlay = () => {
        if (readyRef.current && preloaderDoneRef.current) {
            lottieRef.current?.play();
        }
    };

    useEffect(() => {
        if (introStatus.isDone()) return;
        return preloaderStatus.subscribe(() => {
            preloaderDoneRef.current = true;
            tryPlay();
        });
    }, []);

    // Se dispara cuando el Lottie termina su unica pasada (loop=false).
    // Primero funde a opacity:0, RECIEN AHI avisa al resto de la app
    // (introStatus) y se desmonta — evita el corte seco que tenías.
    const handleComplete = () => {
        gsap.to(containerRef.current, {
            opacity: 0,
            duration: FADE_OUT_DURATION,
            ease: "power2.out",
            onComplete: () => {
                introStatus.markDone();
                setVisible(false);
            },
        });
    };

    if (!visible) return null;

    return (
        <div
            ref={containerRef}
            className="pointer-events-none fixed inset-0 z-20 h-screen w-screen"
        >
            <Lottie
                lottieRef={lottieRef}
                src={INTRO_SRC}
                autoplay={false}
                loop={false}
                // assetsPath es prop de nivel superior (UseLottieOptions),
                // no de rendererSettings — el JSON referencia images/img_*.webp
                assetsPath="/assets/lottie/images/"
                subscriptions={{
                    ready: () => {
                        readyRef.current = true;
                        tryPlay();
                    },
                    complete: handleComplete,
                }}
                className="h-full w-full"
                // "slice" = cubre todo el viewport recortando lo que sobre,
                // en vez de "meet" (default) que deja franjas vacías
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
        </div>
    );
};
