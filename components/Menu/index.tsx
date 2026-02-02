'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Matter from 'matter-js';

// --- Tipos ---
interface PhysicsItem {
  id: string;
  type: 'link' | 'image';
  text?: string;
  href?: string;
  src?: string;
  alt?: string;
  width: number;
  height: number;
  color?: string;
}

interface ElementState {
  id: string;
  x: number;
  y: number;
  rotation: number;
}

const COLORS = ['#0494B5', '#FFC002', '#EA0303'];

const Menu = ({ hiddeOnDesktop }: { hiddeOnDesktop?: boolean }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const [elements, setElements] = useState<ElementState[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null); // Estado para el hover

  const physicsItems = useMemo<PhysicsItem[]>(() => [
    { id: 'l1', type: 'link', text: 'Home', width: 180, height: 45, color: COLORS[0] },
    { id: 'l2', type: 'link', text: 'About', width: 180, height: 45, color: COLORS[1] },
    { id: 'l3', type: 'link', text: 'Archivo', width: 180, height: 45, color: COLORS[2] },
    { id: 'l4', type: 'link', text: 'Services', width: 180, height: 45, color: COLORS[0] },
    { id: 'l5', type: 'link', text: 'Contact', width: 180, height: 45, color: COLORS[1] },
    { id: 'l6', type: 'link', text: 'Directors', width: 180, height: 45, color: COLORS[2] },
    { id: 'l7', type: 'link', text: 'Photography', width: 180, height: 45, color: COLORS[0] },
    { id: 'img1', type: 'image', src: '/assets/images/kids/kidblack1.png', alt: 'logo', width: 50, height: 50 },
    { id: 'img2', type: 'image', src: '/assets/images/kids/kidblack2.png', alt: 'logo', width: 50, height: 50 },
    { id: 'img3', type: 'image', src: '/assets/images/kids/kidblack3.png', alt: 'logo', width: 50, height: 50 },
  ], []);

  const setupMatter = useCallback(() => {
    if (!containerRef.current || !openMenu) return;

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;
    const engine = Engine.create();
    engineRef.current = engine;
    engine.gravity.y = 0.5;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const wallThickness = 60;
    const walls = [
      Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }),
      Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }),
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
      Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
    ];

    const bodies = physicsItems.map((item) => {
      const x = Math.random() * (width - 40) + 20;
      const y = Math.random() * (height / 2);
      const body = Bodies.rectangle(x, y, item.width, item.height, {
        chamfer: { radius: item.type === 'image' ? 15 : 22 },
        restitution: 0.7,
        frictionAir: 0.03,
        label: item.id,
      });

      Body.applyForce(body, body.position, {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01
      });
      return body;
    });

    Composite.add(engine.world, [...walls, ...bodies]);

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(engine.world, mouseConstraint);

    Events.on(engine, 'afterUpdate', () => {
      setElements(bodies.map(b => ({
        id: b.label,
        x: b.position.x,
        y: b.position.y,
        rotation: b.angle,
      })));
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, [openMenu, physicsItems]);

  useEffect(() => {
    const cleanup = setupMatter();
    return () => cleanup?.();
  }, [setupMatter]);

  return (
    <div className={`${hiddeOnDesktop ? 'lg:hidden block' : ''} fixed flex items-center top-0 right-0 z-40`}>
      <button 
        className='fixed z-50 px-1 py-1 duration-500 cursor-pointer top-7 right-10 rounded-xl outline-none'
        onClick={() => setOpenMenu(!openMenu)}
      >
        <svg width="35" height="35" viewBox="0 0 30 15" fill="none">
          <rect className={`duration-500 transition-all origin-center ${openMenu ? 'rotate-45 translate-y-[6px] translate-x-[2px] fill-black' : 'fill-white'}`} y="0" width="25" height="2.25" rx="1.125" />
          <rect className={`duration-500 ${openMenu ? 'opacity-0' : 'opacity-100'} fill-white`} y="6.125" width="25" height="2.25" rx="1.125" />
          <rect className={`duration-500 transition-all origin-center ${openMenu ? '-rotate-45 -translate-y-[6.5px] translate-x-[2px] fill-black' : 'fill-white'}`} y="12.25" width="25" height="2.25" rx="1.125" />
        </svg>
      </button>

      <div className='fixed z-50 w-10 h-10 top-7 left-10'>
        <Image src={'/kid.png'} alt='KidCanibal logo' fill className='object-contain' />
      </div>

      <nav 
        ref={containerRef}
        className={`
          fixed top-0 right-0 bg-white w-full h-screen md:w-[350px] 2xl:w-[400px] md:h-[600px] md:top-6 md:right-6 
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
          ${openMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
          md:rounded-3xl shadow-2xl touch-none
        `}
      >
        {openMenu && physicsItems.map((item) => {
          const state = elements.find((el) => el.id === item.id);
          if (!state) return null;

          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: item.width,
                height: item.height,
                transform: `translate3d(${state.x - item.width / 2}px, ${state.y - item.height / 2}px, 0) rotate(${state.rotation}rad)`,
                // Cambio dinámico de colores
                backgroundColor: isHovered ? '#FDF9F4' : (item.color || 'transparent'),
                border: item.type === 'link' ? `2px solid ${item.color}` : 'none',
                zIndex: 10,
              }}
              className={`
                transition-colors duration-200
                ${item.type === 'link' ? 'rounded-full flex items-center justify-center shadow-lg cursor-pointer' : 'cursor-grab'}
              `}
            >
              {item.type === 'link' ? (
                <div className="w-full h-full flex items-center justify-center text-black font-bold font-thunder text-3xl uppercase px-4 select-none">
                  {item.text}
                </div>
              ) : (
                <div className="relative w-full h-full p-1">
                  <Image src={item.src!} alt={item.alt!} fill className="object-contain pointer-events-none" />
                </div>
              )}
            </div>
          );
        })}

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <span className="text-8xl font-black rotate-90">MENU</span>
        </div>
      </nav>
    </div>
  );
};

export default Menu;