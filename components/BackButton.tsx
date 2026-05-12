"use client";

import { useTransitionRouter } from "next-view-transitions";

export default function BackButton() {
    const router = useTransitionRouter();
    return (
        <button
            onClick={() => router.back()}
            className="text-white/60 hover:text-white hover:underline font-inter text-sm tracking-widest uppercase transition-colors duration-300 pb-2"
        >
            go Back
        </button>
    );
}
