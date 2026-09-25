'use client'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import AnimatedLink from '../AnimatedLink'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

const CornersMenu = () => {
  const pathname = usePathname()
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.corners-menu', {
       opacity: 0,
       filter: "blur(18px)",
       y: 40,
       duration: 1,
       ease: "power3.out",
       delay: .5,
      }, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        ease: "power3.out",
        delay: 4,
        });
      gsap.fromTo('.corners-menu-logo', {
       opacity: 0,
       filter: "blur(18px)",
       duration: 1,
       ease: "power3.out",
       delay: 2,
      }, {
        opacity: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        delay: 4,
        });
  }, {scope: container});

// Cambiamos HTMLAnchorElement por HTMLButtonElement
const handleLogoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

  return (
    <div ref={container} className={` ${pathname === "/contact" ? " text-black" : "text-white mix-blend-difference"} hidden fixed top-0 left-0 w-screen h-screen lg:flex flex-col p-8 justify-between z-30 pointer-events-none   `}>
          <AnimatedLink href={"/projects"} className={`${pathname === "/projects" ? "font-providence line-through" : ""} corners-menu text-2xl pointer-events-auto left-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>video</AnimatedLink>
          
          {/* Se añade la prop onClick al AnimatedLink */}
          {
            pathname === "/" ?
              <button 
                type='button'
                onClick={handleLogoClick}
                className="corners-menu-logo absolute left-1/2 -translate-x-1/2 pointer-events-auto group"
              >
                <div className="relative">
                  <Image
                    src="/assets/images/logo/logo.webp"
                    alt="Kid Canibal logo"
                    width={105}
                    height={105}
                    className={`object-contain transition-opacity duration-500 group-hover:opacity-0`}
                  />
                  <Image
                    src="/assets/images/kids/kid1.webp"
                    alt="Kid Canibal"
                    width={75}
                    height={75}
                    className={`object-contain absolute -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
                  />
                </div>
              </button>
            :
              <AnimatedLink 
                href={"/"} 
                className="corners-menu-logo absolute left-1/2 -translate-x-1/2 pointer-events-auto group"
              >
                <div className="relative">
                  <Image
                    src="/assets/images/logo/logo.webp"
                    alt="Kid Canibal logo"
                    width={105}
                    height={105}
                    className={`${pathname === "/contact" ? "invert" : ""} object-contain transition-opacity duration-500 group-hover:opacity-0`}
                  />
                  <Image
                    src="/assets/images/kids/kid1.webp"
                    alt="Kid Canibal"
                    width={75}
                    height={75}
                    className={`${pathname === "/contact" ? "invert" : ""} object-contain absolute -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 transition-opacity duration-500 opacity-0 group-hover:opacity-100`}
                  />
                </div>
              </AnimatedLink>
          }

          
          <AnimatedLink href={"/photo"} className={`${pathname === "/photo" ? "font-providence line-through" : ""} corners-menu text-2xl pointer-events-auto right-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500 `}>photo</AnimatedLink>
          <AnimatedLink href={"/about"} className={`${pathname === "/about" ? "font-providence line-through" : ""} corners-menu text-2xl pointer-events-auto left-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500 `}>About</AnimatedLink>
          <AnimatedLink href={"/contact"} className={`${pathname === "/contact" ? "font-providence line-through" : ""} corners-menu text-2xl pointer-events-auto right-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500 `}>contact</AnimatedLink>
    </div>
  )
}

export default CornersMenu