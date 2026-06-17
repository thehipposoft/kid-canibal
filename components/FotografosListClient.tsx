"use client";

import { useRef, useState, useEffect } from 'react'
import AnimatedLink from './AnimatedLink'
import Image from 'next/image'
import type { WPFotografo } from '@/types'

interface Props {
    fotografos: WPFotografo[]
}

export default function FotografosListClient({ fotografos }: Props) {
    const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
    const [portadaSrc, setPortadaSrc] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mq = window.matchMedia('(pointer: coarse)')
        setIsMobile(mq.matches)
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    useEffect(() => {
        if (isMobile) return
        const handleMouseMove = (e: MouseEvent) => {
            if (!imageRef.current) return
            imageRef.current.style.transform = `translate(${e.clientX - 230}px, ${e.clientY - 130}px)`
        }
        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [isMobile])

    return (
        <div className="h-screen bg-black flex flex-col items-center justify-center">

            {/* Cursor-following image — behind text, desktop only */}
            <div
                ref={imageRef}
                className="fixed top-0 left-0 pointer-events-none z-10 transition-opacity duration-500"
                style={{ opacity: !isMobile && hoveredSlug && portadaSrc ? 1 : 0 }}
            >
                <div className='w-full h-full absolute inset-0 bg-black/30'></div>
                {portadaSrc && (
                    <Image
                        src={portadaSrc}
                        alt=""
                        width={460}
                        height={260}
                        className="object-cover w-[520px] h-[240px]"
                        unoptimized
                    />
                )}
            </div>

            <div className="relative z-20 flex flex-col items-center">

                {/* "photographers" label */}
                <div className="overflow-hidden mb-8 mt-12">
                    <h1
                        data-slide
                        className="font-thunder text-brand-white/70 tracking-widest uppercase leading-none text-center lg:text-[1.5vw] text-[5vw]"
                    >
                        photographers
                    </h1>
                </div>

                {/* Names */}
                <div className="flex flex-col justify-center gap-2 md:gap-0">
                    {fotografos.map((f) => (
                        <div key={f.slug} className="overflow-hidden py-1">
                            <div data-slide>
                                <AnimatedLink
                                    href={`/photo/${f.slug}`}
                                    className={`font-thunder font-bold uppercase leading-[0.85] text-center lg:text-[11vw] text-[18vw] block transition-colors duration-500 ${
                                        hoveredSlug === null
                                            ? 'text-brand-white/65'
                                            : hoveredSlug === f.slug
                                            ? 'text-brand-white/95'
                                            : 'text-brand-white/10'
                                    }`}
                                    onMouseEnter={() => {
                                        if (isMobile) return
                                        setHoveredSlug(f.slug)
                                        if (f.portada_url) setPortadaSrc(f.portada_url)
                                    }}
                                    onMouseLeave={() => {
                                        if (isMobile) return
                                        setHoveredSlug(null)
                                    }}
                                >
                                    {f.title.rendered}
                                </AnimatedLink>
                            </div>
                        </div>
                    ))}
                </div>

                {/* "all projects" link */}
                <div className="overflow-hidden mt-8">
                    <div data-slide>
                        <AnimatedLink
                            href="/photo/projects"
                            className={`font-thunder hover:text-brand-white hover:underline tracking-widest uppercase leading-none text-center lg:text-[1.5vw] text-[5vw] block transition-colors duration-300 ${
                                hoveredSlug === null ? 'text-brand-white/70' : 'text-brand-white/40'
                            }`}
                        >
                            all projects
                        </AnimatedLink>
                    </div>
                </div>

            </div>
        </div>
    )
}
