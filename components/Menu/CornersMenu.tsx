'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const CornersMenu = () => {
  const pathname = usePathname()
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col p-8 justify-between z-30 pointer-events-none'>
          <Link href={"/work"} className={`${pathname === "/work" ? "font-providence line-through" : ""} text-2xl pointer-events-auto left-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>work</Link>
            {
              pathname === "/" ? <></>
              :
              <Link href={"/"} className="absolute left-1/2 -translate-x-1/2 uppercase text-2xl font-inter font-medium tracking-tighter hover:font-providence pointer-events-auto hover:line-through">
                home
              </Link>
            }
            <Link href={"/about"} className={`${pathname === "/about" ? "font-providence line-through" : ""} text-2xl pointer-events-auto right-8 top-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>About</Link>
            <Link href={"/photography"} className={`${pathname === "/photography" ? "font-providence line-through" : ""} text-2xl pointer-events-auto right-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>photography</Link>
            <Link href={"/contact"} className={`${pathname === "/contact" ? "font-providence line-through" : ""} text-2xl pointer-events-auto left-8 bottom-8 absolute uppercase font-inter font-medium tracking-tighter hover:font-providence hover:line-through duration-500`}>contact</Link>
    </div>
  )
}

export default CornersMenu