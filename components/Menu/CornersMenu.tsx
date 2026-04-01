'use client'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import AnimatedLink from '../AnimatedLink'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CornersMenu = () => {
  const pathname = usePathname()
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.corners-menu > *', {
       opacity: 0,
       filter: "blur(18px)",
       y: 40,
       duration: 1,
       ease: "power3.out",
       delay: 1,
      }, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "power3.out",
        delay: 1,
        });
  }, {scope: container});

  return (
    <div ref={container} className='hidden fixed top-0 left-0 w-screen h-screen lg:flex flex-col p-8 justify-between z-30 pointer-events-none mix-blend-difference text-white corners-menu'>
          <AnimatedLink href={"/projects"} className={`${pathname === "/projects" ? "font-providence line-through" : ""} text-2xl pointer-events-auto left-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>work</AnimatedLink>
            {
              pathname === "/" ? <></>
              :
              <AnimatedLink href={"/"} className="absolute left-1/2 -translate-x-1/2 uppercase text-2xl font-inter font-medium tracking-tighter hover:font-providence pointer-events-auto hover:line-through">
                home
              </AnimatedLink>
            }
            <AnimatedLink href={"/about"} className={`${pathname === "/about" ? "font-providence line-through" : ""} text-2xl pointer-events-auto right-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500 `}>About</AnimatedLink>
            <AnimatedLink href={"/photography"} className={`${pathname === "/photography" ? "font-providence line-through" : ""} text-2xl pointer-events-auto right-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500 `}>photography</AnimatedLink>
            <AnimatedLink href={"/contact"} className={`${pathname === "/contact" ? "font-providence line-through" : ""} text-2xl pointer-events-auto left-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500 `}>contact</AnimatedLink>
    </div>
  )
}

export default CornersMenu