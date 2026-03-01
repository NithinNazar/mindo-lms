"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function CTA() {
	useEffect(() => {
		const ctaArea = document.querySelector<HTMLElement>(".cta-wrap-area");
		if (!ctaArea) return;

		const handleMouseMove = (e: Event) => {
			const me = e as MouseEvent;
			const wx = window.innerWidth;
			const wy = window.innerHeight;
			const x = me.pageX - (ctaArea as HTMLElement).offsetLeft;
			const y = me.pageY - (ctaArea as HTMLElement).offsetTop;
			const newx = x - wx / 2;
			const newy = y - wy / 2;

			document
				.querySelectorAll<HTMLElement>(
					".cta-wrap-shape1, .cta-wrap-shape2"
				)
				.forEach((el) => {
					let speed = parseFloat(
						el.getAttribute("data-speed") || "0"
					);
					if (el.getAttribute("data-revert")) speed *= -1;
					gsap.to(el, {
						duration: 1,
						x: 1 - newx * speed,
						y: 1 - newy * speed,
					});
				});
		};

		ctaArea.addEventListener("mousemove", handleMouseMove);
		return () => {
			ctaArea.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return (
		<div className="cta-wrap-area ptb-140">
			<div className="container">
				<div
					className="cta-wrap-content section-title-animation animation-style1"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<h2 className="title-animation">
						Start Your Journey Toward In-Demand{" "}
						<span>
							Skills Today{" "}
							<Image
								src="/images/title-line.png"
								alt="image"
								width={155}
								height={12}
							/>
						</span>
					</h2>
					<p>Enroll now and learn from certified industry experts.</p>
					<Link href="/contact-us" className="default-btn">
						Get Started Now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="14"
							viewBox="0 0 18 14"
							fill="none"
						>
							<path
								opacity="0.5"
								d="M16.375 6.75V7.25H1.375V6.75H16.375Z"
								fill="#1C43FE"
								stroke="#1C43FE"
							/>
							<path
								d="M10.875 1L16.875 7L10.875 13"
								stroke="#1C43FE"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</div>
			</div>
			<div
				className="cta-wrap-shape1"
				data-speed="0.05"
				data-revert="true"
			>
				<Image
					src="/images/cta-shape5.png"
					alt="image"
					width={178}
					height={178}
				/>
			</div>
			<div
				className="cta-wrap-shape2"
				data-speed="0.05"
				data-revert="true"
			>
				<Image
					src="/images/cta-shape6.png"
					alt="image"
					width={234}
					height={234}
				/>
			</div>
		</div>
	);
}
