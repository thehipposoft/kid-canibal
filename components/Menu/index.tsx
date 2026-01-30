'use client';
import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link';

type MenuTypes = {
    hiddeOnDesktop?: boolean;
}

const Menu = ({hiddeOnDesktop}:MenuTypes) => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const openMenuFunc = () => setOpenMenu(!openMenu);


  return (
    <div className={`${hiddeOnDesktop ? 'lg:hidden block' : ''} fixed top-0 right-0 z-40`}>
        <button 
            className='fixed z-50 px-1 py-1 duration-500 cursor-pointer top-7 right-8 hover:bg-black/30 bg-green-blur backdrop-blur-md rounded-xl'
            onClick={openMenuFunc}
        >
            <svg width="35" height="35" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect 
                    className={`duration-500 transition-all origin-center ${
                        openMenu ? 'rotate-45 translate-y-[6px] translate-x-[2px] fill-white' : 'fill-white/75'
                    }`} 
                    y="0" width="25" height="2.25" rx="1.125" 
                />
                <rect 
                    className={`duration-500 fill-white/75 ${
                        openMenu ? 'opacity-0' : 'opacity-100'
                    }`} 
                    y="6.125" width="25" height="2.25" rx="1.125"
                />
                <rect 
                    className={`duration-500 transition-all origin-center ${
                        openMenu ? '-rotate-45 -translate-y-[6.5px] translate-x-[2px] fill-white' : 'fill-white/75'
                    }`} 
                    y="12.25" width="25" height="2.25" rx="1.125"
                />
            </svg>
        </button>
        <nav className={`
            menu top-20 right-8 absolute bg-white lg:w-[350px] lg:h-[500px] flex flex-col justify-center px-12 py-16 z-40
            transition-all duration-500 
            ${openMenu ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
            md:rounded-xl 
        `}>
            <ul className='menu__items flex flex-col gap-6 md:gap-4'>
            </ul>
        </nav>
    </div>
  )
}

export default Menu