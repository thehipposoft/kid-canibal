"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Lottie, type LottieHandle } from "lottie-react";
import { preloaderStatus } from "@/lib/preloaderStatus";
import { introStatus } from "@/lib/introStatus";

const FADE_OUT_DURATION = 0.5;

// Mismo breakpoint que el "md" de Tailwind — por debajo, mobile
const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

const INTRO_SRC_DESKTOP = "/assets/lottie/intro.json";
const INTRO_ASSETS_DESKTOP = "/assets/lottie/images/";

const INTRO_SRC_MOBILE = "/assets/lottie/mobile/intro-mobile.json";
const INTRO_ASSETS_MOBILE = "/assets/lottie/mobile/images/";

export const IntroLottie = () => {
    const lottieRef = useRef<LottieHandle>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(!introStatus.isDone());
    // null = todavía no sabemos qué variante usar. No se puede leer
    // matchMedia en el render inicial porque en SSR no existe `window` —
    // evita el hydration mismatch de golpe mostrar uno y después el otro
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const readyRef = useRef(false);
    const preloaderDoneRef = useRef(false);

    // Se decide UNA sola vez al montar, no con un listener de resize — si
    // alguien rota el celular o cambia el tamaño de ventana a mitad de la
    // animación, no queremos que el Lottie cambie de source en caliente
    // (eso lo reiniciaría de golpe)
    useEffect(() => {
        if (introStatus.isDone()) return;
        setIsMobile(window.matchMedia(MOBILE_MEDIA_QUERY).matches);
    }, []);

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

    // Ya terminó, o todavía no sabemos qué variante mostrar — nada que renderizar
    if (!visible || isMobile === null) return null;

    const src = isMobile ? INTRO_SRC_MOBILE : INTRO_SRC_DESKTOP;
    const assetsPath = isMobile ? INTRO_ASSETS_MOBILE : INTRO_ASSETS_DESKTOP;

    return (
        <div
            ref={containerRef}
            className="pointer-events-none fixed inset-0 z-20 h-screen w-screen"
        >
            <Lottie
                key={src} // fuerza un montaje limpio si src cambiara entre renders
                lottieRef={lottieRef}
                src={src}
                autoplay={false}
                loop={false}
                assetsPath={assetsPath}
                subscriptions={{
                    ready: () => {
                        readyRef.current = true;
                        tryPlay();
                    },
                    complete: handleComplete,
                }}
                className="h-full w-full"
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            />
        </div>
    );
};