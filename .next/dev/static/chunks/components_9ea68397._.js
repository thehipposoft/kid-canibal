(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Banner/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Banner = ()=>{
    _s();
    const images = [
        '/assets/images/logo/logo.webp',
        '/assets/images/banner/banner-text.png',
        '/assets/images/banner/kid1.png',
        '/assets/images/banner/kid2.png',
        '/assets/images/banner/kid3.png'
    ];
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Controla la visibilidad global
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Banner.useEffect": ()=>{
            // Intervalo para el cambio de imágenes
            const interval = setInterval({
                "Banner.useEffect.interval": ()=>{
                    setIndex({
                        "Banner.useEffect.interval": (prev)=>(prev + 1) % images.length
                    }["Banner.useEffect.interval"]);
                }
            }["Banner.useEffect.interval"], 1000);
            // Timer para ocultar el componente a los 6 segundos
            const exitTimer = setTimeout({
                "Banner.useEffect.exitTimer": ()=>{
                    setIsVisible(false);
                }
            }["Banner.useEffect.exitTimer"], 6000);
            return ({
                "Banner.useEffect": ()=>{
                    clearInterval(interval);
                    clearTimeout(exitTimer);
                }
            })["Banner.useEffect"];
        }
    }["Banner.useEffect"], [
        images.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        flex absolute top-0 flex-col justify-between w-full h-screen bg-black overflow-hidden z-50
        transition-all duration-1000 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6"
            }, void 0, false, {
                fileName: "[project]/components/Banner/index.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[80vh] relative flex justify-center items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/images/banner/banner-1.png",
                        alt: "Banner BG",
                        fill: true,
                        className: "object-cover opacity-30 blur-[1px]",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/components/Banner/index.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full h-full flex justify-center items-center",
                        children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                absolute transition-all duration-500
                ${i === index ? 'opacity-100 blur-none scale-100' : 'opacity-0 blur-sm scale-95 pointer-events-none'}
              `,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-[300px] h-[300px] lg:w-[800px] lg:h-[600px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: src,
                                        alt: `Loop element ${i}`,
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Banner/index.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Banner/index.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, i, false, {
                                fileName: "[project]/components/Banner/index.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Banner/index.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Banner/index.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between p-6 text-brand-white/60 text-sm uppercase font-light",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2026 kidcanibal. Todos los derechos reservados"
                    }, void 0, false, {
                        fileName: "[project]/components/Banner/index.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "INSTAGRAM"
                        }, void 0, false, {
                            fileName: "[project]/components/Banner/index.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Banner/index.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Banner/index.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Banner/index.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Banner, "XCK34lQDJ/f3a172Sm+Ib9Liz1E=");
_c = Banner;
const __TURBOPACK__default__export__ = Banner;
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Projects/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
"use client";
;
;
;
;
const ProjectCard = ({ project, index, total })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden",
        style: {
            zIndex: index + 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: [
                        project.mediaType === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: "w-full h-full object-cover",
                            src: project.mediaSrc,
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true
                        }, void 0, false, {
                            fileName: "[project]/components/Projects/index.tsx",
                            lineNumber: 32,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: project.mediaSrc,
                            alt: project.title,
                            fill: true,
                            className: "object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/Projects/index.tsx",
                            lineNumber: 41,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/40 z-10"
                        }, void 0, false, {
                            fileName: "[project]/components/Projects/index.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Projects/index.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 w-full h-full flex flex-col justify-end p-6 md:px-12 md:py-28 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-thunder font-bold text-[13vw] leading-[0.8] uppercase",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/components/Projects/index.tsx",
                                lineNumber: 57,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Projects/index.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-px bg-white/30"
                        }, void 0, false, {
                            fileName: "[project]/components/Projects/index.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-blue font-bold tracking-widest",
                                            children: "DIRECCIÓN"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects/index.tsx",
                                            lineNumber: 65,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-inter font-light text-white/60",
                                            children: project.director
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects/index.tsx",
                                            lineNumber: 66,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Projects/index.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/40",
                                                children: [
                                                    "EST. ",
                                                    project.year
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Projects/index.tsx",
                                                lineNumber: 70,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Projects/index.tsx",
                                            lineNumber: 69,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: project.link,
                                            className: "group flex items-center gap-2 text-white font-inter text-xs md:text-sm tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity",
                                            children: [
                                                "VER PROYECTO",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Projects/index.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Projects/index.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Projects/index.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Projects/index.tsx",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Projects/index.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Projects/index.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Projects/index.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Projects/index.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProjectCard;
function Projects({ projects }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full bg-black",
        children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                project: project,
                index: index,
                total: projects.length
            }, index, false, {
                fileName: "[project]/components/Projects/index.tsx",
                lineNumber: 94,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Projects/index.tsx",
        lineNumber: 92,
        columnNumber: 9
    }, this);
}
_c1 = Projects;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Menu/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const COLORS = [
    '#C084FC',
    '#FBCFE8',
    '#818CF8',
    '#BEF264',
    '#FB923C'
];
const Menu = ({ hiddeOnDesktop })=>{
    _s();
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 1. Definición de items (Links + 3 logos decorativos)
    const physicsItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Menu.useMemo[physicsItems]": ()=>[
                {
                    id: 'l1',
                    type: 'link',
                    text: 'Proyectos',
                    href: '/proyectos',
                    width: 110,
                    height: 40,
                    color: COLORS[0]
                },
                {
                    id: 'l2',
                    type: 'link',
                    text: 'Servicios',
                    href: '/servicios',
                    width: 110,
                    height: 40,
                    color: COLORS[2]
                },
                {
                    id: 'l3',
                    type: 'link',
                    text: 'Contacto',
                    href: '/contacto',
                    width: 100,
                    height: 40,
                    color: COLORS[3]
                },
                // Los 3 logos de 30px
                {
                    id: 'img1',
                    type: 'image',
                    src: '/kid.png',
                    alt: 'logo',
                    width: 30,
                    height: 30
                },
                {
                    id: 'img2',
                    type: 'image',
                    src: '/kid.png',
                    alt: 'logo',
                    width: 30,
                    height: 30
                },
                {
                    id: 'img3',
                    type: 'image',
                    src: '/kid.png',
                    alt: 'logo',
                    width: 30,
                    height: 30
                }
            ]
    }["Menu.useMemo[physicsItems]"], []);
    const setupMatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Menu.useCallback[setupMatter]": ()=>{
            if (!containerRef.current || !openMenu) return;
            const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            const engine = Engine.create();
            engineRef.current = engine;
            engine.gravity.y = 0.5; // Un poco de gravedad para que caigan al abrir el menú
            const rect = containerRef.current.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            // Muros ajustados al tamaño del nav
            const wallThickness = 60;
            const walls = [
                Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, {
                    isStatic: true
                }),
                Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, {
                    isStatic: true
                }),
                Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, {
                    isStatic: true
                }),
                Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, {
                    isStatic: true
                })
            ];
            const bodies = physicsItems.map({
                "Menu.useCallback[setupMatter].bodies": (item)=>{
                    const x = Math.random() * (width - 40) + 20;
                    const y = Math.random() * (height / 2); // Aparecen en la mitad superior
                    const body = Bodies.rectangle(x, y, item.width, item.height, {
                        chamfer: {
                            radius: item.type === 'image' ? 15 : 20
                        },
                        restitution: 0.7,
                        frictionAir: 0.03,
                        label: item.id
                    });
                    // Impulso inicial aleatorio
                    Body.applyForce(body, body.position, {
                        x: (Math.random() - 0.5) * 0.01,
                        y: (Math.random() - 0.5) * 0.01
                    });
                    return body;
                }
            }["Menu.useCallback[setupMatter].bodies"]);
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
            Events.on(engine, 'afterUpdate', {
                "Menu.useCallback[setupMatter]": ()=>{
                    setElements(bodies.map({
                        "Menu.useCallback[setupMatter]": (b)=>({
                                id: b.label,
                                x: b.position.x,
                                y: b.position.y,
                                rotation: b.angle
                            })
                    }["Menu.useCallback[setupMatter]"]));
                }
            }["Menu.useCallback[setupMatter]"]);
            const runner = Runner.create();
            Runner.run(runner, engine);
            return ({
                "Menu.useCallback[setupMatter]": ()=>{
                    Runner.stop(runner);
                    Engine.clear(engine);
                }
            })["Menu.useCallback[setupMatter]"];
        }
    }["Menu.useCallback[setupMatter]"], [
        openMenu,
        physicsItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            const cleanup = setupMatter();
            return ({
                "Menu.useEffect": ()=>cleanup?.()
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], [
        setupMatter
    ]);
    const openMenuFunc = ()=>setOpenMenu(!openMenu);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${hiddeOnDesktop ? 'lg:hidden block' : ''} fixed flex items-center top-0 right-0 z-40`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "fixed z-50 px-1 py-1 duration-500 cursor-pointer top-7 right-10 rounded-xl outline-none",
                onClick: openMenuFunc,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "35",
                    height: "35",
                    viewBox: "0 0 30 15",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            className: `duration-500 transition-all origin-center ${openMenu ? 'rotate-45 translate-y-[6px] translate-x-[2px] fill-black' : 'fill-white'}`,
                            y: "0",
                            width: "25",
                            height: "2.25",
                            rx: "1.125"
                        }, void 0, false, {
                            fileName: "[project]/components/Menu/index.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            className: `duration-500 ${openMenu ? 'opacity-0' : 'opacity-100'} fill-white`,
                            y: "6.125",
                            width: "25",
                            height: "2.25",
                            rx: "1.125"
                        }, void 0, false, {
                            fileName: "[project]/components/Menu/index.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            className: `duration-500 transition-all origin-center ${openMenu ? '-rotate-45 -translate-y-[6.5px] translate-x-[2px] fill-black' : 'fill-white'}`,
                            y: "12.25",
                            width: "25",
                            height: "2.25",
                            rx: "1.125"
                        }, void 0, false, {
                            fileName: "[project]/components/Menu/index.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Menu/index.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Menu/index.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-50 w-10 h-10 top-7 left-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: '/kid.png',
                    alt: "KidCanibal logo",
                    fill: true,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/components/Menu/index.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Menu/index.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: containerRef,
                className: `
          fixed top-0 right-0 bg-white w-full h-screen md:w-[400px] md:h-[600px] md:top-6 md:right-6 
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
          ${openMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
          md:rounded-3xl shadow-2xl touch-none
        `,
                children: [
                    openMenu && physicsItems.map((item)=>{
                        const state = elements.find((el)=>el.id === item.id);
                        if (!state) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            className: `${item.type === 'link' ? 'rounded-full flex items-center justify-center border border-black/5 shadow-lg' : ''}`,
                            children: item.type === 'link' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href || '#',
                                className: "w-full h-full flex items-center justify-center text-black font-bold text-xs uppercase px-4 select-none",
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/components/Menu/index.tsx",
                                lineNumber: 172,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.src,
                                    alt: item.alt,
                                    fill: true,
                                    className: "object-contain pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/Menu/index.tsx",
                                    lineNumber: 177,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Menu/index.tsx",
                                lineNumber: 176,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.id, false, {
                            fileName: "[project]/components/Menu/index.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-8xl font-black rotate-90",
                            children: "MENU"
                        }, void 0, false, {
                            fileName: "[project]/components/Menu/index.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Menu/index.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Menu/index.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Menu/index.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Menu, "PoTOB0/hwT7vGVs+FCiGgMWDvsQ=");
_c = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PhysicsMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [elements, setElements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 1. Memorizamos los items para que el color sea estático por ID
    const physicsItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PhysicsMenu.useMemo[physicsItems]": ()=>[
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
            ]
    }["PhysicsMenu.useMemo[physicsItems]"], []);
    const setupMatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhysicsMenu.useCallback[setupMatter]": ()=>{
            if (!containerRef.current) return;
            const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
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
            const bodies = physicsItems.map({
                "PhysicsMenu.useCallback[setupMatter].bodies": (item)=>{
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
                }
            }["PhysicsMenu.useCallback[setupMatter].bodies"]);
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
            Events.on(engine, 'afterUpdate', {
                "PhysicsMenu.useCallback[setupMatter]": ()=>{
                    setElements(bodies.map({
                        "PhysicsMenu.useCallback[setupMatter]": (b)=>({
                                id: b.label,
                                x: b.position.x,
                                y: b.position.y,
                                rotation: b.angle
                            })
                    }["PhysicsMenu.useCallback[setupMatter]"]));
                }
            }["PhysicsMenu.useCallback[setupMatter]"]);
            const runner = Runner.create();
            Runner.run(runner, engine);
            return ({
                "PhysicsMenu.useCallback[setupMatter]": ()=>{
                    Runner.stop(runner);
                    Engine.clear(engine);
                }
            })["PhysicsMenu.useCallback[setupMatter]"];
        }
    }["PhysicsMenu.useCallback[setupMatter]"], [
        physicsItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhysicsMenu.useEffect": ()=>{
            const cleanup = setupMatter();
            return ({
                "PhysicsMenu.useEffect": ()=>cleanup?.()
            })["PhysicsMenu.useEffect"];
        }
    }["PhysicsMenu.useEffect"], [
        setupMatter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full h-screen bg-black overflow-hidden touch-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-white text-5xl font-bold text-center opacity-40 px-6",
                    children: [
                        "Crafting exquisite websites,",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    children: item.type === 'link' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href || '#',
                        className: "w-full h-full flex items-center justify-center text-black font-bold text-xs uppercase px-4 text-center",
                        children: item.text
                    }, void 0, false, {
                        fileName: "[project]/components/PhysicsMenu.tsx",
                        lineNumber: 144,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(PhysicsMenu, "JXtlw/GccNBm5e6/YVLSKQYxemw=");
_c = PhysicsMenu;
const __TURBOPACK__default__export__ = PhysicsMenu;
var _c;
__turbopack_context__.k.register(_c, "PhysicsMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_9ea68397._.js.map