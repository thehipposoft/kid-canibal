'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  // Array con las 5 imágenes para el loop
  const images = [
    '/assets/images/logo/logo.webp',
    '/assets/images/banner/banner-text.png', // Aquí pondrías tus diferentes rutas: /image-1.png, /image-2.png, etc.
    '/assets/images/banner/kid1.png',
    '/assets/images/banner/kid2.png',
    '/assets/images/banner/kid3.png',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='flex flex-col justify-between w-full h-screen bg-black overflow-hidden'>
      {/* Header */}
      <div className='flex justify-end items-center w-full p-6 text-brand-white'>
        <h2 className="uppercase tracking-widest font-thunder">menu</h2>
      </div>

      <div className='h-[80vh] relative flex justify-center items-center'>
        <Image 
          src="/assets/images/banner/banner-1.png" 
          alt="Banner BG" 
          fill 
          className='object-cover opacity-30 blur-[2px]' // Blur sutil al fondo para dar profundidad
          priority 
        />
        
        <div className='relative z-10 w-full h-full flex justify-center items-center'>
          {images.map((src, i) => (
            <div
              key={i}
              className={`
                absolute duration-500
                ${i === index 
                  ? 'opacity-100 blur-none scale-100' // Estado activo: nítido
                  : 'opacity-0 blur-sm scale-95 pointer-events-none' // Estado oculto: desenfoque sutil
                }
              `}
            >
              <div className="relative w-[300px] h-[300px] lg:w-[800px] lg:h-[600px]">
                <Image 
                  src={src} 
                  alt={`Loop element ${i}`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className='flex justify-between p-6 text-brand-white/60 text-sm uppercase font-light'>
        <p>© 2026 kidcanibal. Todos los derechos reservados</p>
        <div>
          <span>INSTAGRAM / SPOTIFY</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;