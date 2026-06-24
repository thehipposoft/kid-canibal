"use client";

import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import AnimatedLink from "./AnimatedLink";

gsap.registerPlugin(useGSAP);

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Video", href: "/projects" },
    { label: "Photo", href: "/photo" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const overlayRef  = useRef<HTMLDivElement>(null);
    const navItemsRef = useRef<HTMLDivElement[]>([]);
    const footerRef   = useRef<HTMLParagraphElement>(null);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // GSAP animations
    useGSAP(() => {
        const overlay  = overlayRef.current;
        const items    = navItemsRef.current;
        const footer   = footerRef.current;

        if (!overlay) return;

        if (isOpen) {
            // Show overlay first
            gsap.set(overlay, { display: "flex" });

            // Clip-path circle reveal (same origin as framer-motion)
            gsap.fromTo(
                overlay,
                { clipPath: "circle(0% at calc(100% - 40px) 40px)" },
                {
                    clipPath: "circle(150% at calc(100% - 40px) 40px)",
                    duration: 0.75,
                    ease: "power3.inOut",
                }
            );

            // Nav items: staggered slide-in from right
            gsap.fromTo(
                items,
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    ease: "power2.inOut",
                    stagger: 0.07,
                    delay: 0.25,
                }
            );

            // Footer hint fade-in
            if (footer) {
                gsap.fromTo(
                    footer,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.4, delay: 0.7 }
                );
            }
        } else {
            // Exit: reverse clip-path + fade items out
            gsap.to(items, { opacity: 0, x: 40, duration: 0.3, stagger: 0.04, ease: "power2.in" });
            if (footer) gsap.to(footer, { opacity: 0, duration: 0.2 });

            gsap.to(overlay, {
                clipPath: "circle(0% at calc(100% - 40px) 40px)",
                duration: 0.75,
                ease: "power3.inOut",
                delay: 0.15,
                onComplete: () => {
                    gsap.set(overlay, { display: "none" });
                },
            });
        }
    }, { dependencies: [isOpen] });

    return (
        <>
            {/* Trigger button — always visible on mobile, hidden on lg */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                className="lg:hidden fixed top-6 right-6 z-200 flex items-center gap-1.5 font-inter font-medium uppercase tracking-widest text-sm mix-blend-difference text-white"
            >
                <span className="text-xl tracking-tight">MENU</span>
            </button>

            {/* Full-screen overlay — always mounted, shown/hidden via GSAP */}
            <div
                ref={overlayRef}
                style={{ display: "none", clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
                className="lg:hidden fixed inset-0 z-190 bg-black flex flex-col items-start justify-center px-8"
            >
                {/* Nav items */}
                <nav className="flex flex-col gap-2 w-full">
                    {NAV_ITEMS.map((item, i) => (
                        <div
                            key={item.href}
                            ref={(el) => { if (el) navItemsRef.current[i] = el; }}
                            className="border-b border-white/10 py-6"
                            style={{ opacity: 0, transform: "translateX(40px)" }}
                        >
                            <AnimatedLink
                                href={item.href}
                                className={`text-[10vw] uppercase leading-none text-white transition-colors duration-300 ${
                                    pathname === item.href
                                        ? "font-providence line-through opacity-40"
                                        : "hover:opacity-60"
                                }`}
                            >
                                {item.label}
                            </AnimatedLink>
                        </div>
                    ))}
                </nav>

                {/* Footer hint */}
                <p
                    ref={footerRef}
                    style={{ opacity: 0 }}
                    className="absolute bottom-10 left-8 text-white/30 font-inter text-xs tracking-widest uppercase"
                >
                    BRUTAL. BEAUTIFUL.
                </p>
            </div>
        </>
    );
}
