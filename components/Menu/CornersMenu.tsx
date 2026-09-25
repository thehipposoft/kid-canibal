'use client'
import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import AnimatedLink from '../AnimatedLink'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

// El delay largo (4s) es para sincronizar con la animacion de entrada del
// sitio (VideoBanner, ver MENU_LOGO_DELAY) — pero CornersMenu se remonta
// en cada navegacion (no vive en el layout raiz), asi que sin esto CADA
// cambio de pagina esperaba 4s para mostrar el menu, no solo la primera vez.
let hasAnimatedMenuOnce = false;

// Paginas donde va el wordmark mobile arriba a la izquierda (home ya lo
// tiene resuelto aparte via VideoBanner/MobileLogo, asi que no se repite
// aca para no duplicarlo).
const MOBILE_LOGO_ROUTES = ["/about"];

const isMobileLogoRoute = (pathname: string) =>
  MOBILE_LOGO_ROUTES.includes(pathname) ||
  // /photo/[fotografo], pero no /photo/projects/[slug]
  (pathname.startsWith("/photo/") && !pathname.startsWith("/photo/projects"));

const CornersMenu = () => {
  const pathname = usePathname()
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const delay = hasAnimatedMenuOnce ? 1 : 4;
    hasAnimatedMenuOnce = true;

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
        delay,
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
        delay,
        });
  }, {scope: container});

// Cambiamos HTMLAnchorElement por HTMLButtonElement
const handleLogoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

  return (
    <>
    {isMobileLogoRoute(pathname) && (
      // absolute (no fixed/normal flow): no empuja el contenido de la
      // pagina hacia abajo (eso era lo que rompia el spacing) y tampoco
      // genera su propio bloque en el flujo — un div normal ahi arriba,
      // sin bg propio, dejaba ver el fondo negro global (--background)
      // en vez del fondo real de la pagina (blanco en /about, por eso
      // se veia "todo el contenedor negro" en vez de solo el logo).
      <div className="lg:hidden absolute left-4 top-6 z-20 pointer-events-none">
        <Image
          src="/assets/images/logo/logo.webp"
          alt="Kid Canibal logo"
          width={130}
          height={44}
          className={`object-contain ${pathname === "/about" ? "invert" : ""}`}
        />
      </div>
    )}
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
    </>
  )
}

export default CornersMenu