"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import AnimatedLink from "./AnimatedLink";

const NAV_ITEMS = [
    { label: "Home",        href: "/" },
    { label: "Work",        href: "/projects" },
    { label: "Photography", href: "/photography" },
    { label: "About",       href: "/about" },
    { label: "Contact",     href: "/contact" },
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            {/* Trigger button — always visible on mobile, hidden on lg */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                className="lg:hidden fixed top-6 right-6 z-200 flex items-center gap-1.5 font-inter font-medium uppercase tracking-widest text-sm mix-blend-difference text-white"
            >
                <motion.span
                    animate={{ opacity: isOpen ? 1 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl tracking-tight"
                >
                    MENU
                </motion.span>
            </button>

            {/* Full-screen overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{
                            clipPath: "circle(0% at calc(100% - 40px) 40px)",
                        }}
                        animate={{
                            clipPath: "circle(150% at calc(100% - 40px) 40px)",
                        }}
                        exit={{
                            clipPath: "circle(0% at calc(100% - 40px) 40px)",
                        }}
                        transition={{
                            duration: 0.75,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                        className="lg:hidden fixed inset-0 z-190 bg-black flex flex-col items-start justify-center px-8"
                    >
                        {/* Nav items */}
                        <nav className="flex flex-col gap-2 w-full">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 40 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: isOpen ? 0.25 + i * 0.07 : 0,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    className="border-b border-white/10 py-4"
                                >
                                    <AnimatedLink
                                        href={item.href}
                                        className={`font-thunder text-[15vw] uppercase leading-none  text-white transition-colors duration-300 ${
                                            pathname === item.href
                                                ? "font-providence line-through opacity-40"
                                                : "hover:opacity-60"
                                        }`}
                                    >
                                        {item.label}
                                    </AnimatedLink>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Footer hint */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                            className="absolute bottom-10 left-8 text-white/30 font-inter text-xs tracking-widest uppercase"
                        >
                            BRUTAL. BEAUTIFUL.
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
