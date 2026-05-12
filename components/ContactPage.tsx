"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// 6 zonas simétricas — centro amarillo, extremos azul
const COLORS = ["#0494B5", "#EA0303", "#FFC002", "#FFC002", "#EA0303", "#0494B5"];

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentZoneRef = useRef(-1);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-item]", containerRef.current);
      gsap.set(items, { opacity: 0, filter: "blur(18px)", y: 18 });
      gsap.to(items, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: { each: 0.18, from: "start" },
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
      <div className="flex flex-col justify-center w-full max-w-full h-full px-8 gap-4 md:gap-0 pt-4">
        <div data-item className="relative w-full lg:w-[96vw] h-40 lg:h-[45vh]">
          <Image
            src="/assets/images/logo/logo-varient.png"
            alt="Kid Canibal"
            fill
            className="object-contain md:object-cover object-bottom-left"
            priority
          />
        </div>

        <div
          data-item
          className="max-w-xl min-w-[40vw] w-full font-inter font-semibold uppercase text-black leading-none lg:text-2xl text-[6vw] pb-8 lg:pb-10 md:pl-4"
        >
          <div className="flex flex-wrap justify-between w-full">
            <span>DIRECTED</span>
            <span>BY</span>
            <span>JULIÁN</span>
            <span>MANUEL</span>
            <span>ROJAS</span>
          </div>

          <div className="flex justify-between w-full">
            <span>A.K.A</span>
            <span>AMERICALATENTE</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between w-full pt-4 md:pt-0">
            <Link href="mailto:juli@kidcanibal.films" className="hover:underline">
              JULI@KIDCANIBAL.COM
            </Link>
            <span>+506 8616 8728</span>
          </div>

          {/* key por índice — letras repetidas hacen inestable key por valor */}
          <div className="flex justify-between w-full pt-4 md:pt-0">
            {["W","O","R","L","D","W","I","D","E"].map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>

          <div className="flex justify-between w-full">
            <Link
              className="hover:underline"
              href="https://www.instagram.com/americalatente/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </Link>
            <Link
              className="hover:underline"
              href="https://vimeo.com/americalatente"
              target="_blank"
              rel="noreferrer"
            >
              VIMEO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;