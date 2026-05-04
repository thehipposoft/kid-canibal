"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({ autoRaf: true });
        (window as Window & { __lenis?: Lenis }).__lenis = lenis;

        return () => {
            lenis.destroy();
            delete (window as Window & { __lenis?: Lenis }).__lenis;
        };
    }, []);

    return <>{children}</>;
}
