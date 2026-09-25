"use client";

import { useLayoutEffect, useRef, useState } from "react";

// Tamaño de referencia solo para medir — el resultado final es siempre
// proporcional, así que el valor en si no importa.
const BASE_FONT_SIZE_PX = 100;

interface Props {
    text: string;
    className?: string;
}

// Escala el font-size para que el texto, en una sola linea, ocupe siempre
// el ancho completo del contenedor — sin esto, un texto en vw fijo solo
// "se ve bien" cuando su ancho natural coincide con el del viewport, y en
// nombres largos que envuelven a 2 lineas cada linea queda con espacio
// vacío a la derecha.
export default function FitTitle({ text, className = "" }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLSpanElement>(null);
    const [fontSize, setFontSize] = useState<number | null>(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const measure = measureRef.current;
        if (!container || !measure) return;

        const fit = () => {
            const containerWidth = container.clientWidth;
            const naturalWidth = measure.scrollWidth;
            if (!containerWidth || !naturalWidth) return;
            setFontSize((containerWidth / naturalWidth) * BASE_FONT_SIZE_PX);
        };

        fit();
        // La primera medicion puede correr contra la fuente de fallback si
        // Thunder (next/font/local) todavia no cargo — se vuelve a medir
        // cuando el navegador confirma que ya esta aplicada.
        document.fonts?.ready.then(fit);

        const observer = new ResizeObserver(fit);
        observer.observe(container);
        return () => observer.disconnect();
    }, [text]);

    return (
        // Sin overflow-hidden a proposito: con un leading tan ajustado, la
        // caja de línea queda más baja que la tinta real del glyph (sube
        // por arriba y sobra por abajo) — clipear esa caja corta la parte
        // de arriba de las letras en vez de solo recortar el margen.
        <div ref={containerRef} className="w-full">
            <span
                ref={measureRef}
                aria-hidden
                className={`${className} pointer-events-none absolute whitespace-nowrap`}
                style={{ fontSize: BASE_FONT_SIZE_PX, top: -9999, left: -9999, visibility: "hidden" }}
            >
                {text}
            </span>
            <h1
                className={`${className} whitespace-nowrap leading-[0.70]`}
                style={{
                    fontSize: fontSize ? `${fontSize}px` : undefined,
                    visibility: fontSize ? "visible" : "hidden",
                }}
            >
                {text}
            </h1>
        </div>
    );
}
