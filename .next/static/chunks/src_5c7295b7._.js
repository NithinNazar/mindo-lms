(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Index/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function About(param) {
    let { classStyle, imgPath = "/images/about/about.jpg" } = param;
    _s();
    // Animation timing helpers so the button shows after the list items
    const LIST_LENGTH = 3; // number of <li> items below
    const STAGGER = 0.12; // matches list's staggerChildren
    const DELAY_CHILDREN = 0.08; // matches list's delayChildren
    const ITEM_DURATION = 0.45; // matches each li duration
    const BUTTON_EXTRA_DELAY = 0.08; // small breathing room
    const BUTTON_DELAY = DELAY_CHILDREN + STAGGER * LIST_LENGTH + BUTTON_EXTRA_DELAY;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const counters = Array.from(document.querySelectorAll(".education-about-area .counter"));
            const animated = new WeakSet();
            const animateCounter = {
                "About.useEffect.animateCounter": (el)=>{
                    if (animated.has(el)) return;
                    animated.add(el);
                    const target = parseInt(el.innerText.replace(/[^0-9]/g, ""), 10) || 0;
                    const duration = 2000; // ms
                    const start = performance.now();
                    const step = {
                        "About.useEffect.animateCounter.step": (now)=>{
                            const p = Math.min(1, (now - start) / duration);
                            const value = Math.floor(target * p);
                            el.innerText = String(value);
                            if (p < 1) requestAnimationFrame(step);
                        }
                    }["About.useEffect.animateCounter.step"];
                    requestAnimationFrame(step);
                }
            }["About.useEffect.animateCounter"];
            if ("IntersectionObserver" in window) {
                const observer = new IntersectionObserver({
                    "About.useEffect": (entries)=>{
                        entries.forEach({
                            "About.useEffect": (entry)=>{
                                if (entry.isIntersecting) {
                                    animateCounter(entry.target);
                                    observer.unobserve(entry.target);
                                }
                            }
                        }["About.useEffect"]);
                    }
                }["About.useEffect"], {
                    threshold: 0.3
                });
                counters.forEach({
                    "About.useEffect": (el)=>observer.observe(el)
                }["About.useEffect"]);
                return ({
                    "About.useEffect": ()=>observer.disconnect()
                })["About.useEffect"];
            } else {
                // Fallback: animate immediately
                counters.forEach(animateCounter);
            }
        }
    }["About.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "education-about-area ".concat(classStyle),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row justify-content-center align-items-center g-5",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-xl-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-about-image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: imgPath,
                                        alt: "image",
                                        width: 834,
                                        height: 1048,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fun-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "46",
                                                    height: "46",
                                                    viewBox: "0 0 46 46",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19.1667 19.1668C23.4008 19.1668 26.8333 15.7343 26.8333 11.5002C26.8333 7.26598 23.4008 3.8335 19.1667 3.8335C14.9325 3.8335 11.5 7.26598 11.5 11.5002C11.5 15.7343 14.9325 19.1668 19.1667 19.1668Z",
                                                            stroke: "#1BC9E4",
                                                            strokeWidth: "2.875"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            opacity: "0.5",
                                                            d: "M34.4999 33.5415C34.4999 38.3044 34.4999 42.1665 19.1666 42.1665C3.83325 42.1665 3.83325 38.3044 3.83325 33.5415C3.83325 28.7786 10.6988 24.9165 19.1666 24.9165C27.6344 24.9165 34.4999 28.7786 34.4999 33.5415Z",
                                                            stroke: "#1BC9E4",
                                                            strokeWidth: "2.875"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M36.4168 16.5673L35.3972 17.5793C35.5308 17.7137 35.6896 17.8204 35.8646 17.8932C36.0396 17.966 36.2273 18.0035 36.4168 18.0035C36.6064 18.0035 36.794 17.966 36.969 17.8932C37.144 17.8204 37.3029 17.7137 37.4365 17.5793L36.4168 16.5673ZM35.5428 22.8885C34.6094 22.1774 33.7699 21.6081 33.0933 20.8702C32.4666 20.186 32.1043 19.4806 32.1043 18.5894H29.2293C29.2293 20.4102 30.0228 21.7768 30.9735 22.8137C31.8762 23.797 33.0377 24.5962 33.7987 25.175L35.5428 22.8885ZM32.1043 18.5894C32.1043 17.7997 32.5643 17.1634 33.1527 16.9027C33.6645 16.6765 34.4752 16.6535 35.3972 17.5793L37.4365 15.5534C35.769 13.8763 33.7086 13.5121 31.9893 14.273 31.1619 14.65 30.4611 15.2583 29.9714 16.0244 29.4817 16.7906 29.224 17.6801 29.2293 18.5894H32.1043ZM33.7987 25.175C34.0823 25.3916 34.4542 25.6734 34.8432 25.8957C35.2323 26.118 35.7767 26.3538 36.4168 26.3538V23.4788C36.482 23.4788 36.4494 23.4999 36.2597 23.3945C36.068 23.2871 35.8533 23.1261 35.5428 22.8885L33.7987 25.175ZM39.035 25.175C39.7959 24.5943 40.9574 23.797 41.8582 22.8137C42.8108 21.7768 43.6043 20.4083 43.6043 18.5913H40.7293C40.7293 19.4806 40.3671 20.186 39.7403 20.8721C39.0637 21.6081 38.2242 22.1774 37.2908 22.8885L39.035 25.175ZM43.6043 18.5913C43.6043 16.6746 42.4831 14.9975 40.8443 14.273C39.127 13.5121 37.0627 13.8763 35.3972 15.5534L37.4365 17.5793C38.3565 16.6535 39.1692 16.6765 39.679 16.9027C39.9971 17.0538 40.2652 17.2931 40.4514 17.5921C40.6376 17.8911 40.734 18.2391 40.7293 18.5913H43.6043ZM37.2908 22.8885C37.0617 23.0707 36.8224 23.2396 36.574 23.3945C36.3842 23.5018 36.3517 23.4788 36.4168 23.4788V26.3538C37.057 26.3538 37.5994 26.118 37.9885 25.8957C38.3795 25.6753 38.7513 25.3916 39.035 25.175L37.2908 22.8885Z",
                                                            fill: "#1BC9E4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "counter",
                                                        children: "60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "sub",
                                                        children: "K+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Active Learners"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fun-color-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "46",
                                                    height: "46",
                                                    viewBox: "0 0 46 46",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M17.2499 19.1668C21.4841 19.1668 24.9166 15.7343 24.9166 11.5002C24.9166 7.26598 21.4841 3.8335 17.2499 3.8335C13.0157 3.8335 9.58325 7.26598 9.58325 11.5002C9.58325 15.7343 13.0157 19.1668 17.2499 19.1668Z",
                                                            stroke: "white",
                                                            strokeWidth: "2.88"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            opacity: "0.5",
                                                            d: "M23.9583 8.32025C24.6413 7.29119 25.6375 6.50941 26.7994 6.09062C27.9613 5.67184 29.2272 5.63832 30.4097 5.99502C31.5921 6.35173 32.6283 7.0797 33.3648 8.07116C34.1014 9.06263 34.499 10.2649 34.499 11.5C34.499 12.7351 34.1014 13.9374 33.3648 14.9288C32.6283 15.9203 31.5921 16.6483 30.4097 17.005 29.2272 17.3617 27.9613 17.3282 26.7994 16.9094 25.6375 16.4906 24.6413 15.7088 23.9583 14.6797",
                                                            stroke: "white",
                                                            strokeWidth: "2.88"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M17.2499 40.2503C24.6597 40.2503 30.6666 36.8178 30.6666 32.5837C30.6666 28.3495 24.6597 24.917 17.2499 24.917C9.8401 24.917 3.83325 28.3495 3.83325 32.5837C3.83325 36.8178 9.8401 40.2503 17.2499 40.2503Z",
                                                            stroke: "white",
                                                            strokeWidth: "2.88"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            opacity: "0.5",
                                                            d: "M34.5 26.8335C37.8618 27.5714 40.25 29.4382 40.25 31.6252C40.25 33.5993 38.3065 35.3109 35.4583 36.1677",
                                                            stroke: "white",
                                                            strokeWidth: "2.88",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "counter",
                                                        children: "4500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "sub",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Expert Instructors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shape1",
                                        "data-speed": "0.03",
                                        "data-revert": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/about/shape1.png",
                                            alt: "image",
                                            width: 282,
                                            height: 282
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/About.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shape2",
                                        "data-speed": "0.03",
                                        "data-revert": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/about/shape2.png",
                                            alt: "image",
                                            width: 191,
                                            height: 191
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/About.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/About.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/About.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-xl-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-about-content section-title-animation animation-style1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sub",
                                        children: "About Mindo Health"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "title-animation",
                                                suppressHydrationWarning: true,
                                                children: "One Platform. Infinite"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "title-animation",
                                                suppressHydrationWarning: true,
                                                children: "Learning"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/title-line.png",
                                                alt: "image",
                                                width: 155,
                                                height: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "title-animation",
                                                suppressHydrationWarning: true,
                                                children: "Possibilities."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "At Mindo Health, we believe quality education should be accessible, engaging, and empowering—for everyone, everywhere."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
                                        className: "list",
                                        "data-cues": "fadeIn",
                                        "data-duration": "1000",
                                        initial: "hidden",
                                        whileInView: "visible",
                                        viewport: {
                                            once: true,
                                            amount: 0.3
                                        },
                                        variants: {
                                            hidden: {},
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.12,
                                                    delayChildren: 0.08
                                                }
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                variants: {
                                                    hidden: {
                                                        opacity: 0,
                                                        y: 14
                                                    },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: ITEM_DURATION,
                                                            ease: [
                                                                0.22,
                                                                1,
                                                                0.36,
                                                                1
                                                            ]
                                                        }
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "23",
                                                            height: "22",
                                                            viewBox: "0 0 23 22",
                                                            fill: "none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9.12945 18.8897C9.04169 18.8897 8.95545 18.8667 8.8793 18.8231C8.80314 18.7795 8.73971 18.7168 8.69528 18.6411C7.01694 15.7816 2.54231 9.69345 2.49736 9.63229C2.4257 9.5349 2.39148 9.41498 2.40097 9.29444C2.41045 9.1739 2.463 9.0608 2.54901 8.97582L3.925 7.61622C4.00874 7.53347 4.11883 7.48268 4.23614 7.4727C4.35345 7.46271 4.47055 7.49415 4.56708 7.56155L9.02463 10.6741C12.0069 6.8495 14.777 4.20773 16.5994 2.64892C18.6509 0.894184 19.9569 0.104511 20.0115 0.0717886C20.0897 0.024819 20.1793 4.61886e-06 20.2705 6.63063e-10H22.4965C22.5985 -5.23576e-06 22.6982 0.0310049 22.7822 0.0889194C22.8662 0.146834 22.9307 0.228918 22.967 0.32429C23.0033 0.419662 23.0098 0.523819 22.9855 0.622952C22.9613 0.722086 22.9075 0.811514 22.8313 0.879383C16.5099 6.50979 9.6356 18.5148 9.56708 18.6354C9.52338 18.7121 9.46025 18.776 9.38404 18.8207C9.30784 18.8653 9.22123 18.8891 9.13292 18.8897H9.12945Z",
                                                                    fill: "#1C43FE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17.6202 21.6082H0.503434C0.369915 21.6082 0.241865 21.5551 0.147452 21.4607C0.0530402 21.3663 0 21.2383 0 21.1047V3.98829C0 3.85477 0.0530402 3.72672 0.147452 3.63231C0.241865 3.5379 0.369915 3.48486 0.503434 3.48486H11.6036C11.7371 3.48486 11.8652 3.5379 11.9596 3.63231C12.054 3.72672 12.107 3.85477 12.107 3.98829C12.107 4.12181 12.054 4.24985 11.9596 4.34426C11.8652 4.43867 11.7371 4.49171 11.6036 4.49171H1.00687V20.6013H17.1168V10.0048C17.1168 9.87131 17.1698 9.74326 17.2642 9.64885C17.3586 9.55444 17.4867 9.5014 17.6202 9.5014C17.7537 9.5014 17.8818 9.55444 17.9762 9.64885C18.0706 9.74326 18.1236 9.87131 18.1236 10.0048V21.1047C18.1236 21.2383 18.0706 21.3663 17.9762 21.4607C17.8818 21.5551 17.7537 21.6082 17.6202 21.6082Z",
                                                                    fill: "#1C43FE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Learn from Anywhere"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/About.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Access your courses anytime, on any device—at home, at work, or on the go."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/About.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                variants: {
                                                    hidden: {
                                                        opacity: 0,
                                                        y: 14
                                                    },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: ITEM_DURATION,
                                                            ease: [
                                                                0.22,
                                                                1,
                                                                0.36,
                                                                1
                                                            ]
                                                        }
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "23",
                                                            height: "22",
                                                            viewBox: "0 0 23 22",
                                                            fill: "none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9.12945 18.8897C9.04169 18.8897 8.95545 18.8667 8.8793 18.8231C8.80314 18.7795 8.73971 18.7168 8.69528 18.6411C7.01694 15.7816 2.54231 9.69345 2.49736 9.63229C2.4257 9.5349 2.39148 9.41498 2.40097 9.29444C2.41045 9.1739 2.463 9.0608 2.54901 8.97582L3.925 7.61622C4.00874 7.53347 4.11883 7.48268 4.23614 7.4727C4.35345 7.46271 4.47055 7.49415 4.56708 7.56155L9.02463 10.6741C12.0069 6.8495 14.777 4.20773 16.5994 2.64892C18.6509 0.894184 19.9569 0.104511 20.0115 0.0717886C20.0897 0.024819 20.1793 4.61886e-06 20.2705 6.63063e-10H22.4965C22.5985 -5.23576e-06 22.6982 0.0310049 22.7822 0.0889194C22.8662 0.146834 22.9307 0.228918 22.967 0.32429C23.0033 0.419662 23.0098 0.523819 22.9855 0.622952C22.9613 0.722086 22.9075 0.811514 22.8313 0.879383C16.5099 6.50979 9.6356 18.5148 9.56708 18.6354C9.52338 18.7121 9.46025 18.776 9.38404 18.8207C9.30784 18.8653 9.22123 18.8891 9.13292 18.8897H9.12945Z",
                                                                    fill: "#1C43FE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17.6202 21.6082H0.503434C0.369915 21.6082 0.241865 21.5551 0.147452 21.4607C0.0530402 21.3663 0 21.2383 0 21.1047V3.98829C0 3.85477 0.0530402 3.72672 0.147452 3.63231C0.241865 3.5379 0.369915 3.48486 0.503434 3.48486H11.6036C11.7371 3.48486 11.8652 3.5379 11.9596 3.63231C12.054 3.72672 12.107 3.85477 12.107 3.98829C12.107 4.12181 12.054 4.24985 11.9596 4.34426C11.8652 4.43867 11.7371 4.49171 11.6036 4.49171H1.00687V20.6013H17.1168V10.0048C17.1168 9.87131 17.1698 9.74326 17.2642 9.64885C17.3586 9.55444 17.4867 9.5014 17.6202 9.5014C17.7537 9.5014 17.8818 9.55444 17.9762 9.64885C18.0706 9.74326 18.1236 9.87131 18.1236 10.0048V21.1047C18.1236 21.2383 18.0706 21.3663 17.9762 21.4607C17.8818 21.5551 17.7537 21.6082 17.6202 21.6082Z",
                                                                    fill: "#1C43FE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Teach with Confidence"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/About.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "All the tools you need to build, launch, and scale your courses—stress-free."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/About.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 258,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                variants: {
                                                    hidden: {
                                                        opacity: 0,
                                                        y: 14
                                                    },
                                                    visible: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: {
                                                            duration: ITEM_DURATION,
                                                            ease: [
                                                                0.22,
                                                                1,
                                                                0.36,
                                                                1
                                                            ]
                                                        }
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "23",
                                                            height: "22",
                                                            viewBox: "0 0 23 22",
                                                            fill: "none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9.12945 18.8897C9.04169 18.8897 8.95545 18.8667 8.8793 18.8231C8.80314 18.7795 8.73971 18.7168 8.69528 18.6411C7.01694 15.7816 2.54231 9.69345 2.49736 9.63229C2.4257 9.5349 2.39148 9.41498 2.40097 9.29444C2.41045 9.1739 2.463 9.0608 2.54901 8.97582L3.925 7.61622C4.00874 7.53347 4.11883 7.48268 4.23614 7.4727C4.35345 7.46271 4.47055 7.49415 4.56708 7.56155L9.02463 10.6741C12.0069 6.8495 14.777 4.20773 16.5994 2.64892C18.6509 0.894184 19.9569 0.104511 20.0115 0.0717886C20.0897 0.024819 20.1793 4.61886e-06 20.2705 6.63063e-10H22.4965C22.5985 -5.23576e-06 22.6982 0.0310049 22.7822 0.0889194C22.8662 0.146834 22.9307 0.228918 22.967 0.32429C23.0033 0.419662 23.0098 0.523819 22.9855 0.622952C22.9613 0.722086 22.9075 0.811514 22.8313 0.879383C16.5099 6.50979 9.6356 18.5148 9.56708 18.6354C9.52338 18.7121 9.46025 18.776 9.38404 18.8207C9.30784 18.8653 9.22123 18.8891 9.13292 18.8897H9.12945Z",
                                                                    fill: "#1C43FE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17.6202 21.6082H0.503434C0.369915 21.6082 0.241865 21.5551 0.147452 21.4607C0.0530402 21.3663 0 21.2383 0 21.1047V3.98829C0 3.85477 0.0530402 3.72672 0.147452 3.63231C0.241865 3.5379 0.369915 3.48486 0.503434 3.48486H11.6036C11.7371 3.48486 11.8652 3.5379 11.9596 3.63231C12.054 3.72672 12.107 3.85477 12.107 3.98829C12.107 4.12181 12.054 4.24985 11.9596 4.34426C11.8652 4.43867 11.7371 4.49171 11.6036 4.49171H1.00687V20.6013H17.1168V10.0048C17.1168 9.87131 17.1698 9.74326 17.2642 9.64885C17.3586 9.55444 17.4867 9.5014 17.6202 9.5014C17.7537 9.5014 17.8818 9.55444 17.9762 9.64885C18.0706 9.74326 18.1236 9.87131 18.1236 10.0048V21.1047C18.1236 21.2383 18.0706 21.3663 17.9762 21.4607C17.8818 21.5551 17.7537 21.6082 17.6202 21.6082Z",
                                                                    fill: "#1C43FE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: "Earn Real Certificates"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/About.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Complete courses and receive professional certificates to boost your career."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/About.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Index/About.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/About.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "about-btn",
                                        initial: "hidden",
                                        whileInView: "visible",
                                        viewport: {
                                            once: true,
                                            amount: 0.3
                                        },
                                        variants: {
                                            hidden: {
                                                opacity: 0,
                                                y: 16
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1
                                                    ],
                                                    delay: BUTTON_DELAY
                                                }
                                            }
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about-us",
                                            className: "default-btn",
                                            children: [
                                                "Learn More About Us",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "14",
                                                    viewBox: "0 0 18 14",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            opacity: "0.5",
                                                            d: "M16.25 6.75V7.25H1.25V6.75H16.25Z",
                                                            fill: "white",
                                                            stroke: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.75 1L16.75 7L10.75 13",
                                                            stroke: "white",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/About.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/About.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/About.tsx",
                                            lineNumber: 356,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/About.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/About.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/About.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/About.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Index/About.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Index/About.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(About, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/Banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Banner
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
function Banner() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Banner.useEffect": ()=>{
            // --- Existing data-cues animations ---
            const elements = document.querySelectorAll("[data-cues]");
            elements.forEach({
                "Banner.useEffect": (el)=>{
                    const cue = el.getAttribute("data-cues");
                    const durationAttr = el.getAttribute("data-duration");
                    const duration = durationAttr ? parseFloat(durationAttr) / 1000 : 1;
                    if (cue === "zoomIn") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                            scale: 0.5,
                            opacity: 0
                        }, {
                            scale: 1,
                            opacity: 1,
                            duration,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%"
                            }
                        });
                    }
                    if (cue === "bounceIn") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                            y: 100,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration,
                            ease: "bounce.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%"
                            }
                        });
                    }
                    if (cue === "slideInUp") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                            y: 60,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%"
                            }
                        });
                    }
                }
            }["Banner.useEffect"]);
            // --- Mousemove parallax for .mesh-grad (window-centered math) ---
            const area = document.querySelector(".education-banner-area");
            if (!area) return;
            let raf = 0;
            let lastEvent = null;
            const animateFromEvent = {
                "Banner.useEffect.animateFromEvent": (e)=>{
                    const wx = window.innerWidth;
                    const wy = window.innerHeight;
                    const x = e.clientX; // window coordinates
                    const y = e.clientY;
                    const newx = x - wx / 2;
                    const newy = y - wy / 2;
                    const meshes = area.querySelectorAll(".mesh-grad");
                    meshes.forEach({
                        "Banner.useEffect.animateFromEvent": (el)=>{
                            const speedAttr = el.getAttribute("data-speed");
                            const revertAttr = el.getAttribute("data-revert");
                            const speed = speedAttr ? parseFloat(speedAttr) : 0.02;
                            const revert = revertAttr === "true" || revertAttr === "1";
                            const s = revert ? -speed : speed;
                            // Match the legacy formula: {x: (1 - newx*speed), y: (1 - newy*speed)}
                            const tx = 1 - newx * s;
                            const ty = 1 - newy * s;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                                x: tx,
                                y: ty,
                                duration: 1,
                                overwrite: "auto",
                                ease: "power2.out"
                            });
                        }
                    }["Banner.useEffect.animateFromEvent"]);
                }
            }["Banner.useEffect.animateFromEvent"];
            const onMove = {
                "Banner.useEffect.onMove": (e)=>{
                    const me = e;
                    lastEvent = me;
                    if (raf) return;
                    raf = window.requestAnimationFrame({
                        "Banner.useEffect.onMove": ()=>{
                            if (lastEvent) animateFromEvent(lastEvent);
                            raf = 0;
                        }
                    }["Banner.useEffect.onMove"]);
                }
            }["Banner.useEffect.onMove"];
            area.addEventListener("mousemove", onMove);
            return ({
                "Banner.useEffect": ()=>{
                    area.removeEventListener("mousemove", onMove);
                    if (raf) cancelAnimationFrame(raf);
                }
            })["Banner.useEffect"];
        }
    }["Banner.useEffect"], []);
    return(// Start Education Banner Area
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "education-banner-area",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row justify-content-center align-items-center g-5",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-banner-content section-title-animation animation-style1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "title-animation",
                                        children: [
                                            "Every Course, Every Skill — One",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Powerful Platform.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/banner/line.png",
                                                        alt: "image",
                                                        width: 270,
                                                        height: 18,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Banner.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Mindo Health is your all-in-one online education platform—built for students, instructors, and institutions to thrive in a connected learning world."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "banner-btn",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/courses",
                                            className: "default-btn",
                                            children: [
                                                "Explore Courses",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "14",
                                                    viewBox: "0 0 18 14",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            opacity: "0.5",
                                                            d: "M16.25 6.75V7.25H1.25V6.75H16.25Z",
                                                            fill: "white",
                                                            stroke: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/Banner.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.75 1L16.75 7L10.75 13",
                                                            stroke: "white",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/Banner.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/Banner.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/Banner.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/Banner.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Banner.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-banner-image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/banner/teacher.png",
                                        alt: "image",
                                        width: 492,
                                        height: 730,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mesh-grad",
                                        "data-cues": "zoomIn",
                                        "data-duration": "1000",
                                        "data-speed": "0.02",
                                        "data-revert": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/banner/mesh-grad.png",
                                            alt: "image",
                                            width: 854,
                                            height: 622,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/Banner.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "trust-review",
                                        "data-cues": "bounceIn",
                                        "data-duration": "1500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sub",
                                                children: "Review on"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/Banner.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/banner/star.svg",
                                                        alt: "star",
                                                        width: 24,
                                                        height: 23
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 19
                                                    }, this),
                                                    " ",
                                                    "Trustpilot"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Banner.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "list",
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/images/banner/star2.svg",
                                                            alt: "star2",
                                                            width: 21,
                                                            height: 21
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/Banner.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/Banner.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "4,500k+ Reviews"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/Banner.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "arrow",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/banner/arrow.png",
                                                    alt: "image",
                                                    width: 91,
                                                    height: 38
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Banner.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/Banner.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/Banner.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/Banner.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Banner.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/Banner.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Banner.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "education-banner-vector",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/banner/vector.png",
                    alt: "image",
                    width: 1920,
                    height: 788,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Index/Banner.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Banner.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "education-banner-shape1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/banner/shape1.png",
                    alt: "image",
                    width: 96,
                    height: 191
                }, void 0, false, {
                    fileName: "[project]/src/components/Index/Banner.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Banner.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "education-banner-shape2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/banner/shape2.png",
                    alt: "image",
                    width: 50,
                    height: 35
                }, void 0, false, {
                    fileName: "[project]/src/components/Index/Banner.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Banner.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "education-banner-shape3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/banner/shape3.png",
                    alt: "image",
                    width: 51,
                    height: 35
                }, void 0, false, {
                    fileName: "[project]/src/components/Index/Banner.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Banner.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "education-banner-shape4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/banner/shape4.png",
                    alt: "image",
                    width: 101,
                    height: 183
                }, void 0, false, {
                    fileName: "[project]/src/components/Index/Banner.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Banner.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Index/Banner.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this));
}
_s(Banner, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Banner;
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/Categories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Categories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const categories = [
    {
        title: "Mental Wellness",
        href: "/courses",
        iconSrc: "/images/categories/icon1.svg"
    },
    {
        title: "Applied Psychology",
        href: "/courses",
        iconSrc: "/images/categories/icon2.svg",
        wrapClass: "wrap2"
    },
    {
        title: "Psychology in Real Life",
        href: "/courses",
        iconSrc: "/images/categories/icon3.svg",
        wrapClass: "wrap3"
    },
    {
        title: "Mindfulness & Meditation",
        href: "/courses",
        iconSrc: "/images/categories/icon4.svg",
        wrapClass: "wrap4"
    },
    {
        title: "Stress Management",
        href: "/courses",
        iconSrc: "/images/categories/icon5.svg",
        wrapClass: "wrap5"
    },
    {
        title: "Emotional Intelligence",
        href: "/courses",
        iconSrc: "/images/categories/icon6.svg",
        wrapClass: "wrap2"
    },
    {
        title: "Cognitive Behavioral Therapy",
        href: "/courses",
        iconSrc: "/images/categories/icon7.svg",
        wrapClass: "wrap3"
    },
    {
        title: "Positive Psychology",
        href: "/courses",
        iconSrc: "/images/categories/icon8.svg",
        wrapClass: "wrap4"
    },
    {
        title: "Self-Care & Resilience",
        href: "/courses",
        iconSrc: "/images/categories/icon9.svg",
        wrapClass: "wrap5"
    }
];
// Parent variant with stagger for the section title only
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
// Simple container for the cards row (no implicit stagger)
const rowContainer = {
    hidden: {},
    visible: {}
};
// Variant that accepts a custom index to delay each card left→right
const slideInUp = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: function() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        return {
            opacity: 1,
            y: 0,
            transition: {
                // delay by index so items animate left → right in DOM order
                delay: i * 0.08,
                duration: 0.6,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            }
        };
    }
};
function Categories() {
    return(// Start Education Categories Area
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "education-categories-area ptb-140",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "section-title section-title-animation animation-style1",
                    variants: containerVariants,
                    initial: false,
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    suppressHydrationWarning: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            variants: slideInUp,
                            initial: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "title-animation",
                                    suppressHydrationWarning: true,
                                    children: "Top Course Categories"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/Categories.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/title-line.png",
                                    alt: "image",
                                    width: 155,
                                    height: 12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/Categories.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/Categories.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            variants: slideInUp,
                            initial: false,
                            children: "Choose from industry-relevant topics curated by experts."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Categories.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/Categories.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "row justify-content-center align-items-end g-4",
                    variants: containerVariants,
                    initial: false,
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        amount: 0.15
                    },
                    suppressHydrationWarning: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-9 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "row justify-content-center g-4",
                                variants: rowContainer,
                                initial: false,
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.15
                                },
                                suppressHydrationWarning: true,
                                children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-xl-4 col-sm-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "education-categories-card".concat(cat.wrapClass ? " " + cat.wrapClass : ""),
                                            variants: slideInUp,
                                            custom: idx,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: cat.iconSrc,
                                                        alt: "icon",
                                                        width: 40,
                                                        height: 40
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Categories.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Categories.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: cat.href,
                                                            children: cat.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/Categories.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Categories.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Categories.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/Categories.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    }, cat.title + idx, false, {
                                        fileName: "[project]/src/components/Index/Categories.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Index/Categories.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Categories.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-3 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "education-categories-right",
                                variants: containerVariants,
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: slideInUp,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/course-categories",
                                            className: "circle-box",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "View All ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/components/Index/Categories.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 30
                                                        }, this),
                                                        " Categories"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/Categories.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "14",
                                                    viewBox: "0 0 18 14",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            opacity: "0.5",
                                                            d: "M16.25 6.75V7.25H1.25V6.75H16.25Z",
                                                            fill: "white",
                                                            stroke: "white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/Categories.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.75 1L16.75 7L10.75 13",
                                                            stroke: "white",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/Categories.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/Categories.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/Categories.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Categories.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "vector-wrap",
                                        variants: slideInUp,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/categories/vector.png",
                                            alt: "image",
                                            width: 205,
                                            height: 254
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/Categories.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Categories.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/Categories.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Categories.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/Categories.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Index/Categories.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Index/Categories.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this));
}
_c = Categories;
var _c;
__turbopack_context__.k.register(_c, "Categories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/FunFact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EducationFun
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const containerVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [
                0.22,
                1,
                0.36,
                1
            ],
            when: "beforeChildren",
            staggerChildren: 0.12
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const useCounterObserver = (root)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCounterObserver.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!("IntersectionObserver" in window)) return;
            const rootEl = root.current;
            if (!rootEl) return;
            const counters = Array.from(rootEl.querySelectorAll(".counter"));
            const observer = new IntersectionObserver({
                "useCounterObserver.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (!entry.isIntersecting) continue;
                        const el = entry.target;
                        // Extract numeric portion safely (ignores any suffix in sibling like "+", "M+", etc.)
                        const target = parseInt(el.innerText.replace(/\D/g, ""), 10);
                        if (!Number.isFinite(target)) {
                            observer.unobserve(el);
                            continue;
                        }
                        let current = 0;
                        const step = target / 200; // ~2s total with 10ms tick
                        const intervalId = window.setInterval({
                            "useCounterObserver.useEffect.intervalId": ()=>{
                                current += step;
                                const value = Math.min(Math.floor(current), target);
                                el.innerText = String(value);
                                if (value >= target) {
                                    window.clearInterval(intervalId);
                                }
                            }
                        }["useCounterObserver.useEffect.intervalId"], 10);
                        observer.unobserve(el);
                    }
                }
            }["useCounterObserver.useEffect"], {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px"
            });
            counters.forEach({
                "useCounterObserver.useEffect": (el)=>observer.observe(el)
            }["useCounterObserver.useEffect"]);
            return ({
                "useCounterObserver.useEffect": ()=>observer.disconnect()
            })["useCounterObserver.useEffect"];
        }
    }["useCounterObserver.useEffect"], [
        root
    ]);
};
_s(useCounterObserver, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function EducationFun() {
    _s1();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useCounterObserver(rootRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "education-fun-area",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "row justify-content-center g-5",
                variants: containerVariants,
                initial: false,
                whileInView: "visible",
                viewport: {
                    once: true,
                    amount: 0.2
                },
                suppressHydrationWarning: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "col-lg-3 col-sm-6",
                        variants: itemVariants,
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "education-fun-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "35",
                                        height: "36",
                                        viewBox: "0 0 35 36",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M28.6517 23.4068H6.34797M28.6517 23.4068V12.4168C28.6517 9.66642 28.6517 8.29266 27.7971 7.43808C26.944 6.5835 25.5688 6.5835 22.8184 6.5835H12.1813C9.43088 6.5835 8.05713 6.5835 7.20255 7.43808C6.34797 8.29266 6.34797 9.66642 6.34797 12.4168V23.4068M28.6517 23.4068L31.1951 26.0318L31.3234 26.166C31.7912 26.6799 32.0601 27.3439 32.0817 28.0385L32.0832 28.2237C32.0832 28.4425 32.0832 28.5504 32.0774 28.6423C32.0326 29.3509 31.7309 30.0188 31.2289 30.5209C30.7268 31.0229 30.0589 31.3246 29.3503 31.3694C29.2108 31.3753 29.0713 31.3772 28.9317 31.3752H6.06796C5.84921 31.3752 5.7413 31.3752 5.64942 31.3694C4.94082 31.3246 4.27287 31.0229 3.77081 30.5209C3.26876 30.0188 2.96708 29.3509 2.92234 28.6423C2.9165 28.5504 2.9165 28.441 2.9165 28.2252L2.91796 28.04C2.9396 27.3454 3.20852 26.6814 3.6763 26.1675L3.80463 26.0333L6.34797 23.4068",
                                                stroke: "white",
                                                strokeWidth: "1.8125",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 104,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                opacity: "0.5",
                                                d: "M13.8542 27.729H21.1459",
                                                stroke: "white",
                                                strokeWidth: "1.8125",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 110,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                opacity: "0.5",
                                                d: "M18.594 10.5938C18.594 10.8838 18.4788 11.162 18.2736 11.3671C18.0685 11.5723 17.7903 11.6875 17.5002 11.6875C17.2102 11.6875 16.932 11.5723 16.7268 11.3671C16.5217 11.162 16.4065 10.8838 16.4065 10.5938C16.4065 10.3037 16.5217 10.0255 16.7268 9.82035C16.932 9.61523 17.2102 9.5 17.5002 9.5C17.7903 9.5 18.0685 9.61523 18.2736 9.82035C18.4788 10.0255 18.594 10.3037 18.594 10.5938Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 117,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/FunFact.tsx",
                                        lineNumber: 97,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 96,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "counter",
                                                    children: "8000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "sub",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 125,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Online Courses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 129,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 124,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/FunFact.tsx",
                            lineNumber: 95,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/FunFact.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "col-lg-3 col-sm-6",
                        variants: itemVariants,
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "education-fun-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "35",
                                        height: "35",
                                        viewBox: "0 0 35 35",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.4998 14.5832C20.7215 14.5832 23.3332 11.9715 23.3332 8.74984C23.3332 5.52818 20.7215 2.9165 17.4998 2.9165C14.2782 2.9165 11.6665 5.52818 11.6665 8.74984C11.6665 11.9715 14.2782 14.5832 17.4998 14.5832Z",
                                                stroke: "white",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 148,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M26.2498 29.1667C29.4715 29.1667 32.0832 26.555 32.0832 23.3333C32.0832 20.1117 29.4715 17.5 26.2498 17.5C23.0282 17.5 20.4165 20.1117 20.4165 23.3333C20.4165 26.555 23.0282 29.1667 26.2498 29.1667Z",
                                                stroke: "white",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 153,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M24.3059 23.3331L25.5207 24.7914L28.1938 22.0366",
                                                stroke: "white",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 158,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                opacity: "0.5",
                                                d: "M21.8749 19.4349C20.4388 19.1142 18.9714 18.9542 17.4999 18.9581C11.057 18.9581 5.83325 21.8966 5.83325 25.5206C5.83325 29.1445 5.83325 32.0831 17.4999 32.0831C25.7935 32.0831 28.191 30.5985 28.8851 28.4372",
                                                stroke: "white",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 165,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/FunFact.tsx",
                                        lineNumber: 141,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 140,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "counter",
                                                    children: "4500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "sub",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 174,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Verified Instructors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 178,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 173,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/FunFact.tsx",
                            lineNumber: 139,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/FunFact.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "col-lg-3 col-sm-6",
                        variants: itemVariants,
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "education-fun-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "35",
                                        height: "36",
                                        viewBox: "0 0 35 36",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20.4167 31.7395H14.5834V33.927H20.4167V31.7395ZM4.0105 21.1666V15.3333H1.823V21.1666H4.0105ZM30.9897 20.5293V21.1666H33.1772V20.5293H30.9897ZM21.7161 7.47429L27.4897 12.6703L28.9524 11.0428L23.1803 5.84679L21.7161 7.47429ZM33.1772 20.5293C33.1772 18.0662 33.199 16.5058 32.5792 15.1116L30.5799 16.0026C30.9678 16.8747 30.9897 17.8737 30.9897 20.5293H33.1772ZM27.4897 12.6703C29.4628 14.4466 30.192 15.132 30.5799 16.0026L32.5792 15.1116C31.958 13.716 30.784 12.6908 28.9524 11.0428L27.4897 12.6703ZM14.6272 4.76034C16.9342 4.76034 17.8049 4.77784 18.5792 5.07534L19.3638 3.03367C18.1213 2.55534 16.768 2.57284 14.6272 2.57284V4.76034ZM23.1803 5.84825C21.5965 4.42346 20.6063 3.50909 19.3638 3.03367L18.5807 5.07534C19.3565 5.37284 20.0099 5.93867 21.7161 7.47429L23.1803 5.84825ZM14.5834 31.7395C11.8024 31.7395 9.82779 31.7366 8.32717 31.5353C6.86154 31.3385 6.01571 30.968 5.39883 30.3512L3.853 31.897C4.94383 32.9908 6.32779 33.4735 8.03696 33.7039C9.71404 33.9299 11.8651 33.927 14.5834 33.927V31.7395ZM1.823 21.1666C1.823 23.8849 1.82008 26.0345 2.04612 27.713C2.27654 29.4222 2.76071 30.8062 3.85154 31.8985L5.39737 30.3526C4.78196 29.7343 4.41154 28.8885 4.21467 27.4214C4.01342 25.9237 4.0105 23.9476 4.0105 21.1666H1.823ZM20.4167 33.927C23.1351 33.927 25.2847 33.9299 26.9632 33.7039C28.6724 33.4735 30.0563 32.9893 31.1486 31.8985L29.6028 30.3526C28.9845 30.968 28.1386 31.3385 26.6715 31.5353C25.1738 31.7366 23.1978 31.7395 20.4167 31.7395V33.927ZM30.9897 21.1666C30.9897 23.9476 30.9867 25.9237 30.7855 27.4228C30.5886 28.8885 30.2182 29.7343 29.6013 30.3512L31.1472 31.897C32.2409 30.8062 32.7236 29.4222 32.954 27.713C33.1801 26.036 33.1772 23.8849 33.1772 21.1666H30.9897ZM4.0105 15.3333C4.0105 12.5522 4.01342 10.5776 4.21467 9.077C4.41154 7.61138 4.78196 6.76554 5.39883 6.14867L3.853 4.60284C2.75925 5.69367 2.27654 7.07763 2.04612 8.78679C1.82008 10.4639 1.823 12.6149 1.823 15.3333H4.0105ZM14.6272 2.57284C11.8928 2.57284 9.733 2.56992 8.04862 2.79596C6.33217 3.02638 4.94383 3.51054 3.85154 4.60138L5.39737 6.14721C6.01571 5.53179 6.863 5.16138 8.33883 4.9645C9.84529 4.76325 11.8315 4.76034 14.6272 4.76034V2.57284Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 197,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                opacity: "0.5",
                                                d: "M18.9585 4.39551V8.04134C18.9585 11.4786 18.9585 13.198 20.026 14.2655C21.0935 15.333 22.8129 15.333 26.2502 15.333H32.0835M11.8797 19.7415C12.4339 18.7455 12.711 18.2497 13.1252 18.2497C13.5393 18.2497 13.8164 18.7455 14.3706 19.7415L14.5135 19.9982C14.671 20.2811 14.7497 20.4211 14.8722 20.5145C14.9962 20.6078 15.1493 20.6428 15.4556 20.7113L15.7327 20.7755C16.8089 21.0191 17.347 21.1401 17.4754 21.5513C17.6037 21.9626 17.2362 22.3928 16.5027 23.2503L16.3131 23.472C16.1045 23.7155 15.9995 23.8366 15.9529 23.9882C15.9062 24.1399 15.9222 24.3018 15.9529 24.627L15.982 24.923C16.0929 26.0678 16.1483 26.6409 15.8143 26.8947C15.4789 27.1484 14.9743 26.9166 13.9666 26.4528L13.707 26.3332C13.4197 26.202 13.2768 26.1349 13.1252 26.1349C12.9735 26.1349 12.8306 26.202 12.5433 26.3332L12.2837 26.4528C11.276 26.918 10.7714 27.1484 10.4375 26.8947C10.1035 26.6409 10.1575 26.0678 10.2683 24.923L10.2975 24.627C10.3281 24.3018 10.3441 24.1399 10.2975 23.9882C10.2508 23.8366 10.1458 23.7155 9.93725 23.472L9.74766 23.2503C9.01412 22.3928 8.64662 21.964 8.77496 21.5513C8.90329 21.1401 9.44141 21.0191 10.5177 20.7755L10.7947 20.7113C11.101 20.6428 11.2541 20.6093 11.3781 20.5145C11.5006 20.4211 11.5793 20.2811 11.7368 19.9982L11.8797 19.7415Z",
                                                stroke: "white",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 201,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/FunFact.tsx",
                                        lineNumber: 190,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 189,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "counter",
                                                    children: "7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "sub",
                                                    children: "M+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 210,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Certificates Issued"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 214,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 209,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/FunFact.tsx",
                            lineNumber: 188,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/FunFact.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "col-lg-3 col-sm-6",
                        variants: itemVariants,
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "education-fun-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "35",
                                        height: "35",
                                        viewBox: "0 0 35 35",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                opacity: "0.5",
                                                d: "M2.9165 17.4998H32.0832M23.3332 17.4998C23.3332 19.4146 23.1815 21.3119 22.8884 23.0809C22.5967 24.8498 22.1665 26.4569 21.624 27.8117C21.083 29.1665 20.4398 30.2398 19.7325 30.9734C19.0238 31.7055 18.2655 32.0832 17.4998 32.0832C16.7342 32.0832 15.9759 31.7055 15.2686 30.9734C14.5598 30.2398 13.9167 29.165 13.3757 27.8117C12.8332 26.4569 12.403 24.8513 12.1098 23.0809C11.8107 21.2357 11.6625 19.3691 11.6665 17.4998C11.6665 15.585 11.8167 13.6878 12.1098 11.9188C12.403 10.1498 12.8332 8.54275 13.3757 7.18796C13.9167 5.83317 14.5598 4.75984 15.2671 4.0263C15.9759 3.29567 16.7342 2.9165 17.4998 2.9165C18.2655 2.9165 19.0238 3.29421 19.7311 4.0263C20.4398 4.75984 21.083 5.83463 21.624 7.18796C22.1665 8.54275 22.5967 10.1484 22.8884 11.9188C23.183 13.6878 23.3332 15.585 23.3332 17.4998Z",
                                                stroke: "white",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 233,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M32.0832 17.5001C32.0832 19.4153 31.7059 21.3117 30.973 23.0812C30.2401 24.8506 29.1658 26.4583 27.8116 27.8126C26.4573 29.1668 24.8496 30.2411 23.0802 30.974C21.3108 31.7069 19.4143 32.0841 17.4991 32.0841C15.5839 32.0841 13.6874 31.7069 11.918 30.974C10.1486 30.2411 8.54087 29.1668 7.18661 27.8126C5.83236 26.4583 4.7581 24.8506 4.02518 23.0812C3.29227 21.3117 2.91504 19.4153 2.91504 17.5001C2.91504 13.6321 4.45157 9.92263 7.18661 7.18759C9.92165 4.45255 13.6312 2.91602 17.4991 2.91602C21.367 2.91602 25.0765 4.45255 27.8116 7.18759C30.5466 9.92263 32.0832 13.6321 32.0832 17.5001Z",
                                                stroke: "white",
                                                strokeWidth: "1.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/FunFact.tsx",
                                                lineNumber: 240,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/FunFact.tsx",
                                        lineNumber: 226,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 225,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "counter",
                                                    children: "120"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "sub",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 248,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Countries Learners"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/FunFact.tsx",
                                            lineNumber: 252,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/FunFact.tsx",
                                    lineNumber: 247,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/FunFact.tsx",
                            lineNumber: 224,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/FunFact.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Index/FunFact.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Index/FunFact.tsx",
            lineNumber: 81,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Index/FunFact.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this);
}
_s1(EducationFun, "S385wqILSUCAxwEWf2eue0p4jQ8=", false, function() {
    return [
        useCounterObserver
    ];
});
_c = EducationFun;
var _c;
__turbopack_context__.k.register(_c, "EducationFun");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/Courses/variants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EASE_BEZIER",
    ()=>EASE_BEZIER,
    "fadeItem",
    ()=>fadeItem,
    "fadeUpContainer",
    ()=>fadeUpContainer,
    "scaleOnHover",
    ()=>scaleOnHover,
    "staggerWrap",
    ()=>staggerWrap
]);
const EASE_BEZIER = [
    0.16,
    1,
    0.3,
    1
];
const fadeUpContainer = {
    hidden: {
        opacity: 0,
        y: 24
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: EASE_BEZIER
        }
    }
};
const staggerWrap = {
    show: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.06
        }
    }
};
const fadeItem = {
    hidden: {
        opacity: 0,
        y: 12
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: EASE_BEZIER
        }
    }
};
const scaleOnHover = {
    rest: {
        scale: 1,
        y: 0
    },
    hover: {
        scale: 1.02,
        y: -4,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/Courses/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const SectionHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "section-title section-title-animation animation-style1",
        "data-cues": "slideInUp",
        "data-duration": "1000",
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUpContainer"],
        initial: false,
        whileInView: "show",
        viewport: {
            once: true,
            amount: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sub",
                children: "Featured Courses"
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Courses/SectionHeader.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "title-animation",
                        suppressHydrationWarning: true,
                        children: "Start Your Learning Journey"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/Courses/SectionHeader.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block align-middle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/title-line.png",
                            alt: "title line",
                            width: 155,
                            height: 12,
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Courses/SectionHeader.tsx",
                            lineNumber: 23,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/Courses/SectionHeader.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Index/Courses/SectionHeader.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Explore high-quality, expert-led courses designed to help you grow your skills and advance your career."
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Courses/SectionHeader.tsx",
                lineNumber: 32,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Index/Courses/SectionHeader.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = SectionHeader;
const __TURBOPACK__default__export__ = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/Courses/CategoryTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
const CategoryTabs = (param)=>{
    let { categories, selected, onSelect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "top-category-tabs nav nav-tabs",
        role: "tablist",
        "aria-label": "Top categories",
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerWrap"],
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: true,
            amount: 0.2
        },
        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                type: "button",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeItem"],
                onClick: ()=>onSelect(cat),
                className: "nav-link ".concat(selected === cat ? "active" : ""),
                "aria-pressed": selected === cat,
                children: cat
            }, cat, false, {
                fileName: "[project]/src/components/Index/Courses/CategoryTabs.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/Index/Courses/CategoryTabs.tsx",
        lineNumber: 13,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CategoryTabs;
const __TURBOPACK__default__export__ = CategoryTabs;
var _c;
__turbopack_context__.k.register(_c, "CategoryTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/Courses/SubcategoryChips.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/variants.ts [app-client] (ecmascript)");
"use client";
;
;
;
const SubcategoryChips = (param)=>{
    let { category, orderedSubcats, selectedSubcat, onSelectSubcat, courses, learnersBySubcat } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
        className: "inner_tabs",
        "aria-label": "Subcategories",
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerWrap"],
        initial: "hidden",
        animate: "show",
        children: orderedSubcats.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                className: "tab ".concat(selectedSubcat === label ? "active" : ""),
                role: "button",
                tabIndex: 0,
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeItem"],
                whileHover: {
                    y: -2
                },
                style: {
                    opacity: 1,
                    visibility: "visible"
                },
                onClick: ()=>onSelectSubcat(label),
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === " ") onSelectSubcat(label);
                },
                "data-tab": label.toLowerCase().replace(/\s+/g, "-"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/Courses/SubcategoryChips.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            (learnersBySubcat && learnersBySubcat[label] !== undefined ? learnersBySubcat[label] : courses.filter((c)=>c.category === category && c.subcategory === label).reduce((sum, c)=>sum + (c.learners || 0), 0)).toLocaleString(),
                            " ",
                            "Learners"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Index/Courses/SubcategoryChips.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, label, true, {
                fileName: "[project]/src/components/Index/Courses/SubcategoryChips.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)))
    }, category, false, {
        fileName: "[project]/src/components/Index/Courses/SubcategoryChips.tsx",
        lineNumber: 24,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SubcategoryChips;
const __TURBOPACK__default__export__ = SubcategoryChips;
var _c;
__turbopack_context__.k.register(_c, "SubcategoryChips");
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
"[project]/src/components/Index/Courses/CoursesGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/variants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Courses/CourseCard.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const CoursesGrid = (param)=>{
    let { loading, error, courses } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "row justify-content-center g-4",
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerWrap"],
        initial: false,
        whileInView: "show",
        viewport: {
            once: true,
            amount: 0.15
        },
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-12 text-center",
                children: "Loading courses…"
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Courses/CoursesGrid.tsx",
                lineNumber: 20,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-12 text-center text-danger",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Courses/CoursesGrid.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && !error && courses.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-12 text-center text-muted",
                children: "No courses found for this subcategory."
            }, void 0, false, {
                fileName: "[project]/src/components/Index/Courses/CoursesGrid.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "col-xl-3 col-md-6",
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$variants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeItem"],
                    initial: false,
                    whileInView: "show",
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    animate: "rest",
                    whileHover: "hover",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Courses$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        course: course
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/Courses/CoursesGrid.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, course.id, false, {
                    fileName: "[project]/src/components/Index/Courses/CoursesGrid.tsx",
                    lineNumber: 28,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Index/Courses/CoursesGrid.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CoursesGrid;
const __TURBOPACK__default__export__ = CoursesGrid;
var _c;
__turbopack_context__.k.register(_c, "CoursesGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/EducationCourses.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/CategoryTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$SubcategoryChips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/SubcategoryChips.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$CoursesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Courses/CoursesGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Fisher–Yates shuffle (returns a new array)
function shuffle(input) {
    const arr = [
        ...input
    ];
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
    }
    return arr;
}
const EducationCourses = ()=>{
    _s();
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Dynamic categories/subcategories from DB
    const [menuCategories, setMenuCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [menuLoading, setMenuLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [menuError, setMenuError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedSubcategory, setSelectedSubcategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [learnersBySubcat, setLearnersBySubcat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Fetch 4 courses for the current category/subcategory (server-side filter)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationCourses.useEffect": ()=>{
            let cancelled = false;
            ({
                "EducationCourses.useEffect": async ()=>{
                    if (!selectedCategory || !selectedSubcategory) return;
                    try {
                        setLoading(true);
                        setError(null);
                        const params = new URLSearchParams({
                            category: selectedCategory,
                            subcategory: selectedSubcategory,
                            limit: "4",
                            shuffle: "1"
                        });
                        const res = await fetch("/api/public/courses?".concat(params.toString()), {
                            cache: "no-store"
                        });
                        if (!res.ok) throw new Error("Failed to load courses: ".concat(res.status));
                        const json = await res.json();
                        if (!cancelled) setCourses(json);
                    } catch (err) {
                        if (!cancelled) {
                            const message = err instanceof Error ? err.message : "Failed to load courses";
                            setError(message);
                        }
                    } finally{
                        if (!cancelled) setLoading(false);
                    }
                }
            })["EducationCourses.useEffect"]();
            return ({
                "EducationCourses.useEffect": ()=>{
                    cancelled = true;
                }
            })["EducationCourses.useEffect"];
        }
    }["EducationCourses.useEffect"], [
        selectedCategory,
        selectedSubcategory
    ]);
    // Fetch learners count per subcategory for the selected category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationCourses.useEffect": ()=>{
            let cancelled = false;
            ({
                "EducationCourses.useEffect": async ()=>{
                    if (!selectedCategory) return;
                    try {
                        const res = await fetch("/api/public/subcategory-stats?category=".concat(encodeURIComponent(selectedCategory)), {
                            cache: "no-store"
                        });
                        if (!res.ok) return;
                        const json = await res.json();
                        const map = {};
                        var _json_subcategories, _s_learners;
                        for (const s of (_json_subcategories = json === null || json === void 0 ? void 0 : json.subcategories) !== null && _json_subcategories !== void 0 ? _json_subcategories : [])map[s.name] = (_s_learners = s.learners) !== null && _s_learners !== void 0 ? _s_learners : 0;
                        if (!cancelled) setLearnersBySubcat(map);
                    } catch (e) {}
                }
            })["EducationCourses.useEffect"]();
            return ({
                "EducationCourses.useEffect": ()=>{
                    cancelled = true;
                }
            })["EducationCourses.useEffect"];
        }
    }["EducationCourses.useEffect"], [
        selectedCategory
    ]);
    // Fetch categories & subcategories
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationCourses.useEffect": ()=>{
            let cancelled = false;
            ({
                "EducationCourses.useEffect": async ()=>{
                    try {
                        setMenuLoading(true);
                        setMenuError(null);
                        const res = await fetch("/api/public/menu/full", {
                            cache: "no-store"
                        });
                        if (!res.ok) throw new Error("Failed to load categories: ".concat(res.status));
                        const json = await res.json();
                        if (!cancelled) setMenuCategories(json);
                    } catch (err) {
                        if (!cancelled) {
                            const message = err instanceof Error ? err.message : "Failed to load categories";
                            setMenuError(message);
                        }
                    } finally{
                        if (!cancelled) setMenuLoading(false);
                    }
                }
            })["EducationCourses.useEffect"]();
            return ({
                "EducationCourses.useEffect": ()=>{
                    cancelled = true;
                }
            })["EducationCourses.useEffect"];
        }
    }["EducationCourses.useEffect"], []);
    // Build category names list from fetched data (shuffled, top 7)
    const CATEGORY_LIST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EducationCourses.useMemo[CATEGORY_LIST]": ()=>{
            if (!menuCategories.length) return [];
            const names = menuCategories.map({
                "EducationCourses.useMemo[CATEGORY_LIST].names": (c)=>c.name
            }["EducationCourses.useMemo[CATEGORY_LIST].names"]);
            const randomized = shuffle(names);
            return randomized.slice(0, Math.min(7, randomized.length));
        }
    }["EducationCourses.useMemo[CATEGORY_LIST]"], [
        menuCategories
    ]);
    // Initialize selection from the shuffled list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationCourses.useEffect": ()=>{
            var _catObj_subcategories_, _catObj_subcategories;
            if (selectedCategory || !CATEGORY_LIST.length) return;
            const firstCatName = CATEGORY_LIST[0];
            setSelectedCategory(firstCatName);
            const catObj = menuCategories.find({
                "EducationCourses.useEffect.catObj": (c)=>c.name === firstCatName
            }["EducationCourses.useEffect.catObj"]);
            const firstSub = (catObj === null || catObj === void 0 ? void 0 : (_catObj_subcategories = catObj.subcategories) === null || _catObj_subcategories === void 0 ? void 0 : (_catObj_subcategories_ = _catObj_subcategories[0]) === null || _catObj_subcategories_ === void 0 ? void 0 : _catObj_subcategories_.name) || "";
            if (firstSub) setSelectedSubcategory(firstSub);
        }
    }["EducationCourses.useEffect"], [
        CATEGORY_LIST,
        menuCategories,
        selectedCategory
    ]);
    // Safety: keep selection within the shuffled set
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationCourses.useEffect": ()=>{
            if (!selectedCategory || !CATEGORY_LIST.length) return;
            if (!CATEGORY_LIST.includes(selectedCategory)) {
                var _catObj_subcategories_, _catObj_subcategories;
                const first = CATEGORY_LIST[0];
                setSelectedCategory(first);
                const catObj = menuCategories.find({
                    "EducationCourses.useEffect.catObj": (c)=>c.name === first
                }["EducationCourses.useEffect.catObj"]);
                const firstSub = (catObj === null || catObj === void 0 ? void 0 : (_catObj_subcategories = catObj.subcategories) === null || _catObj_subcategories === void 0 ? void 0 : (_catObj_subcategories_ = _catObj_subcategories[0]) === null || _catObj_subcategories_ === void 0 ? void 0 : _catObj_subcategories_.name) || "";
                setSelectedSubcategory(firstSub);
            }
        }
    }["EducationCourses.useEffect"], [
        CATEGORY_LIST,
        menuCategories,
        selectedCategory
    ]);
    // Ordered subcategories for the selected category (from API; fallback to seen in courses)
    const orderedSubcats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EducationCourses.useMemo[orderedSubcats]": ()=>{
            var _cat_subcategories;
            const cat = menuCategories.find({
                "EducationCourses.useMemo[orderedSubcats].cat": (c)=>c.name === selectedCategory
            }["EducationCourses.useMemo[orderedSubcats].cat"]);
            var _cat_subcategories_map;
            const listed = (_cat_subcategories_map = cat === null || cat === void 0 ? void 0 : (_cat_subcategories = cat.subcategories) === null || _cat_subcategories === void 0 ? void 0 : _cat_subcategories.map({
                "EducationCourses.useMemo[orderedSubcats]": (s)=>s.name
            }["EducationCourses.useMemo[orderedSubcats]"])) !== null && _cat_subcategories_map !== void 0 ? _cat_subcategories_map : [];
            if (listed.length > 0) return listed;
            const present = new Set();
            courses.filter({
                "EducationCourses.useMemo[orderedSubcats]": (c)=>c.category === selectedCategory
            }["EducationCourses.useMemo[orderedSubcats]"]).forEach({
                "EducationCourses.useMemo[orderedSubcats]": (c)=>present.add(c.subcategory)
            }["EducationCourses.useMemo[orderedSubcats]"]);
            return Array.from(present);
        }
    }["EducationCourses.useMemo[orderedSubcats]"], [
        menuCategories,
        selectedCategory,
        courses
    ]);
    // Ensure selected subcategory is valid / default to first available
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationCourses.useEffect": ()=>{
            if (!orderedSubcats.length) return;
            if (!orderedSubcats.includes(selectedSubcategory)) {
                setSelectedSubcategory(orderedSubcats[0]);
            }
        }
    }["EducationCourses.useEffect"], [
        orderedSubcats,
        selectedSubcategory
    ]);
    // Courses are already filtered server-side; show 4 results
    const handleSelectCategory = (cat)=>{
        var _catObj_subcategories;
        setSelectedCategory(cat);
        const catObj = menuCategories.find((c)=>c.name === cat);
        var _catObj_subcategories_map;
        const listed = (_catObj_subcategories_map = catObj === null || catObj === void 0 ? void 0 : (_catObj_subcategories = catObj.subcategories) === null || _catObj_subcategories === void 0 ? void 0 : _catObj_subcategories.map((s)=>s.name)) !== null && _catObj_subcategories_map !== void 0 ? _catObj_subcategories_map : [];
        if (listed.length) {
            setSelectedSubcategory(listed[0]);
            return;
        }
        const present = courses.filter((c)=>c.category === cat).map((c)=>c.subcategory);
        const unique = Array.from(new Set(present));
        setSelectedSubcategory(unique[0] || "");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "education-courses-area ptb-140",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/Index/EducationCourses.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "education-courses-tabs",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    children: [
                        menuLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center my-3",
                            children: "Loading categories…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : menuError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-danger my-3 text-center",
                            children: menuError
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            categories: CATEGORY_LIST,
                            selected: selectedCategory,
                            onSelect: handleSelectCategory
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !menuLoading && !menuError && selectedCategory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$SubcategoryChips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            category: selectedCategory,
                            orderedSubcats: orderedSubcats,
                            selectedSubcat: selectedSubcategory,
                            onSelectSubcat: setSelectedSubcategory,
                            courses: courses,
                            learnersBySubcat: learnersBySubcat
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Courses$2f$CoursesGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            loading: loading,
                            error: error,
                            courses: courses
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/EducationCourses.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "education-courses-bottom-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Master powerful skills with proven learning methods. Your career is in your hands—we’ll be with you every step of the way."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/courses",
                            className: "link-btn",
                            children: [
                                "View All Courses",
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
                                            fill: "white",
                                            stroke: "#1C43FE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10.875 1L16.875 7L10.875 13",
                                            stroke: "#1C43FE",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/EducationCourses.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/EducationCourses.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/EducationCourses.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Index/EducationCourses.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Index/EducationCourses.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EducationCourses, "BRQTSS+At1n1GSPvDAbL0GOag2w=");
_c = EducationCourses;
const __TURBOPACK__default__export__ = EducationCourses;
var _c;
__turbopack_context__.k.register(_c, "EducationCourses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/EducationPartner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
// If your images live in `public/assets/images/partner/...`,
// using "/assets/..." paths below will work at runtime.
// --- Framer Motion variants ---
const EASE_BEZIER = [
    0.16,
    1,
    0.3,
    1
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 16
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: EASE_BEZIER
        }
    }
};
const stagger = {
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08
        }
    }
};
const fadeItem = {
    hidden: {
        opacity: 0,
        y: 8
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: EASE_BEZIER
        }
    }
};
const partners = [
    {
        src: "/images/partner/partner1.png",
        width: 128,
        height: 28,
        alt: "Partner 1"
    },
    {
        src: "/images/partner/partner2.png",
        width: 109,
        height: 31,
        alt: "Partner 2"
    },
    {
        src: "/images/partner/partner3.png",
        width: 183,
        height: 36,
        alt: "Partner 3"
    },
    {
        src: "/images/partner/partner4.png",
        width: 126,
        height: 37,
        alt: "Partner 4"
    },
    {
        src: "/images/partner/partner5.png",
        width: 138,
        height: 36,
        alt: "Partner 5"
    }
];
const EducationPartner = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "education-partner-area ptb-140",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "education-partner-title",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    variants: fadeUp,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: true,
                        amount: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Trusted by Over 10 Million Learners and Leading Global Companies"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/EducationPartner.tsx",
                        lineNumber: 78,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Index/EducationPartner.tsx",
                    lineNumber: 69,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "row justify-content-center g-4 education-partner-lists",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    variants: stagger,
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    children: partners.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "col",
                            variants: fadeItem,
                            whileHover: {
                                y: -2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-partner-item",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: p.src,
                                    alt: p.alt,
                                    width: p.width,
                                    height: p.height,
                                    sizes: "(max-width: 576px) 120px, (max-width: 992px) 140px, 160px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/EducationPartner.tsx",
                                    lineNumber: 101,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Index/EducationPartner.tsx",
                                lineNumber: 100,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        }, p.src, false, {
                            fileName: "[project]/src/components/Index/EducationPartner.tsx",
                            lineNumber: 94,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Index/EducationPartner.tsx",
                    lineNumber: 84,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Index/EducationPartner.tsx",
            lineNumber: 68,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Index/EducationPartner.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EducationPartner;
const __TURBOPACK__default__export__ = EducationPartner;
var _c;
__turbopack_context__.k.register(_c, "EducationPartner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/EducationWorks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const EASE_BEZIER = [
    0.16,
    1,
    0.3,
    1
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: EASE_BEZIER
        }
    }
};
const stagger = {
    show: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08
        }
    }
};
const fadeItem = {
    hidden: {
        opacity: 0,
        y: 12
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: EASE_BEZIER
        }
    }
};
const EducationWorks = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "education-works-area pb-140",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "row justify-content-center align-items-center g-4",
                "data-cues": "slideInUp",
                "data-duration": "1000",
                variants: stagger,
                initial: false,
                whileInView: "show",
                viewport: {
                    once: true,
                    amount: 0.2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "col-lg-6 col-md-12",
                        variants: fadeUp,
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "education-works-image position-relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/works/works.png",
                                    alt: "How Mindo Health works",
                                    width: 780,
                                    height: 1007,
                                    priority: false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shape",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/works/shape.png",
                                        alt: "decorative shape",
                                        width: 282,
                                        height: 282
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "blur-wrap"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/EducationWorks.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "col-lg-6 col-md-12",
                        variants: fadeUp,
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "education-works-content section-title-animation animation-style1",
                            variants: fadeUp,
                            initial: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sub",
                                    children: "How It Works"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "d-flex align-items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "title-animation",
                                            suppressHydrationWarning: true,
                                            children: "How Mindo Health Works"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block align-middle",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/title-line.png",
                                                alt: "title underline",
                                                width: 155,
                                                height: 12,
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "items",
                                    "data-cues": "fadeIn",
                                    "data-duration": "1000",
                                    variants: stagger,
                                    initial: "hidden",
                                    whileInView: "show",
                                    viewport: {
                                        once: true,
                                        amount: 0.25
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "item",
                                            variants: fadeItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M21.998 10.5C21.982 6.768 21.836 4.765 20.535 3.464C19.072 2 16.714 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12C2 16.714 2 19.071 3.464 20.535C4.705 21.776 6.587 21.965 10 21.995",
                                                                stroke: "white",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                opacity: "0.5",
                                                                d: "M21.5 8H2.5M7 8L10.5 2.5M13.5 8L17 2.5",
                                                                stroke: "white",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M18.5619 13.9349L18.9789 13.5179C19.1426 13.3505 19.3379 13.2173 19.5534 13.1259C19.7689 13.0344 20.0004 12.9867 20.2346 12.9854C20.4687 12.9841 20.7007 13.0292 20.9172 13.1182C21.1338 13.2072 21.3305 13.3382 21.4961 13.5038C21.6616 13.6693 21.7927 13.8661 21.8817 14.0826C21.9706 14.2991 22.0158 14.5312 22.0145 14.7653C22.0132 14.9994 21.9654 15.2309 21.874 15.4465C21.7826 15.662 21.6493 15.8572 21.4819 16.0209L21.0649 16.4379M18.5619 13.9349C18.5619 13.9349 18.6139 14.8219 19.3959 15.6039C20.1779 16.3859 21.0649 16.4379 21.0649 16.4379M18.5619 13.9349L14.7269 17.7699C14.4669 18.0299 14.3369 18.1599 14.2269 18.3029C14.0951 18.472 13.9818 18.6547 13.8889 18.8479C13.8109 19.0119 13.7529 19.1859 13.6369 19.5339L13.2649 20.6499L13.1449 21.0099L13.9899 21.8549M21.0649 16.4379L17.2299 20.2729C16.9699 20.5329 16.8399 20.6629 16.6969 20.7729C16.5279 20.9047 16.3452 21.018 16.1519 21.1109C15.9879 21.1889 15.8139 21.2469 15.4659 21.3629L14.3499 21.7349L13.9899 21.8549M13.9899 21.8549L13.6279 21.9749C13.5439 22.003 13.4537 22.0072 13.3674 21.9869C13.2811 21.9667 13.2022 21.9228 13.1395 21.8602C13.0768 21.7975 13.0328 21.7187 13.0123 21.6325C12.9919 21.5462 12.9959 21.456 13.0239 21.3719L13.1439 21.0109",
                                                                stroke: "white",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Sign Up"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "As a learner or instructor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "item wrap2",
                                            variants: fadeItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3.7939 12.03C4.3309 9.342 4.5999 8 5.4869 7.134C5.65083 6.97444 5.82815 6.82924 6.0169 6.7C7.0399 6 8.4099 6 11.1499 6H12.8529C15.5919 6 16.9609 6 17.9829 6.7C18.1729 6.83067 18.3496 6.97567 18.5129 7.135C19.3999 8 19.6699 9.343 20.2069 12.03C20.9779 15.886 21.3639 17.814 20.4759 19.18C20.3152 19.4287 20.1286 19.6563 19.9159 19.863C18.7499 21 16.7849 21 12.8529 21H11.1499C7.2169 21 5.2509 21 4.0849 19.862C3.87394 19.6556 3.68647 19.4266 3.5259 19.179C2.6379 17.813 3.0239 15.885 3.7959 12.029L3.7939 12.03Z",
                                                                stroke: "white",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                opacity: "0.5",
                                                                d: "M9 6V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V6M9.17 15C9.3766 15.5855 9.75974 16.0926 10.2666 16.4512C10.7735 16.8099 11.3791 17.0025 12 17.0025C12.6209 17.0025 13.2265 16.8099 13.7334 16.4512C14.2403 16.0926 14.6234 15.5855 14.83 15",
                                                                stroke: "white",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Enroll or Create"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Join courses or build your own"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "item wrap3",
                                            variants: fadeItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                opacity: "0.5",
                                                                d: "M2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C22 4.93 22 7.286 22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12Z",
                                                                stroke: "white",
                                                                strokeWidth: "1.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M7 14L9.293 11.707C9.48053 11.5195 9.73484 11.4142 10 11.4142C10.2652 11.4142 10.5195 11.5195 10.707 11.707L12.293 13.293C12.4805 13.4805 12.7348 13.5858 13 13.5858C13.2652 13.5858 13.5195 13.4805 13.707 13.293L17 10M17 10V12.5M17 10H14.5",
                                                                stroke: "white",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Track & Certify"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Monitor growth and earn recognition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/EducationWorks.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/EducationWorks.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Index/EducationWorks.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Index/EducationWorks.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Index/EducationWorks.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Index/EducationWorks.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EducationWorks;
const __TURBOPACK__default__export__ = EducationWorks;
var _c;
__turbopack_context__.k.register(_c, "EducationWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/Testimonial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/effect-fade.mjs [app-client] (ecmascript) <export default as EffectFade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
"use client";
;
;
;
;
;
;
const Testimonial = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "col-lg-6 col-md-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "education-overview-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    className: "education-overview-slider",
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__["EffectFade"],
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
                    ],
                    loop: true,
                    spaceBetween: 25,
                    autoHeight: true,
                    slidesPerView: 1,
                    effect: "fade",
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    navigation: {
                        prevEl: ".button-prev",
                        nextEl: ".button-next"
                    },
                    fadeEffect: {
                        crossFade: true
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-overview-slide-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quote",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "43",
                                            height: "43",
                                            viewBox: "0 0 43 43",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M34.0165 17.6209C33.9299 16.6846 33.9961 14.1395 36.4343 10.6003C36.6187 10.3333 36.5853 9.97306 36.3562 9.74409C35.3622 8.75005 34.7468 8.12278 34.3151 7.68385C33.7475 7.1051 33.4883 6.84138 33.1091 6.49752C32.8558 6.26989 32.4727 6.26592 32.2168 6.48905C27.967 10.187 23.2468 17.8282 23.9298 27.1899C24.3301 32.6869 28.3397 36.6768 33.4634 36.6768C38.7216 36.6768 42.9995 32.3995 42.9995 27.1413C42.9995 22.0688 39.0182 17.9089 34.0165 17.6209ZM33.4634 35.333C29.0634 35.333 25.6181 31.8674 25.2697 27.0928C24.5013 16.5639 30.7601 9.7244 32.6511 7.9135C32.8355 8.09524 33.0461 8.3091 33.3565 8.62535C33.7304 9.0059 34.2423 9.52687 35.0165 10.3038C32.0566 14.8638 32.615 18.113 32.8597 18.5788C32.9759 18.8 33.2141 18.9489 33.4634 18.9489C37.9808 18.9489 41.6558 22.6239 41.6558 27.1413C41.6558 31.6581 37.9808 35.333 33.4634 35.333Z",
                                                    fill: "#1C43FE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10.1546 17.6207C10.0673 16.6871 10.1316 14.1439 12.5724 10.6002C12.7561 10.3331 12.7233 9.97289 12.4943 9.74392C11.5022 8.75183 10.8874 8.12524 10.4564 7.6863C9.88688 7.10627 9.627 6.84182 9.24779 6.49735C8.9945 6.26972 8.61133 6.26643 8.35548 6.48821C4.10573 10.1861 -0.615129 17.8261 0.0665551 27.1897C0.468135 32.686 4.47836 36.6766 9.60207 36.6766C14.8603 36.6766 19.1383 32.3993 19.1383 27.1411C19.1383 22.068 15.1569 17.9075 10.1546 17.6207ZM9.60207 35.3329C5.20277 35.3329 1.75545 31.8672 1.40641 27.0919C0.640067 16.5604 6.89885 9.72356 8.78978 7.91333C8.97481 8.09507 9.18612 8.31027 9.49713 8.6272C9.87042 9.00775 10.3816 9.52805 11.1545 10.3036C8.1947 14.8643 8.75309 18.1128 8.99779 18.578C9.11396 18.7991 9.35274 18.9487 9.60207 18.9487C14.1196 18.9487 17.7945 22.6237 17.7945 27.1411C17.7945 31.6579 14.1196 35.3329 9.60207 35.3329Z",
                                                    fill: "#1C43FE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                                            lineNumber: 34,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 33,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "I finally have a clear path to upskill. Lessons are practical, projects are fun, and I’m already using them at work with real confidence."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 51,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "profile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "avatars",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user2.jpg",
                                                        alt: "user2",
                                                        width: 100,
                                                        height: 100,
                                                        className: "left"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user1.jpg",
                                                        alt: "user1",
                                                        width: 100,
                                                        height: 100,
                                                        className: "active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user3.jpg",
                                                        alt: "user3",
                                                        width: 100,
                                                        height: 100,
                                                        className: "right"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                lineNumber: 57,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Aisha Rahman"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Junior Web Developer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                lineNumber: 80,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 56,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                lineNumber: 32,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                            lineNumber: 31,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-overview-slide-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quote",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "43",
                                            height: "43",
                                            viewBox: "0 0 43 43",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M34.0165 17.6209C33.9299 16.6846 33.9961 14.1395 36.4343 10.6003C36.6187 10.3333 36.5853 9.97306 36.3562 9.74409C35.3622 8.75005 34.7468 8.12278 34.3151 7.68385C33.7475 7.1051 33.4883 6.84138 33.1091 6.49752C32.8558 6.26989 32.4727 6.26592 32.2168 6.48905C27.967 10.187 23.2468 17.8282 23.9298 27.1899C24.3301 32.6869 28.3397 36.6768 33.4634 36.6768C38.7216 36.6768 42.9995 32.3995 42.9995 27.1413C42.9995 22.0688 39.0182 17.9089 34.0165 17.6209ZM33.4634 35.333C29.0634 35.333 25.6181 31.8674 25.2697 27.0928C24.5013 16.5639 30.7601 9.7244 32.6511 7.9135C32.8355 8.09524 33.0461 8.3091 33.3565 8.62535C33.7304 9.0059 34.2423 9.52687 35.0165 10.3038C32.0566 14.8638 32.615 18.113 32.8597 18.5788C32.9759 18.8 33.2141 18.9489 33.4634 18.9489C37.9808 18.9489 41.6558 22.6239 41.6558 27.1413C41.6558 31.6581 37.9808 35.333 33.4634 35.333Z",
                                                    fill: "#1C43FE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10.1546 17.6207C10.0673 16.6871 10.1316 14.1439 12.5724 10.6002C12.7561 10.3331 12.7233 9.97289 12.4943 9.74392C11.5022 8.75183 10.8874 8.12524 10.4564 7.6863C9.88688 7.10627 9.627 6.84182 9.24779 6.49735C8.9945 6.26972 8.61133 6.26643 8.35548 6.48821C4.10573 10.1861 -0.615129 17.8261 0.0665551 27.1897C0.468135 32.686 4.47836 36.6766 9.60207 36.6766C14.8603 36.6766 19.1383 32.3993 19.1383 27.1411C19.1383 22.068 15.1569 17.9075 10.1546 17.6207ZM9.60207 35.3329C5.20277 35.3329 1.75545 31.8672 1.40641 27.0919C0.640067 16.5604 6.89885 9.72356 8.78978 7.91333C8.97481 8.09507 9.18612 8.31027 9.49713 8.6272C9.87042 9.00775 10.3816 9.52805 11.1545 10.3036C8.1947 14.8643 8.75309 18.1128 8.99779 18.578C9.11396 18.7991 9.35274 18.9487 9.60207 18.9487C14.1196 18.9487 17.7945 22.6237 17.7945 27.1411C17.7945 31.6579 14.1196 35.3329 9.60207 35.3329Z",
                                                    fill: "#1C43FE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                                            lineNumber: 90,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 89,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "From zero to shipping features faster — the mentors, pace, and community kept me motivated. It feels like a real career springboard."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 107,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "profile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "avatars",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user1.jpg",
                                                        alt: "user1",
                                                        width: 100,
                                                        height: 100,
                                                        className: "left"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user2.jpg",
                                                        alt: "user2",
                                                        width: 100,
                                                        height: 100,
                                                        className: "active "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user3.jpg",
                                                        alt: "user3",
                                                        width: 100,
                                                        height: 100,
                                                        className: "right"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                lineNumber: 113,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Daniel Okoye"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Product Manager"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                lineNumber: 137,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 112,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                lineNumber: 88,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                            lineNumber: 87,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-overview-slide-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "quote",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "43",
                                            height: "43",
                                            viewBox: "0 0 43 43",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M34.0165 17.6209C33.9299 16.6846 33.9961 14.1395 36.4343 10.6003C36.6187 10.3333 36.5853 9.97306 36.3562 9.74409C35.3622 8.75005 34.7468 8.12278 34.3151 7.68385C33.7475 7.1051 33.4883 6.84138 33.1091 6.49752C32.8558 6.26989 32.4727 6.26592 32.2168 6.48905C27.967 10.187 23.2468 17.8282 23.9298 27.1899C24.3301 32.6869 28.3397 36.6768 33.4634 36.6768C38.7216 36.6768 42.9995 32.3995 42.9995 27.1413C42.9995 22.0688 39.0182 17.9089 34.0165 17.6209ZM33.4634 35.333C29.0634 35.333 25.6181 31.8674 25.2697 27.0928C24.5013 16.5639 30.7601 9.7244 32.6511 7.9135C32.8355 8.09524 33.0461 8.3091 33.3565 8.62535C33.7304 9.0059 34.2423 9.52687 35.0165 10.3038C32.0566 14.8638 32.615 18.113 32.8597 18.5788C32.9759 18.8 33.2141 18.9489 33.4634 18.9489C37.9808 18.9489 41.6558 22.6239 41.6558 27.1413C41.6558 31.6581 37.9808 35.333 33.4634 35.333Z",
                                                    fill: "#1C43FE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M10.1546 17.6207C10.0673 16.6871 10.1316 14.1439 12.5724 10.6002C12.7561 10.3331 12.7233 9.97289 12.4943 9.74392C11.5022 8.75183 10.8874 8.12524 10.4564 7.6863C9.88688 7.10627 9.627 6.84182 9.24779 6.49735C8.9945 6.26972 8.61133 6.26643 8.35548 6.48821C4.10573 10.1861 -0.615129 17.8261 0.0665551 27.1897C0.468135 32.686 4.47836 36.6766 9.60207 36.6766C14.8603 36.6766 19.1383 32.3993 19.1383 27.1411C19.1383 22.068 15.1569 17.9075 10.1546 17.6207ZM9.60207 35.3329C5.20277 35.3329 1.75545 31.8672 1.40641 27.0919C0.640067 16.5604 6.89885 9.72356 8.78978 7.91333C8.97481 8.09507 9.18612 8.31027 9.49713 8.6272C9.87042 9.00775 10.3816 9.52805 11.1545 10.3036C8.1947 14.8643 8.75309 18.1128 8.99779 18.578C9.11396 18.7991 9.35274 18.9487 9.60207 18.9487C14.1196 18.9487 17.7945 22.6237 17.7945 27.1411C17.7945 31.6579 14.1196 35.3329 9.60207 35.3329Z",
                                                    fill: "#1C43FE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                                            lineNumber: 148,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 147,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "The curriculum is focused and hands‑on. I loved the bite‑size videos, quizzes, and feedback that made complex topics actually stick."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 165,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "profile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "avatars",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user2.jpg",
                                                        alt: "user2",
                                                        width: 100,
                                                        height: 100,
                                                        className: "left "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user3.jpg",
                                                        alt: "user3",
                                                        width: 100,
                                                        height: 100,
                                                        className: "active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/user1.jpg",
                                                        alt: "user1",
                                                        width: 100,
                                                        height: 100,
                                                        className: "right"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                lineNumber: 171,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Sofia Martins"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "UX Design Student"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                                lineNumber: 194,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/Testimonial.tsx",
                                        lineNumber: 170,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                lineNumber: 146,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                            lineNumber: 145,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                    lineNumber: 13,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overview-nav-buttons",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "button-prev",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "#1C43FE",
                                            d: "M20 12.75a.75.75 0 0 0 0-1.5zm0-1.5H4v1.5h16z",
                                            opacity: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                                            lineNumber: 213,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            stroke: "#1C43FE",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1.5",
                                            d: "m10 6l-6 6l6 6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                                            lineNumber: 218,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                    lineNumber: 212,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                lineNumber: 206,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                            lineNumber: 205,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "button-next",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fill: "#1C43FE",
                                            d: "M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z",
                                            opacity: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                                            lineNumber: 236,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            stroke: "#1C43FE",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1.5",
                                            d: "m14 6l6 6l-6 6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                                            lineNumber: 241,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                                    lineNumber: 235,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Index/Testimonial.tsx",
                                lineNumber: 229,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/Testimonial.tsx",
                            lineNumber: 228,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/Testimonial.tsx",
                    lineNumber: 204,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Index/Testimonial.tsx",
            lineNumber: 12,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Index/Testimonial.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Testimonial;
const __TURBOPACK__default__export__ = Testimonial;
var _c;
__turbopack_context__.k.register(_c, "Testimonial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Index/EducationOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-countup/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Testimonial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Index/Testimonial.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const EASE_BEZIER = [
    0.16,
    1,
    0.3,
    1
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: EASE_BEZIER
        }
    }
};
const EducationOverview = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [countsActive, setCountsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EducationOverview.useEffect": ()=>{
            if (!sectionRef.current) return;
            const observer = new IntersectionObserver({
                "EducationOverview.useEffect": (entries)=>{
                    entries.forEach({
                        "EducationOverview.useEffect": (entry)=>{
                            // Trigger when ~20% of the section is visible
                            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                                setCountsActive(true);
                                // Animate once, then stop observing
                                if (sectionRef.current) observer.unobserve(sectionRef.current);
                            }
                        }
                    }["EducationOverview.useEffect"]);
                }
            }["EducationOverview.useEffect"], {
                threshold: [
                    0,
                    0.2,
                    0.5,
                    1
                ]
            });
            observer.observe(sectionRef.current);
            return ({
                "EducationOverview.useEffect": ()=>observer.disconnect()
            })["EducationOverview.useEffect"];
        }
    }["EducationOverview.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "education-overview-area pb-140",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "education-overview-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "overview-fun-items",
                            variants: fadeUp,
                            initial: "hidden",
                            whileInView: "show",
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center justify-content-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "counter",
                                                children: [
                                                    countsActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: 6,
                                                        duration: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0,
                                                    ".",
                                                    countsActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: 8,
                                                        duration: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0,
                                                    "M+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 65,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 64,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "ACTIVE LEARNERS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 80,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                    lineNumber: 63,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun wrap2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center justify-content-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "counter",
                                                children: [
                                                    countsActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: 7,
                                                        duration: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0,
                                                    ".",
                                                    countsActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: 5,
                                                        duration: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0,
                                                    "K+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 84,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 83,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "COURSES AVAILABLE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 99,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                    lineNumber: 82,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun wrap3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center justify-content-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "counter",
                                                children: [
                                                    countsActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: 120,
                                                        duration: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0,
                                                    "+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 103,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 102,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "COUNTRIES REACHED"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 112,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                    lineNumber: 101,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun wrap4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex align-items-center justify-content-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "counter",
                                                children: [
                                                    countsActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: 4,
                                                        duration: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0,
                                                    ".",
                                                    countsActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        end: 9,
                                                        duration: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)) : 0
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 116,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 115,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "AVERAGE COURSE RATING"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 130,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                    lineNumber: 114,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                            lineNumber: 56,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row justify-content-center align-items-center g-4",
                            "data-cues": "slideInUp",
                            "data-duration": "1000",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-7 col-md-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "education-overview-content section-title-animation animation-style1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "title-animation",
                                                        suppressHydrationWarning: true,
                                                        children: "Kickstart Your Learning Journey and Build the"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "title-animation",
                                                        suppressHydrationWarning: true,
                                                        children: "Career You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/title-line.png",
                                                        alt: "line",
                                                        width: 155,
                                                        height: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "title-animation",
                                                        suppressHydrationWarning: true,
                                                        children: "Deserve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 33
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 142,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Explore expert-led courses that help you grow faster, smarter, and stronger."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 159,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overview-btn",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                                    d: "M16.25 6.75V7.25H1.25V6.75H16.25Z",
                                                                    fill: "white",
                                                                    stroke: "white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M10.75 1L16.75 7L10.75 13",
                                                                    stroke: "white",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                                    lineNumber: 182,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 11
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 163,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                        lineNumber: 141,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                    lineNumber: 140,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-lg-5 col-md-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "education-overview-image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/overview.png",
                                            alt: "overview",
                                            width: 778,
                                            height: 746
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 196,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                        lineNumber: 195,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                    lineNumber: 194,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                            lineNumber: 135,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                    lineNumber: 54,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row justify-content-center g-1",
                    "data-cues": "slideInUp",
                    "data-duration": "1000",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Index$2f$Testimonial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                            lineNumber: 213,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "education-overview-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "content section-title-animation animation-style1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "title-animation",
                                                    suppressHydrationWarning: true,
                                                    children: "Join a Global Community of Learners and Educators"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 218,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Collaborate with learners from 120+ countries, share ideas, and grow with expert guidance."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 223,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about-us",
                                                className: "default-btn",
                                                children: "Join Our Community"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                                lineNumber: 228,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                        lineNumber: 217,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "users",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/users.png",
                                            alt: "users",
                                            width: 971,
                                            height: 498
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                            lineNumber: 233,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                        lineNumber: 232,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Index/EducationOverview.tsx",
                                lineNumber: 216,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Index/EducationOverview.tsx",
                            lineNumber: 215,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Index/EducationOverview.tsx",
                    lineNumber: 208,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Index/EducationOverview.tsx",
            lineNumber: 53,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Index/EducationOverview.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EducationOverview, "KNVYe3gPx5WFqSFaBr9Ldhv50Nc=");
_c = EducationOverview;
const __TURBOPACK__default__export__ = EducationOverview;
var _c;
__turbopack_context__.k.register(_c, "EducationOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5c7295b7._.js.map