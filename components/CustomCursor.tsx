"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "hover" | "video" | "video-red";

const offsetClasses: Record<CursorState, string> = {
  default: "-translate-x-[6px] -translate-y-[6px] ",
  hover:   "-translate-x-[6px] -translate-y-[6px] scale-105 ",
  video:   "-translate-x-[8px] -translate-y-[8px] ",
  "video-red": "-translate-x-[8px] -translate-y-[8px] ",
};

const innerClasses: Record<CursorState, string> = {
  default: "w-4 h-4 bg-[#FDF9F4] rounded-full ",
  hover:   "w-4 h-4 bg-[#EA0303] rounded-full",
  video:   "w-4 h-4 bg-[#FFC002]",
  "video-red": "w-4 h-4 bg-[#EA0303]",
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPosRef  = useRef({ x: -100, y: -100 });
  const currentPosRef = useRef({ x: -100, y: -100 });
  const rafRef    = useRef<number | null>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setVisible(true);

    const lerpFactor = 0.3;

    const moveCursor = (e: MouseEvent) => {
        targetPosRef.current = { x: e.clientX, y: e.clientY };

        const target = e.target as HTMLElement;
        const videoContainer = target.closest(".video-container") as HTMLElement;

        if (videoContainer) {
            setCursorState(
                videoContainer.dataset.cursor === "video-red" ? "video-red" : "video"
            );
        } else if (
            target.closest("a")               ||
            target.closest("button")          ||
            target.closest("[role='button']") ||
            target.closest("input")           ||
            target.closest("textarea")        ||
            target.closest("select")          ||
            target.dataset.cursor === "hover"
        ) {
            setCursorState("hover");
        } else {
            setCursorState("default");
        }
    };

    const updatePosition = () => {
        currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * lerpFactor;
        currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * lerpFactor;
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${currentPosRef.current.x}px, ${currentPosRef.current.y}px)`;
        }
        rafRef.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseLeave = () => {
        targetPosRef.current = { x: -200, y: -200 };
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
}, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform mix-blend-difference"
    >
      <div className={`mix-blend-difference duration-500 ${offsetClasses[cursorState]}`}>
        <div
          className={`cursor-transition duration-500 ${innerClasses[cursorState]}`}
          style={
            cursorState === "video" || cursorState === "video-red"
              ? { clipPath: "polygon(0 0, 0 100%, 100% 50%)" }
              : undefined
          }
        />
      </div>
    </div>
  );
}
