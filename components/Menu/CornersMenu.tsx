import Link from 'next/link'
import React from 'react'

const CornersMenu = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col p-8 justify-between z-50'>
        <div className='flex justify-between'>
            <Link href={"/work"} className='text-xl uppercase font-inter hover:font-providence hover:line-through duration-500'>work</Link>
            <Link href={"/about"} className='text-xl uppercase font-inter hover:font-providence hover:line-through duration-500'>About</Link>
        </div>
        <div className='flex justify-between'>
            <Link href={"/photography"} className='text-xl uppercase font-inter hover:font-providence hover:line-through duration-500'>photography</Link>
            <Link href={"/contact"} className='text-xl uppercase font-inter hover:font-providence hover:line-through duration-500'>contact</Link>
        </div>
    </div>
  )
}

export default CornersMenu