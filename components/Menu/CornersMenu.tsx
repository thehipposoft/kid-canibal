'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const CornersMenu = () => {
  const pathname = usePathname()
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col p-8 justify-between z-30 pointer-events-none'>
      {
        pathname === "/contact" ? 
        <div className='grid grid-cols-5 w-full pointer-events-none'>
          <Link href={"/work"} className={` text-xl pointer-events-auto uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>work</Link>
          <Link href={"/about"} className={`text-center text-xl pointer-events-auto  uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>About</Link>
          <Link href={"/"} className="flex justify-center items-center relative  pointer-events-auto">
              <Image
                  src="/assets/images/logo/logo.webp"
                  alt="Kid Canibal logo"
                  width={100}
                  height={60}
                  className="object-contain"
              />
          </Link>
          <Link href={"/photography"} className={`text-center text-xl pointer-events-auto uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>photography</Link>
          <Link href={"/contact"} className={`text-right text-xl pointer-events-auto  uppercase font-medium tracking-tighter font-providence line-through duration-500`}>contact</Link>
        </div> 
        :
        <>
          <Link href={"/work"} className={`${pathname === "/work" ? "font-providence line-through" : ""} text-xl pointer-events-auto left-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>work</Link>
            {
              pathname === "/" ? <></>
              :
              <Link href={"/"} className="absolute top-6 left-1/2 -translate-x-1/2 w-[120px] h-[40px] lg:w-[180px] lg:h-[55px] pointer-events-auto">
                  <Image
                      src="/assets/images/logo/logo.webp"
                      alt="Kid Canibal logo"
                      fill
                      className="object-contain"
                  />
              </Link>
            }
            <Link href={"/about"} className={`${pathname === "/about" ? "font-providence line-through" : ""} text-xl pointer-events-auto right-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>About</Link>
            <Link href={"/photography"} className={`${pathname === "/photography" ? "font-providence line-through" : ""} text-xl pointer-events-auto right-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>photography</Link>
            <Link href={"/contact"} className={`${pathname === "/contact" ? "font-providence line-through" : ""} text-xl pointer-events-auto left-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>contact</Link>
        </>
      }

    </div>
  )
}

export default CornersMenu