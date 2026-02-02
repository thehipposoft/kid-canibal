module.exports = [
"[project]/components/PhysicsMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const COLORS = [
    '#C084FC',
    '#FBCFE8',
    '#818CF8',
    '#BEF264',
    '#FB923C',
    '#FCD34D',
    '#6EE7B7',
    '#F472B6'
];
const PhysicsMenu = ()=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // 1. Memorizamos los items para que el color sea estático por ID
    const physicsItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: 'link1',
                type: 'link',
                text: 'Pay as you Go',
                href: '/services/pay-as-you-go',
                width: 140,
                height: 50,
                color: COLORS[0]
            },
            {
                id: 'link2',
                type: 'link',
                text: 'G-Sap',
                href: '/services/g-sap',
                width: 90,
                height: 50,
                color: COLORS[1]
            },
            {
                id: 'link3',
                type: 'link',
                text: 'Figma to Webflow',
                href: '/services/figma-to-webflow',
                width: 180,
                height: 50,
                color: COLORS[2]
            },
            {
                id: 'logo1',
                type: 'image',
                src: '/assets/images/logo/logo.webp',
                alt: 'Logo Deco',
                width: 100,
                height: 100
            }
        ], []);
    const setupMatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!containerRef.current) return;
        const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
        const engine = Engine.create();
        engineRef.current = engine;
        engine.gravity.y = 0; // Sin gravedad para que floten libremente
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        const wallThickness = 100;
        const walls = [
            Bodies.rectangle(containerWidth / 2, -wallThickness / 2, containerWidth, wallThickness, {
                isStatic: true
            }),
            Bodies.rectangle(containerWidth / 2, containerHeight + wallThickness / 2, containerWidth, wallThickness, {
                isStatic: true
            }),
            Bodies.rectangle(-wallThickness / 2, containerHeight / 2, wallThickness, containerHeight, {
                isStatic: true
            }),
            Bodies.rectangle(containerWidth + wallThickness / 2, containerHeight / 2, wallThickness, containerHeight, {
                isStatic: true
            })
        ];
        const bodies = physicsItems.map((item)=>{
            const x = Math.random() * containerWidth;
            const y = Math.random() * containerHeight;
            const body = Bodies.rectangle(x, y, item.width, item.height, {
                chamfer: {
                    radius: item.type === 'image' ? item.width / 2 : 25
                },
                restitution: 0.8,
                frictionAir: 0.02,
                label: item.id
            });
            // 2. Aplicar un pequeño impulso inicial para que se muevan solos al arrancar
            const forceMagnitude = 0.02 * body.mass;
            Body.applyForce(body, body.position, {
                x: (Math.random() - 0.5) * forceMagnitude,
                y: (Math.random() - 0.5) * forceMagnitude
            });
            return body;
        });
        Composite.add(engine.world, [
            ...walls,
            ...bodies
        ]);
        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        Composite.add(engine.world, mouseConstraint);
        Events.on(engine, 'afterUpdate', ()=>{
            setElements(bodies.map((b)=>({
                    id: b.label,
                    x: b.position.x,
                    y: b.position.y,
                    rotation: b.angle
                })));
        });
        const runner = Runner.create();
        Runner.run(runner, engine);
        return ()=>{
            Runner.stop(runner);
            Engine.clear(engine);
        };
    }, [
        physicsItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cleanup = setupMatter();
        return ()=>cleanup?.();
    }, [
        setupMatter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full h-screen bg-black overflow-hidden touch-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-white text-5xl font-bold text-center opacity-40 px-6",
                    children: [
                        "Crafting exquisite websites,",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/components/PhysicsMenu.tsx",
                            lineNumber: 120,
                            columnNumber: 39
                        }, ("TURBOPACK compile-time value", void 0)),
                        "discover the art of Webflow"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PhysicsMenu.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/PhysicsMenu.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            physicsItems.map((item)=>{
                const state = elements.find((el)=>el.id === item.id);
                if (!state) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: item.width,
                        height: item.height,
                        transform: `translate3d(${state.x - item.width / 2}px, ${state.y - item.height / 2}px, 0) rotate(${state.rotation}rad)`,
                        backgroundColor: item.color || 'transparent',
                        zIndex: 10
                    },
                    className: `${item.type === 'link' ? 'rounded-full flex items-center justify-center border border-white/10 shadow-2xl' : ''}`,
                    children: item.type === 'link' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href || '#',
                        className: "w-full h-full flex items-center justify-center text-black font-bold text-xs uppercase px-4 text-center",
                        children: item.text
                    }, void 0, false, {
                        fileName: "[project]/components/PhysicsMenu.tsx",
                        lineNumber: 144,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: item.src,
                            alt: item.alt,
                            fill: true,
                            className: "object-contain pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/components/PhysicsMenu.tsx",
                            lineNumber: 149,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/PhysicsMenu.tsx",
                        lineNumber: 148,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, item.id, false, {
                    fileName: "[project]/components/PhysicsMenu.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/components/PhysicsMenu.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PhysicsMenu;
}),
];

//# sourceMappingURL=components_PhysicsMenu_tsx_c6757f6c._.js.map