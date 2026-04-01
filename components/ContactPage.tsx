"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ContactPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // ── Hero section entrance (on mount) ─────────────────────────────────────
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-hero-item]", heroRef.current);

      gsap.set(items, { opacity: 0, filter: "blur(18px)", y: 18 });

      gsap.to(items, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: {
          each: 0.18,
          from: "start",
        },
      });
    },
    { scope: heroRef, dependencies: [] }
  );

  // ── Card section entrance (on scroll) ────────────────────────────────────
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-card-item]", cardRef.current);

      gsap.set(items, { opacity: 0, filter: "blur(14px)", y: 22 });

      gsap.to(items, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        stagger: {
          each: 0.14,
          from: "start",
        },
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: cardRef, dependencies: [] }
  );

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="h-screen flex flex-col lg:justify-end justify-center items-center p-8 lg:gap-8 gap-6"
      >
        {/* Logo block */}
        <div className="flex flex-col lg:gap-2 gap-4">
          <h1
            data-hero-item
            className="font-schabo lg:text-[30vh] lg:leading-[25vh] uppercase tracking-widest hidden"
          >
            kidcanibal
          </h1>

          <div
            data-hero-item
            className="relative lg:w-[70vw] w-[85vw] lg:h-[35vh] h-[20vh]"
          >
            <Image
              src="/assets/images/logo/logo.webp"
              alt="Kid Canibal logo"
              fill
              className="object-contain"
            />
          </div>

          <h2
            data-hero-item
            className="font-providence text-center text-brand-white lg:text-4xl text-2xl tracking-[0.4em] uppercase font-semibold leading-5 lg:leading-none"
          >
            artists collective
          </h2>
        </div>

        {/* Director info */}
        <div className="flex flex-col justify-center items-center">
          <h1
            data-hero-item
            className="font-thunder text-brand-yellow lg:text-7xl text-4xl uppercase font-semibold"
          >
            Director: Julián Rojas
          </h1>

          <Link
            data-hero-item
            className="font-thunder w-fit hover:underline text-brand-yellow lg:text-7xl text-4xl uppercase font-semibold"
            href="https://www.instagram.com/americalatente/"
            target="_blank"
            rel="noreferrer"
          >
            @americalatente
          </Link>

          <Link
            data-hero-item
            className="font-thunder w-fit hover:underline text-brand-yellow lg:text-7xl text-4xl uppercase font-semibold"
            href="mailto:juli@kidcanibal.films"
          >
            juli@kidcanibal.films
          </Link>

          <Image
            data-hero-item
            src="/kid.png"
            alt="Kid Canibal"
            width={70}
            height={70}
            className="object-contain pt-2"
          />
        </div>
      </div>

      {/* ── Card ──────────────────────────────────────────────────────────── */}
      <div
        ref={cardRef}
        className="h-screen flex justify-center items-center bg-black"
      >
        <div className="lg:w-3xl w-[90vw] flex flex-col justify-between bg-brand-white rounded-2xl p-6 h-[50vh]">

          {/* Top row */}
          <div className="flex justify-between">
            <h2 data-card-item className="text-6xl font-thin font-inter text-black">
              +
            </h2>
            <Image
              data-card-item
              src="/assets/images/kids/kidblack1.png"
              alt="Kid Canibal"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Center */}
          <div className="flex flex-col justify-center items-center gap-4">
            <h2
              data-card-item
              className="uppercase text-3xl font-semibold text-black font-inter"
            >
              directed by
            </h2>
            <h1
              data-card-item
              className="uppercase lg:text-9xl text-7xl text-black font-schabo"
            >
              Julián Rojas
            </h1>
          </div>

          {/* Bottom row */}
          <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
            <Link
              data-card-item
              className="font-thunder w-fit hover:underline text-black text-3xl uppercase font-semibold"
              href="https://www.instagram.com/americalatente/"
              target="_blank"
              rel="noreferrer"
            >
              @americalatente
            </Link>
            <Link
              data-card-item
              className="font-thunder w-fit hover:underline text-black text-3xl uppercase font-semibold"
              href="mailto:juli@kidcanibal.films"
            >
              juli@kidcanibal.films
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactPage;