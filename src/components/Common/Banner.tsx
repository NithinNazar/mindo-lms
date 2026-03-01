"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";

export type Crumb = { label: string; href?: string };

interface BannerProps {
	title?: string;
	crumbs?: Crumb[];
	/** Optional extra classes for the root container */
	className?: string;
}
const Banner: React.FC<BannerProps> = ({
	title = "Explore Online Courses That Move You Forward",
	crumbs = [{ label: "Home", href: "/" }, { label: "Courses" }],
	className = "",
}) => {
	useEffect(() => {
		const banner = document.querySelector<HTMLElement>(".page-banner-area");
		if (!banner) return;
		const handleMove = (e: MouseEvent) => {
			const wx = window.innerWidth;
			const wy = window.innerHeight;
			const x = e.pageX - banner.offsetLeft;
			const y = e.pageY - banner.offsetTop;
			const newx = x - wx / 2;
			const newy = y - wy / 2;
			document
				.querySelectorAll<HTMLElement>(
					".page-banner-shape1, .page-banner-shape2"
				)
				.forEach((el) => {
					let speed = parseFloat(
						el.getAttribute("data-speed") || "0"
					);
					if (el.getAttribute("data-revert")) speed *= -1;
					const translateX = 1 - newx * speed;
					const translateY = 1 - newy * speed;
					el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
				});
		};
		banner.addEventListener("mousemove", handleMove);
		return () => banner.removeEventListener("mousemove", handleMove);
	}, []);
	return (
		<div className={`page-banner-area ${className}`}>
			<div className="container">
				<div
					className="page-banner-content section-title-animation animation-style1"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<h2 className="title-animation">{title}</h2>

					<ul className="list">
						{crumbs.map((c, idx) => (
							<li key={`${c.label}-${idx}`}>
								{c.href ? (
									<Link href={c.href}>{c.label}</Link>
								) : (
									<span>{c.label}</span>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="page-banner-subtract">
				<Image
					src="/images/subtract.png"
					alt="abstract subtract shape"
					width={183}
					height={28}
				/>
			</div>

			<div
				className="page-banner-shape1"
				data-speed="0.05"
				data-revert="true"
			>
				<Image
					src="/images/page-banner-shape1.png"
					alt="decorative shape 1"
					width={219}
					height={219}
				/>
			</div>

			<div
				className="page-banner-shape2"
				data-speed="0.05"
				data-revert="true"
			>
				<Image
					src="/images/page-banner-shape2.png"
					alt="decorative shape 2"
					width={191}
					height={191}
				/>
			</div>
		</div>
	);
};

export default Banner;
