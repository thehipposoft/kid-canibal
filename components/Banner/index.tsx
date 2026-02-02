 'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const images = [
    '/assets/images/logo/logo.webp',
    '/assets/images/banner/banner-text.png',
    '/assets/images/banner/kid1.png',
    '/assets/images/banner/kid2.png',
    '/assets/images/banner/kid3.png',
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Controla la visibilidad global

  useEffect(() => {
    // Intervalo para el cambio de imágenes
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    // Timer para ocultar el componente a los 6 segundos
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, [images.length]);

  return (
    <div 
      className={`
        flex absolute top-0 flex-col justify-between w-full h-screen bg-black overflow-hidden z-50
        transition-all duration-1000 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
        }
      `}
    >
      {/* Header */}
      <div className='p-6' />

      <div className='h-[80vh] relative flex justify-center items-center'>
        <Image 
          src="/assets/images/banner/banner-1.png" 
          alt="Banner BG" 
          fill 
          className='object-cover opacity-30 blur-[1px]' 
          priority 
        />
        
        <div className='relative z-10 w-full h-full flex justify-center items-center'>
          {images.map((src, i) => (
            <div
              key={i}
              className={`
                absolute transition-all duration-500
                ${i === index 
                  ? 'opacity-100 blur-none scale-100' 
                  : 'opacity-0 blur-sm scale-95 pointer-events-none'
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
          <span>INSTAGRAM</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;