"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "hover" | "video";

// Offset classes center the cursor on the pointer per state.
// default/hover: half of 12px circle → -6px
// video: half of 88px wide, 36px tall pill → -44px / -18px
const offsetClasses: Record<CursorState, string> = {
  default: "-translate-x-[6px] -translate-y-[6px] ",
  hover:   "-translate-x-[6px] -translate-y-[6px] scale-105 ",
  video:   "-translate-x-[44px] -translate-y-[18px] ",
};

// Shape + color of the inner element per state
const innerClasses: Record<CursorState, string> = {
  default: "w-4 h-4 bg-[#FDF9F4] rounded-full ",
  hover:   "w-4 h-4 bg-[#EA0303] rounded-full",
  video:   "w-[88px] h-9 bg-[#FFC002] rounded-[8px]",
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef    = useRef({ x: -100, y: -100 });
  const rafRef    = useRef<number | null>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    // rAF loop — keeps pointer tracking smooth
    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(updatePosition);
    };
    

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest(".video-container")) {
        setCursorState("video");
      } else if (
        target.closest("a")                      ||
        target.closest("button")                 ||
        target.closest("[role='button']")         ||
        target.closest("input")                  ||
        target.closest("textarea")               ||
        target.closest("select")                 ||
        (target as HTMLElement).dataset.cursor === "hover"
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    // Park cursor off-screen when the mouse leaves the window
    const handleMouseLeave = () => {
      posRef.current = { x: -200, y: -200 };
    };

    window.addEventListener("mousemove",  moveCursor,      { passive: true });
    window.addEventListener("mouseover",  handleMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove",  moveCursor);
      window.removeEventListener("mouseover",  handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    /*
     * Layer structure (3 divs, outside → inside):
     *
     * 1. cursorRef  — fixed at 0,0; JS drives transform: translate(x,y) for tracking
     * 2. offset div — centers the cursor on the pointer; owns mix-blend-difference
     * 3. inner div  — the visible shape; cursor-transition (global.css) animates
     *                 size / color / radius changes smoothly between states
     */

    // 1 — tracker (JS-owned transform; no Tailwind translate here to avoid conflicts)
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform"
    >
      {/* 2 — offset + blend mode */}
      <div className={`mix-blend-difference duration-500 ${offsetClasses[cursorState]}`}>

        {/* 3 — visible shape */}
        <div
          className={`
            relative flex items-center justify-center
            cursor-transition
            ${innerClasses[cursorState]}
          `}
        >
          {/* WATCH label — only visible in video state */}
          <span
            className={`
              absolute font-semibold text-2xl
              uppercase  text-black select-none font-thunder
              transition-opacity duration-500
              ${cursorState === "video" ? "opacity-100" : "opacity-0"}
            `}
          >
            WATCH
          </span>
        </div>

      </div>
    </div>
  );
}