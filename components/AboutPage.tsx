"use client";

import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutPageContent = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const tl = gsap.timeline()

            // Kid + title blur IN
            tl.set('[data-kid]', { opacity: 0, filter: 'blur(18px)', y: 18 })
            tl.set('[data-title]', { opacity: 0, filter: 'blur(18px)', y: 18 })
            tl.set('[data-text]', { opacity: 0, filter: 'blur(14px)', y: 22 })

            tl.to('[data-kid]', {
                delay: 1, opacity: 1, filter: 'blur(0px)', y: 0,
                duration: 1.1, ease: 'power3.out',
            })
            tl.to('[data-title]', {
                delay: 1, opacity: 1, filter: 'blur(0px)', y: 0,
                duration: 1.1, ease: 'power3.out',
            }, '<0.18')

            // Hold for 2s, then title blurs OUT
            tl.to('[data-title]', {
                opacity: 0, filter: 'blur(18px)', y: -18,
                duration: 0.8, ease: 'power3.in',
            })

            // Text blurs IN right after title leaves
            tl.to('[data-text]', {
                opacity: 1, filter: 'blur(0px)', y: 0,
                duration: 1.0, ease: 'power3.out',
            }, '-=0.2')
        },
        { scope: containerRef, dependencies: [] }
    )

    return (
        <div
            ref={containerRef}
            className="h-screen flex flex-col gap-2 md:justify-center p-8 lg:p-10 bg-brand-white"
        >
            <div data-kid className="relative w-40 h-40 md:w-20 md:h-20 lg:w-32 lg:h-32 md:mt-0 mt-32">
                <Image
                    src="/assets/images/kids/kidblack2.png"
                    alt="Kid Canibal"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Title and text share the same grid cell so they overlap */}
            <div className="relative">
                <h1
                    data-title
                    className="font-inter font-black text-black uppercase leading-none lg:text-[9vw] text-[14vw]"
                >
                    BRUTAL<span className="font-medium">. BEAUTIFUL.</span>
                </h1>

                <p
                    data-text
                    className="absolute top-0 left-0 w-full leading-none font-inter font-medium uppercase text-black lg:text-[2vw] text-lg text-justify [text-align-last:justify]"
                >
                    <strong>KID CANIBAL</strong> IS A BOUTIQUE FILM STUDIO BUILT ON <strong>INSTINCT</strong> AND CONTROLLED <strong>CHAOS.</strong> WE
                    THROW OURSELVES INTO THE <strong>UNPREDICTABLE</strong> — CAPTURING MOMENTS THAT FEEL ALIVE,
                    RAW AND <strong>REAL. SPONTANEITY</strong> IS NOT RANDOMNESS. IT&apos;S AWARENESS, TIMING, AND{' '}
                    <strong>INTENTION.</strong> WE MOVE FAST, <strong>ADAPT</strong>, AND SHAPE WHAT UNFOLDS INTO IMAGES THAT STAY. WE
                    DON&apos;T FOLLOW FORMULAS. WE RESPOND TO WHAT&apos;S IN FRONT OF US — WITH <strong>SENSITIVITY</strong>{' '}
                    AND <strong>PURPOSE.</strong> PERFECTION IS FORGETTABLE. <strong>FEELING</strong> IS NOT.
                </p>
            </div>
        </div>
    )
}

export default AboutPageContent
