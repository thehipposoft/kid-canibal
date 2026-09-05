"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type Lenis from "lenis";

const INTRO_DURATION = 1;
const STEP_DURATION = 1.3;
const HOLD_DURATION = 1.6;
const EASE = "power3.inOut";
const CHAR_STAGGER = 0.05;
const CHAR_Y_OFFSET = 200;

const VERTICAL_NUDGE_PX = -20;

const MENU_LOGO_DELAY = 4;
const MENU_LOGO_DURATION = 0.5;
const MENU_LOGO_READY_AT = MENU_LOGO_DELAY + MENU_LOGO_DURATION;

const TITLE_EXIT_DURATION = 0.6;

const VIDEO_URL =
  "https://res.cloudinary.com/hipposoft/video/upload/f_auto,q_auto,w_1280/v1771611156/reel_v1_2160p_np35yn.mp4";

// ─── Sub-componentes de texto ──────────────────────────────────────────────

const KidCanibalTitle = ({
  titleRef,
}: {
  titleRef: React.RefObject<HTMLHeadingElement | null>;
}) => (
  <h1
    ref={titleRef}
    className="absolute inset-0 top-32 flex items-center justify-center text-[43vw] leading-none font-schabo uppercase text-white overflow-hidden will-change-transform"
  >
    <span className="inline-block overflow-hidden">
      {"kidcanibal".split("").map((char, i) => (
        <span key={i} className="kid-char inline-block will-change-transform">
          {char}
        </span>
      ))}
    </span>
  </h1>
);

const BrutalBeautifulText = ({
  textRef,
}: {
  textRef: React.RefObject<HTMLParagraphElement | null>;
}) => (
  <p
    ref={textRef}
    className="absolute inset-0 flex items-center justify-center text-center text-[16vw] font-thunder font-bold uppercase leading-none text-white mix-blend-difference will-change-transform"
  >
    BRUTAL. BEAUTIFUL.
  </p>
);

