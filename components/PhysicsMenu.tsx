'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Matter from 'matter-js';
import Image from 'next/image';
import Link from 'next/link';

interface PhysicsItem {
  id: string;
  type: 'link' | 'image';
  text?: string;
  href?: string;
  src?: string;
  alt?: string;
  width: number;
  height: number;
  color?: string; // Color pre-asignado
}

interface ElementState {
  id: string;
  x: number;
  y: number;
  rotation: number;
}

const COLORS = ['#C084FC', '#FBCFE8', '#818CF8', '#BEF264', '#FB923C', '#FCD34D', '#6EE7B7', '#F472B6'];

const PhysicsMenu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const [elements, setElements] = useState<ElementState[]>([]);

  // 1. Memorizamos los items para que el color sea estático por ID
  const physicsItems = useMemo<PhysicsItem[]>(() => [
    { id: 'link1', type: 'link', text: 'Pay as you Go', href: '/services/pay-as-you-go', width: 140, height: 50, color: COLORS[0] },
    { id: 'link2', type: 'link', text: 'G-Sap', href: '/services/g-sap', width: 90, height: 50, color: COLORS[1] },
    { id: 'link3', type: 'link', text: 'Figma to Webflow', href: '/services/figma-to-webflow', width: 180, height: 50, color: COLORS[2] },
    { id: 'logo1', type: 'image', src: '/assets/images/logo/logo.webp', alt: 'Logo Deco', width: 100, height: 100 },
    // Agrega más aquí...
  ], []);

  const setupMatter = useCallback(() => {
    if (!containerRef.current) return;

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    engine.gravity.y = 0; // Sin gravedad para que floten libremente

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const wallThickness = 100;
    const walls = [
      Bodies.rectangle(containerWidth / 2, -wallThickness / 2, containerWidth, wallThickness, { isStatic: true }),
      Bodies.rectangle(containerWidth / 2, containerHeight + wallThickness / 2, containerWidth, wallThickness, { isStatic: true }),
      Bodies.rectangle(-wallThickness / 2, containerHeight / 2, wallThickness, containerHeight, { isStatic: true }),
      Bodies.rectangle(containerWidth + wallThickness / 2, containerHeight / 2, wallThickness, containerHeight, { isStatic: true }),
    ];

    const bodies = physicsItems.map((item) => {
      const x = Math.random() * containerWidth;
      const y = Math.random() * containerHeight;

      const body = Bodies.rectangle(x, y, item.width, item.height, {
        chamfer: { radius: item.type === 'image' ? item.width / 2 : 25 },
        restitution: 0.8,
        frictionAir: 0.02,
        label: item.id,
      });

      // 2. Aplicar un pequeño impulso inicial para que se muevan solos al arrancar
      const forceMagnitude = 0.02 * body.mass;
      Body.applyForce(body, body.position, {
        x: (Math.random() - 0.5) * forceMagnitude,
        y: (Math.random() - 0.5) * forceMagnitude
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
  }, [physicsItems]);

  useEffect(() => {
    const cleanup = setupMatter();
    return () => cleanup?.();
  }, [setupMatter]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden touch-none">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-white text-5xl font-bold text-center opacity-40 px-6">
          Crafting exquisite websites,<br />discover the art of Webflow
        </h1>
      </div>

      {physicsItems.map((item) => {
        const state = elements.find((el) => el.id === item.id);
        if (!state) return null;

        return (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: item.width,
              height: item.height,
              transform: `translate3d(${state.x - item.width / 2}px, ${state.y - item.height / 2}px, 0) rotate(${state.rotation}rad)`,
              backgroundColor: item.color || 'transparent',
              zIndex: 10,
            }}
            className={`${item.type === 'link' ? 'rounded-full flex items-center justify-center border border-white/10 shadow-2xl' : ''}`}
          >
            {item.type === 'link' ? (
              <Link href={item.href || '#'} className="w-full h-full flex items-center justify-center text-black font-bold text-xs uppercase px-4 text-center">
                {item.text}
              </Link>
            ) : (
              <div className="relative w-full h-full p-2">
                <Image src={item.src!} alt={item.alt!} fill className="object-contain pointer-events-none" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PhysicsMenu;