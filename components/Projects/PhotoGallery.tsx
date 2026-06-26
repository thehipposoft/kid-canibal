"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import type { WPImage } from "@/types";
import BackButton from "../BackButton";

interface Props {
  images: WPImage[];
  projectTitle: string;
}

// Distribuye imágenes en N columnas balanceando alturas (masonry real)
function buildColumns(images: WPImage[], count: number): WPImage[][] {
  const columns: WPImage[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);

  for (const img of images) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(img);
    heights[shortest] += img.height / img.width;
  }

  return columns;
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: WPImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];
  const ratio = img.width / img.height;
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) onPrev();
        else if (delta < -50) onNext();
        touchStartX.current = null;
      }}
    >
      <style>{`@keyframes lbFade{from{opacity:0.1}to{opacity:1}}.lb-fade{animation:lbFade 1s ease forwards}`}</style>
      <div
        key={index}
        className="relative lb-fade"
        style={{
          aspectRatio: `${img.width} / ${img.height}`,
          width: ratio > 1 ? "min(90vw, calc(90vh * " + ratio + "))" : "auto",
          height: ratio <= 1 ? "min(90vh, calc(90vw * " + (img.height / img.width) + "))" : "auto",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.url}
          alt={img.alt || ""}
          width={img.width}
          height={img.height}
          className="object-contain"
          quality={95}
          sizes="90vw"
        />
      </div>

      <button
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center text-white/55 hover:text-white transition-colors text-6xl"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >‹</button>
      <button
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center text-white/55 hover:text-white transition-colors text-6xl"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >›</button>

      {/* Mobile: top-left / Desktop: top-right */}
      <button
        className="absolute top-6 left-6 lg:left-auto lg:right-6 text-white/80 hover:text-white tracking-[0.2em] transition-colors"
        onClick={onClose}
      >ESC</button>

      <div className="absolute bottom-6 right-6">
        <span className="text-white/75 text-xs tracking-[0.4em]">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 text-white/75">—</span>
          {String(images.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default function PhotoGallery({ images, projectTitle }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [columnCount, setColumnCount] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setColumnCount(width < 640 ? 2 : width < 1024 ? 2 : 3);
    });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const columns = buildColumns(images, columnCount);

  const getGlobalIndex = useCallback(
    (colIdx: number, rowIdx: number, cols: WPImage[][]) => {
      const img = cols[colIdx][rowIdx];
      return images.findIndex((i) => i.id === img.id);
    },
    [images]
  );

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  return (
    <>
      <section className="w-full px-8 mx-auto pt-16 pb-24">
        <div className="flex justify-between items-center gap-6 mt-10">
          <h1 className="text-white uppercase font-schabo text-[17vw] lg:text-[13vw] leading-none">{projectTitle}</h1>
          <BackButton />
        </div>

        {/* Masonry: columnas flex con aspect-ratio por imagen */}
        <div ref={containerRef} className="flex gap-2 lg:gap-4 items-start">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-2 lg:gap-4 ">
              {col.map((img, rowIdx) => {
                const globalIndex = getGlobalIndex(colIdx, rowIdx, columns);
                return (
                  <div
                    key={img.id}
                    className="relative w-full overflow-hidden cursor-pointer group rounded-sm"
                    style={{ aspectRatio: `${img.width} / ${img.height}` }}
                    onClick={() => openLightbox(globalIndex)}
                  >
                    <Image
                      src={img.thumb ?? img.url}
                      alt={img.alt || `${projectTitle} ${globalIndex + 1}`}
                      width={450}
                      height={675}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading={globalIndex < 6 ? "eager" : "lazy"}
                      sizes={`${Math.round(90 / columnCount)}vw`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                    <span className="absolute bottom-3 right-3 text-white/0 group-hover:text-white/50 text-[10px] tracking-[0.25em] transition-colors duration-300">
                      {String(globalIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
