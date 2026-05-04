"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "hover" | "video" | "video-red";

// Offset classes center the cursor on the pointer per state.
// default/hover: half of 16px circle → -8px
// video: half of 40px triangle → -20px
const offsetClasses: Record<CursorState, string> = {
  default: "-translate-x-[6px] -translate-y-[6px] ",
  hover:   "-translate-x-[6px] -translate-y-[6px] scale-105 ",
  video:   "-translate-x-[8px] -translate-y-[8px] ",
  "video-red": "-translate-x-[8px] -translate-y-[8px] ",
};

// Shape + color of the inner element per state
const innerClasses: Record<CursorState, string> = {
  default: "w-4 h-4 bg-[#FDF9F4] rounded-full ",
  hover:   "w-4 h-4 bg-[#EA0303] rounded-full",
  video:   "w-4 h-4 bg-[#FFC002]",
  "video-red": "w-4 h-4 bg-[#EA0303]",
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPosRef  = useRef({ x: -100, y: -100 }); // Mouse position (target)
  const currentPosRef = useRef({ x: -100, y: -100 }); // Cursor position (lerped)
  const rafRef    = useRef<number | null>(null);
  const [cursorState, setCursorState] = useState<CursorState>("default");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
    };

    // Lerp factor: lower = more delay/smoother (0.1-0.15), higher = snappier (0.2-0.3)
    const lerpFactor = 0.3;

    // rAF loop — smoothly interpolates cursor toward mouse position
    const updatePosition = () => {
      // Lerp: move cursor a fraction of the distance toward target each frame
      currentPosRef.current.x += (targetPosRef.current.x - currentPosRef.current.x) * lerpFactor;
      currentPosRef.current.y += (targetPosRef.current.y - currentPosRef.current.y) * lerpFactor;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPosRef.current.x}px, ${currentPosRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(updatePosition);
    };
    

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const videoContainer = target.closest(".video-container") as HTMLElement;

      if (videoContainer) {
        setCursorState(videoContainer.dataset.cursor === "video-red" ? "video-red" : "video");
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
      targetPosRef.current = { x: -200, y: -200 };
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
      className="fixed top-0 left-0 pointer-events-none z-[99999] will-change-transform mix-blend-difference"
    >
      {/* 2 — offset + blend mode */}
      <div className={`mix-blend-difference duration-500 ${offsetClasses[cursorState]}`}>

        {/* 3 — visible shape */}
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