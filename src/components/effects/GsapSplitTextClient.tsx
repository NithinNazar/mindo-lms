"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname, useSearchParams } from "next/navigation";

// Minimal typings to avoid `any`
interface SplitTextLike {
	chars: Element[];
	words?: Element[];
	lines?: Element[];
	revert: () => void;
}

type SplitTextCtor = new (
	element: Element,
	options: { type: string; linesClass?: string }
) => SplitTextLike;

export default function GsapSplitTextClient() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const searchParamsKey = searchParams ? searchParams.toString() : "";

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Register ScrollTrigger once
		if (
			!(gsap.core as unknown as { _stRegistered?: boolean })._stRegistered
		) {
			gsap.registerPlugin(ScrollTrigger);
			(
				gsap.core as unknown as { _stRegistered?: boolean }
			)._stRegistered = true;
		}

		let SplitText: SplitTextCtor | null = null;
		let cancelled = false;

		// Lazy-load SplitText if available. (Club plugin)
		const loadSplitText = async () => {
			try {
				const mod = (await import(
					/* @vite-ignore */ "gsap/SplitText"
				).catch(() => null)) as {
					default?: unknown;
					SplitText?: unknown;
				} | null;
				if (mod) {
					SplitText = (mod.SplitText ?? mod.default) as SplitTextCtor;
				} else {
					SplitText = null;
				}
			} catch {
				SplitText = null;
			}
		};

		// Keep references; use Map (not WeakMap) so we can iterate in cleanup
		const splitMap = new Map<Element, SplitTextLike>();
		const tweenMap = new Map<Element, gsap.core.Tween>();

		const nextTick = () =>
			new Promise<void>((resolve) =>
				requestAnimationFrame(() => resolve())
			);

		const setup = async () => {
			await loadSplitText();
			// give the new route a frame (or two) to paint
			await nextTick();
			await nextTick();

			if (!SplitText) {
				console.warn(
					"GSAP SplitText plugin not found. Skipping split-title animations."
				);
			}
			if (cancelled || !SplitText) return; // If plugin missing, quietly no-op

			const quotes = document.querySelectorAll<HTMLElement>(
				".section-title-animation .title-animation"
			);

			quotes.forEach((quote) => {
				// Cleanup previous (if re-running)
				const prevTween = tweenMap.get(quote);
				if (prevTween) {
					prevTween.progress(1).kill();
					tweenMap.delete(quote);
				}
				const prevSplit = splitMap.get(quote);
				if (prevSplit) {
					prevSplit.revert();
					splitMap.delete(quote);
				}

				const wrapper = quote.closest(".section-title-animation");
				const cls = wrapper?.className ?? "";
				const m = cls.match(/animation-(style\d+)/);
				const style = m?.[1] ?? "style1";
				if (style === "style4") return; // skip per original

				// Create split
				const split = new SplitText!(quote, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				splitMap.set(quote, split);

				// Base perspective
				gsap.set(quote, { perspective: 400 });

				// Initial states per style
				if (style === "style1") {
					gsap.set(split.chars, { opacity: 0, x: 50 });
				} else if (style === "style2") {
					gsap.set(split.chars, {
						opacity: 0,
						y: "90%",
						rotateX: -40,
					});
				} else if (style === "style3") {
					gsap.set(split.chars, { opacity: 0 });
				}

				const ease = gsap.parseEase("back.out(1.7)");

				const tween = gsap.to(split.chars, {
					scrollTrigger: {
						trigger: quote,
						start: "top 90%",
						invalidateOnRefresh: true,
					},
					x: 0,
					y: 0,
					rotateX: 0,
					opacity: 1,
					duration: 1,
					ease,
					stagger: 0.02,
				});

				tweenMap.set(quote, tween);
			});

			// ensure ScrollTrigger recalculates after building
			ScrollTrigger.refresh();
		};

		setup();

		return () => {
			cancelled = true;
			// Revert splits and kill tweens created here only
			splitMap.forEach((split) => split.revert());
			tweenMap.forEach((t) => t.kill());
		};
		// Re-run on route (path or query) change so new titles get split
	}, [pathname, searchParamsKey]);

	return null;
}
