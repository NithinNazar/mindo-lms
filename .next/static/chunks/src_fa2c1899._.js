(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Common/Banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Banner = (param)=>{
    let { title = "Explore Online Courses That Move You Forward", crumbs = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Courses"
        }
    ], className = "" } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Banner.useEffect": ()=>{
            const banner = document.querySelector(".page-banner-area");
            if (!banner) return;
            const handleMove = {
                "Banner.useEffect.handleMove": (e)=>{
                    const wx = window.innerWidth;
                    const wy = window.innerHeight;
                    const x = e.pageX - banner.offsetLeft;
                    const y = e.pageY - banner.offsetTop;
                    const newx = x - wx / 2;
                    const newy = y - wy / 2;
                    document.querySelectorAll(".page-banner-shape1, .page-banner-shape2").forEach({
                        "Banner.useEffect.handleMove": (el)=>{
                            let speed = parseFloat(el.getAttribute("data-speed") || "0");
                            if (el.getAttribute("data-revert")) speed *= -1;
                            const translateX = 1 - newx * speed;
                            const translateY = 1 - newy * speed;
                            el.style.transform = "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)");
                        }
                    }["Banner.useEffect.handleMove"]);
                }
            }["Banner.useEffect.handleMove"];
            banner.addEventListener("mousemove", handleMove);
            return ({
                "Banner.useEffect": ()=>banner.removeEventListener("mousemove", handleMove)
            })["Banner.useEffect"];
        }
    }["Banner.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-banner-area ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "page-banner-content section-title-animation animation-style1",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "title-animation",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/Banner.tsx",
                            lineNumber: 55,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list",
                            children: crumbs.map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: c.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: c.href,
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Banner.tsx",
                                        lineNumber: 61,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Common/Banner.tsx",
                                        lineNumber: 63,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, "".concat(c.label, "-").concat(idx), false, {
                                    fileName: "[project]/src/components/Common/Banner.tsx",
                                    lineNumber: 59,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/Banner.tsx",
                            lineNumber: 57,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/Banner.tsx",
                    lineNumber: 50,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/Banner.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-banner-subtract",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/subtract.png",
                    alt: "abstract subtract shape",
                    width: 183,
                    height: 28
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/Banner.tsx",
                    lineNumber: 72,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/Banner.tsx",
                lineNumber: 71,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-banner-shape1",
                "data-speed": "0.05",
                "data-revert": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page-banner-shape1.png",
                    alt: "decorative shape 1",
                    width: 219,
                    height: 219
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/Banner.tsx",
                    lineNumber: 85,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/Banner.tsx",
                lineNumber: 80,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "page-banner-shape2",
                "data-speed": "0.05",
                "data-revert": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/page-banner-shape2.png",
                    alt: "decorative shape 2",
                    width: 191,
                    height: 191
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/Banner.tsx",
                    lineNumber: 98,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Common/Banner.tsx",
                lineNumber: 93,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/Banner.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Banner, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Banner;
const __TURBOPACK__default__export__ = Banner;
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Common/CTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CTA() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CTA.useEffect": ()=>{
            const ctaArea = document.querySelector(".cta-wrap-area");
            if (!ctaArea) return;
            const handleMouseMove = {
                "CTA.useEffect.handleMouseMove": (e)=>{
                    const me = e;
                    const wx = window.innerWidth;
                    const wy = window.innerHeight;
                    const x = me.pageX - ctaArea.offsetLeft;
                    const y = me.pageY - ctaArea.offsetTop;
                    const newx = x - wx / 2;
                    const newy = y - wy / 2;
                    document.querySelectorAll(".cta-wrap-shape1, .cta-wrap-shape2").forEach({
                        "CTA.useEffect.handleMouseMove": (el)=>{
                            let speed = parseFloat(el.getAttribute("data-speed") || "0");
                            if (el.getAttribute("data-revert")) speed *= -1;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                duration: 1,
                                x: 1 - newx * speed,
                                y: 1 - newy * speed
                            });
                        }
                    }["CTA.useEffect.handleMouseMove"]);
                }
            }["CTA.useEffect.handleMouseMove"];
            ctaArea.addEventListener("mousemove", handleMouseMove);
            return ({
                "CTA.useEffect": ()=>{
                    ctaArea.removeEventListener("mousemove", handleMouseMove);
                }
            })["CTA.useEffect"];
        }
    }["CTA.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cta-wrap-area ptb-140",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cta-wrap-content section-title-animation animation-style1",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "title-animation",
                            children: [
                                "Start Your Journey Toward In-Demand",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Skills Today",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/title-line.png",
                                            alt: "image",
                                            width: 155,
                                            height: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/CTA.tsx",
                                            lineNumber: 56,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Common/CTA.tsx",
                                    lineNumber: 54,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Common/CTA.tsx",
                            lineNumber: 52,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Enroll now and learn from certified industry experts."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Common/CTA.tsx",
                            lineNumber: 64,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact-us",
                            className: "default-btn",
                            children: [
                                "Get Started Now",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "18",
                                    height: "14",
                                    viewBox: "0 0 18 14",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            opacity: "0.5",
                                            d: "M16.375 6.75V7.25H1.375V6.75H16.375Z",
                                            fill: "#1C43FE",
                                            stroke: "#1C43FE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/CTA.tsx",
                                            lineNumber: 74,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.875 1L16.875 7L10.875 13",
                                            stroke: "#1C43FE",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Common/CTA.tsx",
                                            lineNumber: 80,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Common/CTA.tsx",
                                    lineNumber: 67,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Common/CTA.tsx",
                            lineNumber: 65,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Common/CTA.tsx",
                    lineNumber: 47,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Common/CTA.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-wrap-shape1",
                "data-speed": "0.05",
                "data-revert": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/cta-shape5.png",
                    alt: "image",
                    width: 178,
                    height: 178
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/CTA.tsx",
                    lineNumber: 96,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Common/CTA.tsx",
                lineNumber: 91,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-wrap-shape2",
                "data-speed": "0.05",
                "data-revert": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/cta-shape6.png",
                    alt: "image",
                    width: 234,
                    height: 234
                }, void 0, false, {
                    fileName: "[project]/src/components/Common/CTA.tsx",
                    lineNumber: 108,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Common/CTA.tsx",
                lineNumber: 103,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Common/CTA.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, this);
}
_s(CTA, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CTA;
var _c;
__turbopack_context__.k.register(_c, "CTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FavoriteButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FavoriteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FavoriteButton(param) {
    let { courseId, initialFavorited = false } = param;
    _s();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [favorited, setFavorited] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFavorited);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    async function toggleFavorite() {
        startTransition(async ()=>{
            try {
                const res = await fetch("/api/courses/".concat(courseId, "/favorite"), {
                    method: "POST"
                });
                const json = await res.json();
                if (!res.ok) {
                    const message = typeof (json === null || json === void 0 ? void 0 : json.error) === "string" ? json.error : "Unable to update favorite";
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message, {
                        position: "bottom-right"
                    });
                    return;
                }
                setFavorited(Boolean(json.favorited));
            } catch (e) {
                console.error("favorite toggle failed", e);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unable to update favorite", {
                    position: "bottom-right"
                });
            }
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: (e)=>{
            var _session_user;
            e.preventDefault();
            if (!(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please log in to save favorites");
                router.push("/login");
                return;
            }
            if (!isPending) toggleFavorite();
        },
        className: "wishlist-btn ".concat(favorited ? "active bg-blue-500 text-red-500" : ""),
        "aria-pressed": favorited,
        "aria-busy": isPending,
        disabled: isPending,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 6.01706C7.5 1.34306 2 4.79206 2 9.65506C2 14.5181 6.02 17.1091 8.962 19.4291C10 20.2461 11 21.0171 12 21.0171",
                    stroke: favorited ? "red" : "blue",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/FavoriteButton.tsx",
                    lineNumber: 70,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    opacity: "0.5",
                    d: "M12 6.01706C16.5 1.34306 22 4.79206 22 9.65506C22 14.5181 17.98 17.1091 15.038 19.4291C14 20.2461 13 21.0171 12 21.0171",
                    stroke: favorited ? "red" : "blue",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/FavoriteButton.tsx",
                    lineNumber: 76,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FavoriteButton.tsx",
            lineNumber: 63,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FavoriteButton.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, this);
}
_s(FavoriteButton, "phzKcwbv8TTMZ8iNYtOMHhczvQU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FavoriteButton;
var _c;
__turbopack_context__.k.register(_c, "FavoriteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useEnrolledCourses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEnrolledCourses",
    ()=>useEnrolledCourses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// Simple in-memory cache + in-flight dedupe by studentId
const enrolledCache = new Map(); // studentId -> courseIds
const inFlight = new Map(); // studentId -> promise
async function fetchEnrolledIds(studentId) {
    // If cached, return immediately
    if (enrolledCache.has(studentId)) return enrolledCache.get(studentId);
    // If a request is in-flight, reuse it
    const existing = inFlight.get(studentId);
    if (existing) return existing;
    // Start a new request
    const p = (async ()=>{
        const res = await fetch("/api/enrollments?studentId=".concat(encodeURIComponent(studentId)), {
            method: "GET",
            headers: {
                "Cache-Control": "no-store"
            }
        });
        if (!res.ok) throw new Error("Failed to load enrollments");
        const data = await res.json();
        const list = Array.isArray(data === null || data === void 0 ? void 0 : data.enrolledCourseIds) ? data.enrolledCourseIds : [];
        // Normalize to numbers
        const ids = list.map((x)=>Number(x)).filter((n)=>Number.isFinite(n));
        enrolledCache.set(studentId, ids);
        return ids;
    })();
    inFlight.set(studentId, p);
    try {
        const ids = await p;
        return ids;
    } finally{
        inFlight.delete(studentId); // cleanup regardless of success/fail
    }
}
function useEnrolledCourses(studentId) {
    _s();
    const [enrolledIds, setEnrolledIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEnrolledCourses.useEffect": ()=>{
            let alive = true;
            if (!studentId) {
                setEnrolledIds([]);
                return ({
                    "useEnrolledCourses.useEffect": ()=>{
                        alive = false;
                    }
                })["useEnrolledCourses.useEffect"];
            }
            setLoading(true);
            // First try cache synchronously to avoid a paint + flash
            if (enrolledCache.has(studentId)) {
                const cached = enrolledCache.get(studentId);
                setEnrolledIds(cached);
                setLoading(false);
                return ({
                    "useEnrolledCourses.useEffect": ()=>{
                        alive = false;
                    }
                })["useEnrolledCourses.useEffect"];
            }
            // Otherwise, fetch (deduped) once for this studentId
            fetchEnrolledIds(studentId).then({
                "useEnrolledCourses.useEffect": (ids)=>{
                    if (alive) setEnrolledIds(ids);
                }
            }["useEnrolledCourses.useEffect"]).catch({
                "useEnrolledCourses.useEffect": ()=>{
                    if (alive) setEnrolledIds([]);
                }
            }["useEnrolledCourses.useEffect"]).finally({
                "useEnrolledCourses.useEffect": ()=>{
                    if (alive) setLoading(false);
                }
            }["useEnrolledCourses.useEffect"]);
            return ({
                "useEnrolledCourses.useEffect": ()=>{
                    alive = false;
                }
            })["useEnrolledCourses.useEffect"];
        }
    }["useEnrolledCourses.useEffect"], [
        studentId
    ]);
    return {
        enrolledIds,
        loading
    };
}
_s(useEnrolledCourses, "REbSCfBQ1gOIAaHgfDMoRnlNbY8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Cart/AddToCartButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useCartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useEnrolledCourses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useEnrolledCourses.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AddToCartButton(param) {
    let { course, studentId } = param;
    _s();
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "AddToCartButton.useCartStore[addToCart]": (s)=>s.addToCart
    }["AddToCartButton.useCartStore[addToCart]"]);
    const isInCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsInCart"])(course.id);
    const { enrolledIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useEnrolledCourses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnrolledCourses"])(studentId);
    const alreadyEnrolled = enrolledIds.includes(Number(course.id));
    const handleAdd = ()=>{
        var _course_images;
        if (isInCart) return;
        var _course_images_thumb;
        addToCart({
            id: course.id,
            image: (_course_images_thumb = (_course_images = course.images) === null || _course_images === void 0 ? void 0 : _course_images.thumb) !== null && _course_images_thumb !== void 0 ? _course_images_thumb : "/images/courses/courses1.jpg",
            title: course.title,
            slug: course.slug,
            price: course.price
        });
    };
    const stateClass = alreadyEnrolled ? "is-enrolled" : isInCart ? "is-added" : "";
    const bgColor = alreadyEnrolled ? "#42B9A8" // verdigrisColor
     : isInCart ? "#FFAB31" // yellowColor
     : undefined; // use default CSS color
    if (alreadyEnrolled) {
        const learnHref = "/learn/".concat(course.id);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: learnHref,
            className: "default-btn ".concat(stateClass).trim(),
            style: bgColor ? {
                backgroundColor: bgColor
            } : undefined,
            children: [
                "Learn",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            opacity: "0.5",
                            d: "M5.48788 14.1143C5.83716 14.1143 6.17214 14.253 6.41913 14.5C6.66611 14.747 6.80486 15.082 6.80486 15.4313C6.80486 15.7806 6.66611 16.1156 6.41913 16.3626C6.17214 16.6096 5.83716 16.7484 5.48788 16.7484C5.13859 16.7484 4.80361 16.6096 4.55663 16.3626C4.30965 16.1156 4.1709 15.7806 4.1709 15.4313C4.1709 15.082 4.30965 14.747 4.55663 14.5C4.80361 14.253 5.13859 14.1143 5.48788 14.1143ZM13.3898 14.1143C13.739 14.1143 14.074 14.253 14.321 14.5C14.568 14.747 14.7067 15.082 14.7067 15.4313C14.7067 15.7806 14.568 16.1156 14.321 16.3626C14.074 16.6096 13.739 16.7484 13.3898 16.7484C13.0405 16.7484 12.7055 16.6096 12.4585 16.3626C12.2115 16.1156 12.0728 15.7806 12.0728 15.4313C12.0728 15.082 12.2115 14.747 12.4585 14.5C12.7055 14.253 13.0405 14.1143 13.3898 14.1143Z",
                            stroke: "white",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0.877557 0.322971C0.712695 0.264985 0.531552 0.274871 0.373977 0.350452C0.216403 0.426034 0.0953048 0.561121 0.0373235 0.725995C-0.0206579 0.890869 -0.0107731 1.07203 0.0648034 1.22961C0.14038 1.3872 0.275457 1.5083 0.44032 1.56629L0.877557 0.322971ZM17.0404 6.98824L17.6849 7.12083L17.6857 7.11731L17.0404 6.98824ZM3.91452 6.88024V4.49019H2.59753V6.88024H3.91452ZM1.10671 0.403751L0.877557 0.322971L0.44032 1.56629L0.669474 1.64619L1.10671 0.403751ZM8.50639 12.5788H13.1615V11.2617H8.50639V12.5788ZM3.91452 4.20455C3.91452 3.58377 3.91539 3.06572 3.87062 2.93078C3.82233 2.49439 3.72136 2.09663 3.47377 1.73487L2.88594 2.4777C2.96496 2.30796 3.02642 2.46777 3.06066 2.7865C3.09666 3.12016 3.09753 3.55479 3.09753 4.20455H4.41452ZM0.669474 1.64619C1.25597 1.85253 1.64141 1.98951 1.925 2.13C2.19103 2.25995 2.30868 2.36531 2.38594 2.47858L3.97377 1.44923C3.72442 1.08396 3.39166 0.8504 3.00447 0.659863C2.63571 0.478985 2.16336 0.313912 1.60671 0.118107L0.669474 1.36055ZM2.59753 6.88024C2.59753 8.15605 2.60983 9.07537 2.72923 9.7778C2.8583 10.5277 3.11555 11.065 3.59405 11.5708L4.55018 10.6646C4.26922 10.3679 4.11733 10.0781 4.52778 9.55566C3.9312 8.98493 3.91452 8.18766 3.91452 6.88024H2.59753ZM8.50639 10.9761C7.26228 10.9761 6.89922 10.9743 6.24863 10.8821C5.62087 10.7934 5.28987 10.6319 5.05018 10.379L4.09405 11.2851C4.61557 11.8357 5.2767 12.0754 6.06338 12.186C6.82722 12.2949 7.80267 12.2931 9.00639 12.2931V10.9761ZM3.75603 4.34268H14.406V3.02561H3.2569L3.25603 4.34268ZM16.3951 6.85478L15.9561 8.98405L17.2468 9.24922L17.6849 7.12083L16.3951 6.85478ZM14.4078 4.05703C15.1593 4.05703 15.8213 4.05791 16.3437 4.11586C16.6019 4.1463 16.7985 4.18552 16.9337 4.23352C17.0751 4.28357 17.0979 4.32133 17.0865 4.3064L18.1304 3.50386C17.9241 3.23518 17.6344 3.08328 17.3701 2.99108C17.0843 2.89701 16.789 2.83516 16.4895 2.80669C15.8793 2.73908 15.1347 2.73996 14.4078 2.73996V4.05703ZM18.1857 6.83167C18.335 6.08708 18.4614 5.46191 18.4922 4.96143C18.5246 4.44689 18.4658 3.93938 18.1304 3.50386L17.0865 4.3064C17.1409 4.37752 17.2006 4.50484 17.1778 4.88065C17.1541 5.2705 17.0514 5.79118 16.8951 6.57352L18.1857 6.83167Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "default-btn border-0 ".concat(stateClass).trim(),
        onClick: handleAdd,
        disabled: isInCart,
        "aria-disabled": isInCart,
        title: isInCart ? "Already in cart" : "Add to cart",
        style: bgColor ? {
            backgroundColor: bgColor
        } : undefined,
        children: [
            isInCart ? "Added" : "Add To Cart",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        opacity: "0.5",
                        d: "M5.48788 14.1143C5.83716 14.1143 6.17214 14.253 6.41913 14.5C6.66611 14.747 6.80486 15.082 6.80486 15.4313C6.80486 15.7806 6.66611 16.1156 6.41913 16.3626C6.17214 16.6096 5.83716 16.7484 5.48788 16.7484C5.13859 16.7484 4.80361 16.6096 4.55663 16.3626C4.30965 16.1156 4.1709 15.7806 4.1709 15.4313C4.1709 15.082 4.30965 14.747 4.55663 14.5C4.80361 14.253 5.13859 14.1143 5.48788 14.1143ZM13.3898 14.1143C13.739 14.1143 14.074 14.253 14.321 14.5C14.568 14.747 14.7067 15.082 14.7067 15.4313C14.7067 15.7806 14.568 16.1156 14.321 16.3626C14.074 16.6096 13.739 16.7484 13.3898 16.7484C13.0405 16.7484 12.7055 16.6096 12.4585 16.3626C12.2115 16.1156 12.0728 15.7806 12.0728 15.4313C12.0728 15.082 12.2115 14.747 12.4585 14.5C12.7055 14.253 13.0405 14.1143 13.3898 14.1143Z",
                        stroke: "white",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0.877557 0.322971C0.712695 0.264985 0.531552 0.274871 0.373977 0.350452C0.216403 0.426034 0.0953048 0.561121 0.0373235 0.725995C-0.0206579 0.890869 -0.0107731 1.07203 0.0648034 1.22961C0.14038 1.3872 0.275457 1.5083 0.44032 1.56629L0.877557 0.322971ZM17.0404 6.98824L17.6849 7.12083L17.6857 7.11731L17.0404 6.98824ZM3.91452 6.88024V4.49019H2.59753V6.88024H3.91452ZM1.10671 0.403751L0.877557 0.322971L0.44032 1.56629L0.669474 1.64619L1.10671 0.403751ZM8.50639 12.5788H13.1615V11.2617H8.50639V12.5788ZM3.91452 4.49019C3.91452 3.86941 3.91539 3.35136 3.87062 2.93078C3.82233 2.49439 3.72136 2.09663 3.47377 1.73487L2.38594 2.4777C2.46496 2.59361 2.52642 2.75341 2.56066 3.07214C2.59666 3.4058 2.59753 3.84044 2.59753 4.49019H3.91452ZM0.669474 1.64619C1.25597 1.85253 1.64141 1.98951 1.925 2.13C2.19103 2.25995 2.30868 2.36531 2.38594 2.47858L3.47377 1.73487C3.22442 1.36961 2.89166 1.13604 2.50447 0.945507C2.13571 0.764629 1.66336 0.599556 1.10671 0.403751L0.669474 1.64619ZM2.59753 6.88024C2.59753 8.15605 2.60983 9.07537 2.72923 9.7778C2.8583 10.5277 3.11555 11.065 3.59405 11.5708L4.55018 10.6646C4.26922 10.3679 4.11733 10.0781 4.02778 9.55566C3.9312 8.98493 3.91452 8.18766 3.91452 6.88024H2.59753ZM8.50639 11.2617C7.26228 11.2617 6.39922 11.26 5.74863 11.1678C5.12087 11.0791 4.78987 10.9175 4.55018 10.6646L3.59405 11.5708C4.11557 12.1213 4.7767 12.361 5.56338 12.4717C6.32722 12.5805 7.30267 12.5788 8.50639 12.5788V11.2617ZM3.25603 4.34268H13.906V3.02561H3.2569L3.25603 4.34268ZM16.3951 6.85478L15.9561 8.98405L17.2468 9.24922L17.6849 7.12083L16.3951 6.85478ZM13.9078 4.34268C14.6593 4.34268 15.3213 4.34356 15.8437 4.40151C16.1019 4.43195 16.2985 4.47117 16.4337 4.51917C16.5751 4.56922 16.5979 4.60697 16.5865 4.59205L17.6304 3.78951C17.4241 3.52083 17.1344 3.36892 16.8701 3.27673C16.5843 3.18266 16.289 3.12081 15.9895 3.09234C15.3793 3.02473 14.6347 3.02561 13.9078 3.02561V4.34268ZM17.6857 7.11731C17.835 6.37273 17.9614 5.74756 17.9922 5.24707C18.0246 4.73253 17.9658 4.22502 17.6304 3.78951L16.5865 4.59205C16.6409 4.66317 16.7006 4.79048 16.6778 5.16629C16.6541 5.55614 16.5514 6.07683 16.3951 6.85917L17.6857 7.11731Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
                        lineNumber: 104,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Cart/AddToCartButton.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, this);
}
_s(AddToCartButton, "MVUEd2Rd1OjafehXPlL+VXJWnAs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsInCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useEnrolledCourses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnrolledCourses"]
    ];
});
_c = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Courses/CourseCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FavoriteButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cart$2f$AddToCartButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Cart/AddToCartButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function formatNumber(n) {
    if (!n && n !== 0) return "0";
    return n.toLocaleString();
}
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};
const fadeUpDelayed = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
            delay: 0.08
        }
    }
};
function CourseCard(param) {
    let { course } = param;
    var _course_images, _session_user;
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CourseCard.useEffect": ()=>{
            setMounted(true);
        }
    }["CourseCard.useEffect"], []);
    const detailsHref = "/course/".concat(course.slug);
    const listingHref = "/courses";
    var _course_images_thumb;
    const thumb = (_course_images_thumb = (_course_images = course.images) === null || _course_images === void 0 ? void 0 : _course_images.thumb) !== null && _course_images_thumb !== void 0 ? _course_images_thumb : "/images/courses/courses1.jpg";
    const vector = "/images/courses/vector.png";
    const tagClass = "tag-btn wrap4";
    var _course_rating;
    const rating = Math.max(0, Math.min(5, Number((_course_rating = course.rating) !== null && _course_rating !== void 0 ? _course_rating : 0)));
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5 && fullStars < 5;
    const renderStars = ()=>{
        // Always render 5 icons. Fill/half based on rating; empty otherwise.
        return Array.from({
            length: 5
        }, (_, i)=>{
            const pos = i + 1;
            let icon = "ri-star-line"; // empty
            let color = "#D1D5DB"; // neutral grey for empty
            if (pos <= fullStars) {
                icon = "ri-star-fill";
                color = "#FFAB31"; // yellow for filled
            } else if (pos === fullStars + 1 && hasHalfStar) {
                icon = "ri-star-half-fill";
                color = "#FFAB31"; // yellow for half
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: icon,
                    style: {
                        color
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Courses/CourseCard.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                }, this)
            }, "star-".concat(i), false, {
                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                lineNumber: 82,
                columnNumber: 17
            }, this);
        });
    };
    var _course_badge, _course_badge1, _course_isFavorited;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "courses-show-hide-style",
        variants: fadeUp,
        initial: mounted ? "hidden" : false,
        whileInView: "show",
        viewport: {
            once: true,
            amount: 0.01
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "education-courses-card wrap-bg",
                whileHover: {
                    y: -4
                },
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "image",
                        whileHover: {
                            scale: 1.02
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: detailsHref,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: thumb,
                                    alt: "image",
                                    width: 1170,
                                    height: 750
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                    lineNumber: 108,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 107,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: listingHref,
                                className: tagClass,
                                children: (_course_badge = course.badge) !== null && _course_badge !== void 0 ? _course_badge : "Best Rated"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 115,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vector",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: vector,
                                    alt: "image",
                                    width: 1060,
                                    height: 163
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                    lineNumber: 119,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 118,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                        lineNumber: 102,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: detailsHref,
                                    children: course.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 128,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "info-rating",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: rating.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                            lineNumber: 133,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 7
                                    }, this),
                                    renderStars(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "(",
                                                formatNumber(course.reviewsCount),
                                                " Reviews)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                            lineNumber: 137,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 131,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price",
                                children: [
                                    "$",
                                    course.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 142,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "info-list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "14",
                                                height: "18",
                                                viewBox: "0 0 14 18",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        opacity: "0.5",
                                                        d: "M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 145,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    formatNumber(course.lessons),
                                                    " Lessons"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 170,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "14",
                                                height: "19",
                                                viewBox: "0 0 14 19",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        opacity: "0.5",
                                                        d: "M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 173,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    formatNumber(course.learners),
                                                    " Learners"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 192,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 172,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 143,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                        lineNumber: 127,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                lineNumber: 97,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "education-courses-hover-card wrap-bg",
                variants: fadeUpDelayed,
                initial: mounted ? "hidden" : false,
                whileInView: "show",
                viewport: {
                    once: true,
                    amount: 0.01
                },
                whileHover: {
                    y: -4
                },
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "image",
                        whileHover: {
                            scale: 1.02
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: detailsHref,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: thumb,
                                    alt: "image",
                                    width: 1100,
                                    height: 750
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                    lineNumber: 215,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 214,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: listingHref,
                                className: tagClass,
                                children: (_course_badge1 = course.badge) !== null && _course_badge1 !== void 0 ? _course_badge1 : "Best Rated"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 222,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vector",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: vector,
                                    alt: "image",
                                    width: 1060,
                                    height: 163
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                    lineNumber: 226,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 225,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                        lineNumber: 209,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: detailsHref,
                                    children: course.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                    lineNumber: 236,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 235,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Use tools like matplotlib, seaborn, and plotly to create clear, interactive, and beautiful charts and dashboards."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 238,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "info-rating",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: rating.toFixed(1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                            lineNumber: 244,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 243,
                                        columnNumber: 7
                                    }, this),
                                    renderStars(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "(",
                                                formatNumber(course.reviewsCount),
                                                " Reviews)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                            lineNumber: 248,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 247,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 242,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price",
                                children: [
                                    "$",
                                    course.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 253,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "info-list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "14",
                                                height: "18",
                                                viewBox: "0 0 14 18",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        opacity: "0.5",
                                                        d: "M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 256,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    formatNumber(course.lessons),
                                                    " Lessons"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 281,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 255,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "14",
                                                height: "19",
                                                viewBox: "0 0 14 19",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        opacity: "0.5",
                                                        d: "M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z",
                                                        stroke: "#4B5563",
                                                        strokeWidth: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 284,
                                                columnNumber: 8
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    formatNumber(course.learners),
                                                    " Learners"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                                lineNumber: 303,
                                                columnNumber: 8
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 283,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 254,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "info-bottom",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Cart$2f$AddToCartButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            course: course,
                                            studentId: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                            lineNumber: 310,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 309,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FavoriteButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            courseId: course.id,
                                            initialFavorited: (_course_isFavorited = course.isFavorited) !== null && _course_isFavorited !== void 0 ? _course_isFavorited : false
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                            lineNumber: 316,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                        lineNumber: 315,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                                lineNumber: 308,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Courses/CourseCard.tsx",
                        lineNumber: 234,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Courses/CourseCard.tsx",
                lineNumber: 200,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Courses/CourseCard.tsx",
        lineNumber: 90,
        columnNumber: 3
    }, this);
}
_s(CourseCard, "mn6jGHEtdVnnd40luFC5Q6w1R20=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = CourseCard;
var _c;
__turbopack_context__.k.register(_c, "CourseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Courses/SearchBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SearchBox(param) {
    let { q } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const sp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    function updateQuery(nextQ) {
        const params = new URLSearchParams((sp === null || sp === void 0 ? void 0 : sp.toString()) || "");
        if (nextQ) params.set("q", nextQ);
        else params.delete("q");
        params.set("page", "1");
        router.push("?".concat(params.toString()), {
            scroll: false
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search-box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                className: "form-control",
                placeholder: "Search instructors by name",
                defaultValue: q,
                onKeyDown: (e)=>{
                    if (e.key === "Enter") {
                        const val = e.currentTarget.value.trim();
                        updateQuery(val);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Courses/SearchBox.tsx",
                lineNumber: 19,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    const input = document.querySelector(".search-box input.form-control") || null;
                    const val = ((input === null || input === void 0 ? void 0 : input.value) || "").trim();
                    updateQuery(val);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                            id: "mask0_8036_13959",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "1",
                            y: "1",
                            width: "22",
                            height: "22",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                                    stroke: "white",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/SearchBox.tsx",
                                    lineNumber: 60,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    opacity: "0.5",
                                    d: "M20 20L22 22",
                                    stroke: "white",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/SearchBox.tsx",
                                    lineNumber: 65,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Courses/SearchBox.tsx",
                            lineNumber: 51,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            mask: "url(#mask0_8036_13959)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 0H24V24H0V0Z",
                                fill: "#131F34"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/SearchBox.tsx",
                                lineNumber: 74,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Courses/SearchBox.tsx",
                            lineNumber: 73,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Courses/SearchBox.tsx",
                    lineNumber: 44,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Courses/SearchBox.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Courses/SearchBox.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this);
}
_s(SearchBox, "yQIE7nENzDN0tT9eIsZrGa6tncw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SearchBox;
var _c;
__turbopack_context__.k.register(_c, "SearchBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Courses/SortDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SortDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function mapApiSortToUI(sort) {
    switch((sort || "price_desc").toLowerCase()){
        case "newest":
            return "1"; // UI option "Newest"
        case "price_desc":
        default:
            return "popular"; // UI option "Most Popular"
    }
}
function mapUIToApiSort(v) {
    if (v === "1") return "newest";
    // "popular" and any other fallbacks -> price_desc
    return "price_desc";
}
function SortDropdown(param) {
    let { sort } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const sp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    function updateSort(nextSort) {
        const params = new URLSearchParams((sp === null || sp === void 0 ? void 0 : sp.toString()) || "");
        params.set("sort", nextSort);
        params.set("page", "1");
        router.push("?".concat(params.toString()), {
            scroll: false
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sort-dropdown",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: "Sort by"
            }, void 0, false, {
                fileName: "[project]/src/components/Courses/SortDropdown.tsx",
                lineNumber: 34,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "form-select",
                defaultValue: mapApiSortToUI(sort),
                onChange: (e)=>{
                    const apiSort = mapUIToApiSort(e.target.value);
                    updateSort(apiSort);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "popular",
                        children: "Most Popular"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Courses/SortDropdown.tsx",
                        lineNumber: 43,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "1",
                        children: "Newest"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Courses/SortDropdown.tsx",
                        lineNumber: 44,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "2",
                        children: "Top Rated"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Courses/SortDropdown.tsx",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Courses/SortDropdown.tsx",
                lineNumber: 35,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Courses/SortDropdown.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, this);
}
_s(SortDropdown, "yQIE7nENzDN0tT9eIsZrGa6tncw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SortDropdown;
var _c;
__turbopack_context__.k.register(_c, "SortDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Courses/CoursesContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Courses/CourseCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Courses/SearchBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$SortDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Courses/SortDropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function formatNumber(n) {
    if (!n && n !== 0) return "0";
    return n.toLocaleString();
}
function buildPageHref(p, perPage, searchParams) {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    params.set("page", String(p));
    params.set("limit", String(perPage));
    const qs = params.toString();
    return qs ? "/courses?".concat(qs) : "/courses";
}
function CoursesContent(param) {
    let {} = param;
    _s();
    const sp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const q = (sp.get("q") || "").trim();
    const sort = (sp.get("sort") || "price_desc").trim();
    const pageParam = parseInt(sp.get("page") || "1", 10);
    const limitParam = parseInt(sp.get("limit") || "12", 10);
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pageParam);
    const [perPage, setPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(limitParam);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // compute total pages whenever total/perPage change
    const totalPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CoursesContent.useMemo[totalPages]": ()=>Math.max(1, Math.ceil((total || 0) / (perPage || 12)))
    }["CoursesContent.useMemo[totalPages]"], [
        total,
        perPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoursesContent.useEffect": ()=>{
            const params = new URLSearchParams();
            params.set("q", q);
            params.set("sort", sort);
            params.set("page", String(pageParam));
            params.set("limit", String(limitParam));
            setLoading(true);
            fetch("/api/courses?".concat(params.toString()), {
                cache: "no-store"
            }).then({
                "CoursesContent.useEffect": async (r)=>{
                    var _json_meta, _json_meta1, _json_meta2;
                    if (!r.ok) throw new Error("Failed to fetch courses");
                    const json = await r.json();
                    setCourses(json.data || []);
                    var _json_meta_total;
                    setTotal((_json_meta_total = (_json_meta = json.meta) === null || _json_meta === void 0 ? void 0 : _json_meta.total) !== null && _json_meta_total !== void 0 ? _json_meta_total : 0);
                    var _json_meta_page;
                    setPage((_json_meta_page = (_json_meta1 = json.meta) === null || _json_meta1 === void 0 ? void 0 : _json_meta1.page) !== null && _json_meta_page !== void 0 ? _json_meta_page : pageParam);
                    var _json_meta_limit;
                    setPerPage((_json_meta_limit = (_json_meta2 = json.meta) === null || _json_meta2 === void 0 ? void 0 : _json_meta2.limit) !== null && _json_meta_limit !== void 0 ? _json_meta_limit : limitParam);
                }
            }["CoursesContent.useEffect"]).catch({
                "CoursesContent.useEffect": ()=>{
                // keep initial props if fetch fails; no UI change needed
                }
            }["CoursesContent.useEffect"]).finally({
                "CoursesContent.useEffect": ()=>setLoading(false)
            }["CoursesContent.useEffect"]);
        }
    }["CoursesContent.useEffect"], [
        q,
        sort,
        pageParam,
        limitParam
    ]);
    const startIdx = total === 0 ? 0 : (page - 1) * perPage + 1;
    const endIdx = Math.min(page * perPage, total);
    const hasQuery = q.length > 0;
    const windowStart = Math.max(1, page - 2);
    const windowEnd = Math.min(totalPages, windowStart + 4);
    const pages = [];
    for(let p = Math.max(1, windowEnd - 4); p <= windowEnd; p++)pages.push(p);
    const noResults = !loading && (total || 0) === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "education-courses-area without-bg-color ptb-140",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            "data-cues": "slideInUp",
            "data-duration": "1000",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "showing-courses-bar",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "results-text",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Loading courses…"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                lineNumber: 102,
                                columnNumber: 8
                            }, this) : noResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "No courses found"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                lineNumber: 104,
                                columnNumber: 8
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Showing",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            startIdx,
                                            "-",
                                            endIdx
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                        lineNumber: 108,
                                        columnNumber: 9
                                    }, this),
                                    " ",
                                    "by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatNumber(total)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                        lineNumber: 111,
                                        columnNumber: 12
                                    }, this),
                                    " Results"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                            lineNumber: 100,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "search-sort-wrapper",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$SearchBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    q: q
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                    lineNumber: 116,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$SortDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sort: sort
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                    lineNumber: 117,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                            lineNumber: 115,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                    lineNumber: 99,
                    columnNumber: 5
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-12 text-center my-4",
                        children: "Loading courses…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                        lineNumber: 123,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                    lineNumber: 122,
                    columnNumber: 6
                }, this) : noResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-12 text-center text-muted my-4",
                        children: hasQuery ? "Try a different search or filter." : "No courses available."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                        lineNumber: 127,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                    lineNumber: 126,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row justify-content-center g-4",
                    children: courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-xl-3 col-md-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                course: course
                            }, void 0, false, {
                                fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                lineNumber: 135,
                                columnNumber: 9
                            }, this)
                        }, course.id, false, {
                            fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                            lineNumber: 134,
                            columnNumber: 8
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                    lineNumber: 132,
                    columnNumber: 6
                }, this),
                !noResults && totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-lg-12 col-md-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pagination-area",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: buildPageHref(Math.max(1, page - 1), perPage, sp),
                                    "aria-label": "Previous",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 19L7 12L13 5",
                                                stroke: "#63667D",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                                lineNumber: 160,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                opacity: "0.5",
                                                d: "M17 19L11 12L17 5",
                                                stroke: "#63667D",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                                lineNumber: 167,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                        lineNumber: 153,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                    lineNumber: 145,
                                    columnNumber: 9
                                }, this),
                                pages.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: buildPageHref(p, perPage, sp),
                                        className: p === page ? "active" : undefined,
                                        children: p
                                    }, p, false, {
                                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                        lineNumber: 178,
                                        columnNumber: 10
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: buildPageHref(Math.min(totalPages, page + 1), perPage, sp),
                                    "aria-label": "Next",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11 19L17 12L11 5",
                                                stroke: "#63667D",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                                lineNumber: 203,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                opacity: "0.5",
                                                d: "M7 19L13 12L7 5",
                                                stroke: "#63667D",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                                lineNumber: 210,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                        lineNumber: 196,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                                    lineNumber: 188,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                            lineNumber: 144,
                            columnNumber: 8
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                        lineNumber: 143,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Courses/CoursesContent.tsx",
                    lineNumber: 142,
                    columnNumber: 6
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Courses/CoursesContent.tsx",
            lineNumber: 94,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Courses/CoursesContent.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, this);
}
_s(CoursesContent, "TXlzZDKyDrc1AE6+SuoHU9FPeRY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CoursesContent;
var _c;
__turbopack_context__.k.register(_c, "CoursesContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fa2c1899._.js.map