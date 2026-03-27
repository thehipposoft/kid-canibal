'use client'
import { usePathname } from 'next/navigation'
import AnimatedLink from '../AnimatedLink'

const CornersMenu = () => {
  const pathname = usePathname()
  return (
    <div className='hidden fixed top-0 left-0 w-screen h-screen lg:flex flex-col p-8 justify-between z-30 pointer-events-none mix-blend-difference text-white'>
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