"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: EASE_BEZIER, staggerChildren: 0.06 },
	},
};

const child: Variants = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: EASE_BEZIER },
	},
};

// Mouse-move parallax (GSAP/jQuery replacement)
const useParallaxSprings = () => {
	const x1 = useSpring(0, { stiffness: 160, damping: 18 });
	const y1 = useSpring(0, { stiffness: 160, damping: 18 });
	const x2 = useSpring(0, { stiffness: 160, damping: 18 });
	const y2 = useSpring(0, { stiffness: 160, damping: 18 });
	return { x1, y1, x2, y2 };
};

type BannerData = {
	title: string;
	description: string;
	averageRating: number;
	reviewCount: number;
	instructorId?: string | null;
	instructorName: string;
	instructorAvatarUrl: string;
	lastUpdated: string; // preformatted
	language: string;
	breadcrumbCategory?: string;
	breadcrumbSubcategory?: string;
};

export default function Banner({ data }: { data: BannerData }) {
	const bannerRef = useRef<HTMLDivElement>(null);
	const { x1, y1, x2, y2 } = useParallaxSprings();
	const instructorHref = data.instructorId
		? `/instructor/${data.instructorId}`
		: null;

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		const el = bannerRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - rect.width / 2;
		const offsetY = e.clientY - rect.top - rect.height / 2;

		const speed1 = 0.05; // data-speed for shape1
		const speed2 = 0.05; // data-speed for shape2
		const revert2 = true; // data-revert for shape2

		// Match original logic: smaller speed, smaller movement; center-relative
		x1.set(-offsetX * speed1);
		y1.set(-offsetY * speed1);

		const mult = revert2 ? -1 : 1;
		x2.set(mult * -offsetX * speed2);
		y2.set(mult * -offsetY * speed2);
	};

	const handleMouseLeave = () => {
		x1.set(0);
		y1.set(0);
		x2.set(0);
		y2.set(0);
	};

	// Normalize rating and compute star states (full/half/empty)
	const rating = Math.max(0, Math.min(5, data.averageRating ?? 0));
	const rounded = Math.round(rating * 2) / 2; // nearest 0.5
	const fullStars = Math.floor(rounded);
	const hasHalfStar = rounded % 1 !== 0;

	return (
		<div
			ref={bannerRef}
			className="page-banner-area course-details-banner"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className="container">
				<motion.div
					className="course-details-banner-content section-title-animation animation-style1"
					variants={container}
					initial={false}
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
				>
					<motion.ul
						className="list"
						variants={child}
						initial={false}
					>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>Course</li>
						<li>{data.breadcrumbCategory}</li>
						{data.breadcrumbSubcategory ? (
							<li>{data.breadcrumbSubcategory}</li>
						) : null}
					</motion.ul>

					<motion.h2
						className="title-animation"
						variants={child}
						initial={false}
						suppressHydrationWarning
					>
						{data.title}
					</motion.h2>

					<motion.p variants={child} initial={false}>
						{data.description}
					</motion.p>

					<motion.ul
						className="info-rating"
						variants={child}
						initial={false}
					>
						<li>
							<b>{data.averageRating.toFixed(1)}</b>
						</li>
						{Array.from({ length: 5 }).map((_, i) => {
							const index = i + 1;
							const isFull = index <= fullStars;
							const isHalf =
								!isFull &&
								hasHalfStar &&
								index === fullStars + 1;
							const fillPercent = isFull ? 100 : isHalf ? 50 : 0; // 0/50/100
							return (
								<li
									key={i}
									aria-hidden="true"
									title={`${rounded} out of 5`}
								>
									<span className="rating-star">
										<span className="star-bg">☆</span>
										<span
											className="star-fg"
											style={{ width: `${fillPercent}%` }}
										>
											★
										</span>
									</span>
								</li>
							);
						})}
						<li>
							<span>
								({data.reviewCount.toLocaleString()} Reviews)
							</span>
						</li>
					</motion.ul>

					{/* Inline styles for star rating (scoped) */}
					<style jsx>{`
						.rating-star {
							position: relative;
							display: inline-block;
							width: 16px;
							height: 16px;
						}
						.rating-star .star-bg,
						.rating-star .star-fg {
							position: absolute;
							inset: 0;
							display: block;
							line-height: 16px;
							font-size: 16px;
						}
						/* Empty star uses the surrounding text color */
						.rating-star .star-bg {
							color: currentColor;
						}
						/* Filled portion is yellow */
						.rating-star .star-fg {
							color: #ffd700;
							overflow: hidden;
						}
					`}</style>

					<motion.ul
						className="info-list"
						variants={child}
						initial={false}
					>
						<li className="user-btn">
							<Image
								src={
									data.instructorAvatarUrl ||
									"/images/courses/user1.png"
								}
								alt="image"
								width={26}
								height={26}
							/>
							{instructorHref ? (
								<Link href={instructorHref}>{data.instructorName}</Link>
							) : (
								<span>{data.instructorName}</span>
							)}
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									d="M1.66602 10.0002C1.66602 6.85766 1.66602 5.286 2.64268 4.31016C3.61935 3.33433 5.19018 3.3335 8.33268 3.3335H11.666C14.8085 3.3335 16.3802 3.3335 17.356 4.31016C18.3318 5.28683 18.3327 6.85766 18.3327 10.0002V11.6668C18.3327 14.8093 18.3327 16.381 17.356 17.3568C16.3793 18.3327 14.8085 18.3335 11.666 18.3335H8.33268C5.19018 18.3335 3.61852 18.3335 2.64268 17.3568C1.66685 16.3802 1.66602 14.8093 1.66602 11.6668V10.0002Z"
									stroke="white"
									strokeWidth="1.5"
								/>
								<path
									opacity="0.5"
									d="M5.83268 3.3335V2.0835M14.166 3.3335V2.0835M1.66602 7.50016H18.3327"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
							<span>Last Updated {data.lastUpdated}</span>
						</li>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<g clipPath="url(#clip0_8060_10535)">
									<path
										opacity="0.5"
										d="M1.66797 9.99984H18.3346M13.3346 9.99984C13.3346 11.094 13.248 12.1782 13.0805 13.189C12.9138 14.1998 12.668 15.1182 12.358 15.8923C12.0488 16.6665 11.6813 17.2798 11.2771 17.699C10.8721 18.1173 10.4388 18.3332 10.0013 18.3332C9.5638 18.3332 9.13047 18.1173 8.7263 17.699C8.3213 17.2798 7.9538 16.6657 7.64464 15.8923C7.33464 15.1182 7.0888 14.2007 6.9213 13.189C6.75039 12.1346 6.66566 11.068 6.66797 9.99984C6.66797 8.90567 6.7538 7.8215 6.9213 6.81067C7.0888 5.79984 7.33464 4.8815 7.64464 4.10734C7.9538 3.33317 8.3213 2.71984 8.72547 2.30067C9.13047 1.88317 9.5638 1.6665 10.0013 1.6665C10.4388 1.6665 10.8721 1.88234 11.2763 2.30067C11.6813 2.71984 12.0488 3.334 12.358 4.10734C12.668 4.8815 12.9138 5.799 13.0805 6.81067C13.2488 7.8215 13.3346 8.90567 13.3346 9.99984Z"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
									<path
										d="M18.3335 9.99977C18.3335 11.0942 18.118 12.1779 17.6991 13.189C17.2803 14.2001 16.6665 15.1188 15.8926 15.8926C15.1188 16.6665 14.2001 17.2803 13.189 17.6991C12.1779 18.118 11.0942 18.3335 9.99977 18.3335C8.90536 18.3335 7.82167 18.118 6.81058 17.6991C5.79948 17.2803 4.88077 16.6665 4.10691 15.8926C3.33305 15.1188 2.71919 14.2001 2.30038 13.189C1.88157 12.1779 1.66602 11.0942 1.66602 9.99977C1.66602 7.78952 2.54403 5.6698 4.10691 4.10691C5.6698 2.54403 7.78952 1.66602 9.99977 1.66602C12.21 1.66602 14.3297 2.54403 15.8926 4.10691C17.4555 5.6698 18.3335 7.78952 18.3335 9.99977Z"
										stroke="white"
										strokeWidth="1.5"
									/>
								</g>
								<defs>
									<clipPath id="clip0_8060_10535">
										<rect
											width="20"
											height="20"
											fill="white"
										/>
									</clipPath>
								</defs>
							</svg>
							<span>{(data.language || "").toUpperCase()}</span>
						</li>
					</motion.ul>
				</motion.div>
			</div>

			{/* Floating Shapes */}
			<motion.div
				className="page-banner-shape1"
				data-speed="0.05"
				style={{ x: x1, y: y1 }}
			>
				<Image
					src="/images/page-banner-shape3.png"
					alt="image"
					width={114}
					height={219}
				/>
			</motion.div>
			<motion.div
				className="page-banner-shape2"
				data-speed="0.05"
				data-revert="true"
				style={{ x: x2, y: y2 }}
			>
				<Image
					src="/images/page-banner-shape4.png"
					alt="image"
					width={95}
					height={191}
				/>
			</motion.div>
		</div>
	);
}
