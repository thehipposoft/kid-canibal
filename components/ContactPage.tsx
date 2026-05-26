"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// 6 zonas simétricas — centro amarillo, extremos azul
const COLORS = ["#0494B5", "#EA0303", "#FFC002", "#FFC002", "#EA0303", "#0494B5"];

const CharSpan = ({ text, spanClassName }: { text: string; spanClassName?: string }) => (
  <>
    {text.split("").map((char, i) => (
      <span key={i} data-char className={spanClassName} style={{ display: "inline-block" }}>
        {char === " " ? " " : char}
      </span>
    ))}
  </>
);

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentZoneRef = useRef(-1);

  useGSAP(
    () => {
      // Logo entrance
      const items = gsap.utils.toArray<HTMLElement>("[data-item]", containerRef.current);
      gsap.set(items, { opacity: 0, filter: "blur(10px)"});
      gsap.to(items, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        delay: .5,
        ease: "sine.out",
      });

      // All five text rows trigger at the same time, each staggering its own chars
      const rows = gsap.utils.toArray<HTMLElement>("[data-row]", containerRef.current);
      const tl = gsap.timeline({ delay: .5 });
      rows.forEach((row, index) => {
        const chars = gsap.utils.toArray<HTMLElement>("[data-char]", row);
        gsap.set(chars, { opacity: 0, y: 6 });
        tl.to(
          chars,
          {
            opacity: 1,
            y: 0,
            duration: index === 3 ? 4 : 3,
            delay: 1,
            ease: "power3.out",
            stagger: { each: 0.05, from: "start" },
          },
          0 // position 0 = all rows start simultaneously
        );
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // COLORS.length ahora es 6 — sin más cambios
      const zone = Math.min(
        Math.floor((e.clientX / window.innerWidth) * COLORS.length),
        COLORS.length - 1
      );
      if (zone === currentZoneRef.current) return;
      currentZoneRef.current = zone;
      gsap.to(containerRef.current, {
        backgroundColor: COLORS[zone],
        duration: 0.7,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden"
      style={{ backgroundColor: COLORS[0] }} // arranca en azul
    >
      <div className="flex flex-col justify-center w-full max-w-full h-screen px-8 pt-4">
        <div data-item className="relative w-full lg:w-[96vw] h-96 lg:h-[45vh] lg:min-h-85">
          <Image
            src="/assets/images/logo/logo-varient.png"
            alt="Kid Canibal"
            fill
            className="object-contain md:object-cover object-bottom-left hidden lg:block"
            priority
          />
          <Image
            src="/assets/images/kids/logovarient_vertical.png"
            alt="Kid Canibal"
            fill
            className="object-contain lg:hidden"
            priority
          />
        </div>

        <div className="max-w-xl min-w-[40vw] w-full font-inter font-semibold uppercase text-black leading-none lg:text-2xl text-[6vw] pb-8 lg:pb-10">
          <div data-row className="flex flex-wrap justify-between w-full">
            <span><CharSpan text="DIRECTED" /></span>
            <span><CharSpan text="BY" /></span>
            <span><CharSpan text="JULIÁN" /></span>
            <span><CharSpan text="MANUEL" /></span>
            <span><CharSpan text="ROJAS" /></span>
          </div>

          <div data-row className="flex justify-between w-full">
            <span><CharSpan text="A.K.A" /></span>
            <span><CharSpan text="AMERICALATENTE" /></span>
          </div>

          <div data-row className="flex flex-col md:flex-row justify-between w-full pt-4 md:pt-0">
            <Link href="mailto:juli@kidcanibal.films" className="underline hover:font-providence">
              <CharSpan text="JULI@KIDCANIBAL.COM" spanClassName="underline" />
            </Link>
            <span><CharSpan text="+506 8616 8728" /></span>
          </div>

          <div data-row className="flex justify-between w-full pt-4 md:pt-0">
            <CharSpan text="WORLDWIDE" />
          </div>

          <div data-row className="flex justify-between w-full">
            <Link
              className="underline hover:font-providence"
              href="https://www.instagram.com/americalatente/"
              target="_blank"
              rel="noreferrer"
            >
              <CharSpan text="INSTAGRAM" spanClassName="underline" />
            </Link>
            <Link
              className="underline hover:font-providence"
              href="https://vimeo.com/americalatente"
              target="_blank"
              rel="noreferrer"
            >
              <CharSpan text="VIMEO" spanClassName="underline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