const LongStatement = ({
  textRef,
}: {
  textRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <div
    ref={textRef}
    className="absolute inset-0 flex items-end justify-start px-5 py-12 pointer-events-none sm:p-10 md:px-0 lg:px-8 lg:py-20 mix-blend-difference will-change-transform"
  >
    <div className="w-screen font-thunder font-bold uppercase leading-[0.9] text-white">
      <div className="flex w-full flex-wrap justify-between text-[17vw] lg:text-[8vw]">
        <span>We</span>
        <span>throw</span>
        <span>ourselves</span>
        <span>into</span>
        <span>chaos</span>
      </div>
      <div className="flex w-full flex-wrap justify-between text-[17vw] lg:text-[8vw]">
        <span>and</span>
        <span>turn</span>
        <span>the</span>
        <span>unpredictable</span>
      </div>
      <div className="flex w-full flex-wrap justify-between text-[17vw] lg:text-[8vw]">
        <span>into</span>
        <span>unique</span>
        <span>pieces</span>
      </div>
    </div>
  </div>
);

const MobileLogo = ({
  logoRef,
}: {
  logoRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <div ref={logoRef} className="absolute left-4 top-6 flex justify-between lg:hidden">
    <div className="relative h-[60px] w-[180px]">
      <Image
        src="/assets/images/logo/logo.webp"
        alt="Kid Canibal logo"
        fill
        className="object-contain"
      />
    </div>
  </div>
);

// ─── Componente principal ──────────────────────────────────────────────────

export const BannerVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const kidRef = useRef<HTMLHeadingElement>(null);
  const brutalRef = useRef<HTMLParagraphElement>(null);
  const longTextRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const titleEl = kidRef.current;
      if (!titleEl) return;

      // ─── Bloqueo de scroll, doble capa ──────────────────────────────
      // 1) Nativo, sincrónico, sin depender de nada externo — cubre
      //    rueda del mouse, touch Y teclado (flechas/Space/PageDown),
      //    que Lenis no intercepta por si solo.
      // 2) Lenis, enganchado con polling en rAF — useGSAP corre en un
      //    useLayoutEffect, que en los HIJOS se dispara antes que el
      //    de sus ancestros. Si SmoothScroll (donde se crea Lenis y se
      //    setea window.__lenis) envuelve a este componente más arriba,
      //    "lenis?.stop()" leído una sola vez acá puede correr ANTES de
      //    que window.__lenis exista — por eso fallaba en silencio.
      const html = document.documentElement;
      const { body } = document;
      const prevHtmlOverflow = html.style.overflow;
      const prevBodyOverflow = body.style.overflow;
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";

      const getLenis = () => (window as Window & { __lenis?: Lenis }).__lenis;

      let cancelled = false;
      let lenisInstance: Lenis | undefined;

      const attachLenis = () => {
        if (cancelled) return;
        const found = getLenis();
        if (found) {
          lenisInstance = found;
          found.stop();
        } else {
          requestAnimationFrame(attachLenis); // reintenta hasta que exista
        }
      };
      attachLenis();

      const releaseScroll = () => {
        html.style.overflow = prevHtmlOverflow;
        body.style.overflow = prevBodyOverflow;
        lenisInstance?.start();
      };

      gsap.set(titleEl, {
        scale: 1.1,
        y: VERTICAL_NUDGE_PX,
      });

      const chars = gsap.utils.toArray<HTMLElement>(".kid-char", titleEl);
      gsap.set(chars, {
        opacity: 0,
        y: CHAR_Y_OFFSET,
      });

      gsap.set([brutalRef.current, longTextRef.current, logoRef.current], {
        opacity: 0,
        y: 24,
      });

      const tl = gsap.timeline({ defaults: { ease: EASE } });

      tl.to(titleEl, { scale: 1, y: 0, duration: INTRO_DURATION }, 0)
        .to(
          chars,
          {
            opacity: 1,
            y: 0,
            duration: INTRO_DURATION,
            stagger: { each: CHAR_STAGGER, from: "start" },
          },
          0
        )
        .to({}, { duration: HOLD_DURATION });

      const menuLogo = document.querySelector<HTMLElement>(".corners-menu-logo");

      if (menuLogo) {
        const titleBox = titleEl.getBoundingClientRect();
        const logoBox = menuLogo.getBoundingClientRect();

        const dx = logoBox.left + logoBox.width / 2 - (titleBox.left + titleBox.width / 2);
        const dy = logoBox.top + logoBox.height / 2 - (titleBox.top + titleBox.height / 2);
        const targetScale = logoBox.width / titleBox.width;

        tl.addLabel("toBrutal")
          .to(
            titleEl,
            { x: dx, y: VERTICAL_NUDGE_PX + dy, scale: targetScale, duration: STEP_DURATION },
            "toBrutal"
          )
          .to(brutalRef.current, { opacity: 1, y: 0, duration: STEP_DURATION }, "toBrutal+=0.2")
          .to(logoRef.current, { opacity: 1, y: 0, duration: STEP_DURATION }, "toBrutal+=0.3")
          .to({}, { duration: HOLD_DURATION });
      } else {
        tl.addLabel("toBrutal")
          .to(brutalRef.current, { opacity: 1, y: 0, duration: STEP_DURATION }, "toBrutal")
          .to({}, { duration: HOLD_DURATION });
      }

      tl.addLabel("toLong")
        .to(brutalRef.current, { opacity: 0, y: -24, duration: STEP_DURATION }, "toLong")
        .to(longTextRef.current, { opacity: 1, y: 0, duration: STEP_DURATION }, "toLong+=0.2");

      tl.to(
        titleEl,
        { opacity: 0, duration: TITLE_EXIT_DURATION },
        MENU_LOGO_READY_AT - TITLE_EXIT_DURATION
      );

      tl.eventCallback("onComplete", releaseScroll);

      // Cleanup: si el componente se desmonta a mitad de animación,
      // cancela el polling y restaura scroll igual — evita dejar la
      // página trabada si el usuario navega antes de que termine.
      return () => {
        cancelled = true;
        releaseScroll();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative aspect-video h-screen w-full overflow-hidden rounded-xl bg-black shadow-2xl"
    >
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        Tu navegador no soporta el tag de video.
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <KidCanibalTitle titleRef={kidRef} />
      <BrutalBeautifulText textRef={brutalRef} />
      <LongStatement textRef={longTextRef} />
      <MobileLogo logoRef={logoRef} />
    </div>
  );
};