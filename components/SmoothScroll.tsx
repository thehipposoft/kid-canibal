"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({ autoRaf: true });
        lenisRef.current = lenis;
        (window as Window & { __lenis?: Lenis }).__lenis = lenis;

        return () => {
            lenis.destroy();
            lenisRef.current = null;
            delete (window as Window & { __lenis?: Lenis }).__lenis;
        };
    }, []);

    // Lenis guarda su propio scroll "target" y lo re-aplica en un loop de
    // rAF — un router.push a otra pagina resetea el scroll nativo, pero
    // Lenis lo vuelve a llevar adonde estaba (por eso la pagina nueva
    // aparecia scrolleada). Hay que resetear tambien a Lenis, no solo al
    // navegador.
    useEffect(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    }, [pathname]);

    return <>{children}</>;
}
