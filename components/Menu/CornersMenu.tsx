'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const CornersMenu = () => {
  const pathname = usePathname()
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col p-8 justify-between z-30 pointer-events-none'>
            <Link href={"/work"} className={`${pathname === "/work" ? "font-providence line-through" : ""} text-xl pointer-events-auto left-8 top-8 absolute uppercase font-inter hover:font-providence hover:line-through duration-500`}>work</Link>
            <Link href={"/about"} className={`${pathname === "/about" ? "font-providence line-through" : ""} text-xl pointer-events-auto right-8 top-8 absolute uppercase font-inter hover:font-providence hover:line-through duration-500`}>About</Link>
            <Link href={"/photography"} className={`${pathname === "/photography" ? "font-providence line-through" : ""} text-xl pointer-events-auto right-8 bottom-8 absolute uppercase font-inter hover:font-providence hover:line-through duration-500`}>photography</Link>
            <Link href={"/contact"} className={`${pathname === "/contact" ? "font-providence line-through" : ""} text-xl pointer-events-auto left-8 bottom-8 absolute uppercase font-inter hover:font-providence hover:line-through duration-500`}>contact</Link>
    </div>
  )
}

export default CornersMenu