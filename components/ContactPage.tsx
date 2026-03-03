import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-screen flex flex-col justify-end items-center p-8 gap-8'>
        <div className='flex flex-col gap-2'>
          <Image src="/kid.png" alt='Kid Canibal' width={70} height={70} className='object-contain hidden' />
          <h1 className='font-schabo text-[30vh] leading-[25vh] uppercase tracking-widest hidden'>kidcanibal</h1>
          <div className="relative w-[80vw] h-[45vh]">
              <Image
                  src="/assets/images/logo/logo.webp"
                  alt="Kid Canibal logo"
                  fill
                  className="object-contain"
              />
          </div>
          <h2 className='font-providence text-center text-brand-white text-4xl tracking-[0.4em] uppercase font-semibold'>artists collective</h2>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-thunder text-brand-yellow text-6xl uppercase font-semibold'>Director: Julián Rojas</h1>
            <Link className='font-thunder w-fit hover:underline text-brand-yellow text-6xl  uppercase font-semibold' href="https://www.instagram.com/americalatente/" target='_blank' rel='noreferrer' >@americalatente</Link>
            <Link className='font-thunder w-fit hover:underline text-brand-yellow text-6xl uppercase font-semibold' href="mailto:juli@kidcanibal.films">
                juli@kidcanibal.films
            </Link>
            <Image src="/kid.png" alt='Kid Canibal' width={70} height={70} className='object-contain pt-2' />
        </div>
      </div>
      <div className='h-screen flex justify-center items-center bg-black'>
        <div className='w-3xl flex flex-col justify-between bg-brand-white rounded-2xl p-6 h-[50vh]'>
          <div className='flex justify-between'>
            <h2 className='text-6xl font-thin font-inter text-black'>+</h2>
            <Image src="/assets/images/kids/kidblack1.png" alt='Kid Canibal' width={40} height={40} className='object-contain' />
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='uppercase text-3xl font-semibold text-black font-inter'>directed by</h2>
            <h1 className='uppercase text-9xl text-black font-schabo'>Julián Rojas</h1>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <Link className='font-thunder w-fit hover:underline text-black text-3xl uppercase font-semibold' href="https://www.instagram.com/americalatente/" target='_blank' rel='noreferrer' >@americalatente</Link>
            <Link className='font-thunder w-fit hover:underline text-black text-3xl uppercase font-semibold' href="mailto:juli@kidcanibal.films">
              juli@kidcanibal.films
            </Link>
          </div>
        </div>
      </div>
    </div>
/*      */
  )
}

export default ContactPage

