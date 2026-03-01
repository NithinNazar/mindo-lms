"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import CountUp from "react-countup";
import Link from "next/link";
import Testimonial from "./Testimonial";

const EASE_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];
const fadeUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: EASE_BEZIER },
	},
};

const EducationOverview: React.FC = () => {
	const sectionRef = useRef<HTMLElement | null>(null);
	const [countsActive, setCountsActive] = useState(false);

	useEffect(() => {
		if (!sectionRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Trigger when ~20% of the section is visible
					if (
						entry.isIntersecting &&
						entry.intersectionRatio >= 0.2
					) {
						setCountsActive(true);
						// Animate once, then stop observing
						if (sectionRef.current)
							observer.unobserve(sectionRef.current);
					}
				});
			},
			{
				threshold: [0, 0.2, 0.5, 1],
			}
		);

		observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);
	return (
		<section ref={sectionRef} className="education-overview-area pb-140">
			<div className="container">
				<div className="education-overview-inner">
					{/* Counters */}
					<motion.div
						className="overview-fun-items"
						variants={fadeUp}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}
					>
						<div className="fun">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									{countsActive ? (
										<CountUp end={6} duration={2} />
									) : (
										0
									)}
									.
									{countsActive ? (
										<CountUp end={8} duration={2} />
									) : (
										0
									)}
									M+
								</h3>
							</div>
							<p>ACTIVE LEARNERS</p>
						</div>
						<div className="fun wrap2">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									{countsActive ? (
										<CountUp end={7} duration={2} />
									) : (
										0
									)}
									.
									{countsActive ? (
										<CountUp end={5} duration={2} />
									) : (
										0
									)}
									K+
								</h3>
							</div>
							<p>COURSES AVAILABLE</p>
						</div>
						<div className="fun wrap3">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									{countsActive ? (
										<CountUp end={120} duration={2} />
									) : (
										0
									)}
									+
								</h3>
							</div>
							<p>COUNTRIES REACHED</p>
						</div>
						<div className="fun wrap4">
							<div className="d-flex align-items-center justify-content-center">
								<h3 className="counter">
									{countsActive ? (
										<CountUp end={4} duration={2} />
									) : (
										0
									)}
									.
									{countsActive ? (
										<CountUp end={9} duration={2} />
									) : (
										0
									)}
								</h3>
							</div>
							<p>AVERAGE COURSE RATING</p>
						</div>
					</motion.div>

					{/* Overview Content */}
					<div
						className="row justify-content-center align-items-center g-4"
						data-cues="slideInUp"
						data-duration="1000"
					>
						<div className="col-lg-7 col-md-12">
							<div className="education-overview-content section-title-animation animation-style1">
                            <h2>
                                <span className="title-animation" suppressHydrationWarning>
                                    Kickstart Your Learning Journey and Build the
                                </span>{" "}
                                <span className="title-animation" suppressHydrationWarning>
                                    Career You
                                </span>
                                <Image
                                    src="/images/title-line.png"
                                    alt="line"
                                    width={155}
                                    height={12}
                                />{" "}
                                <span className="title-animation" suppressHydrationWarning>
                                    Deserve
                                </span>
                            </h2>
								<p>
									Explore expert-led courses that help you
									grow faster, smarter, and stronger.
								</p>
								<div className="overview-btn">
									<Link
										href="/contact-us"
										className="default-btn"
									>
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
												d="M16.25 6.75V7.25H1.25V6.75H16.25Z"
												fill="white"
												stroke="white"
											/>
											<path
												d="M10.75 1L16.75 7L10.75 13"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 col-md-12">
							<div className="education-overview-image">
								<Image
									src="/images/overview.png"
									alt="overview"
									width={778}
									height={746}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Slider + Right Side */}
				<div
					className="row justify-content-center g-1"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<Testimonial />

					<div className="col-lg-6 col-md-12">
						<div className="education-overview-right">
                            <div className="content section-title-animation animation-style1">
                                <h3>
                                    <span className="title-animation" suppressHydrationWarning>
                                        Join a Global Community of Learners and Educators
                                    </span>
                                </h3>
                                <p>
                                    Collaborate with learners from 120+
                                    countries, share ideas, and grow with expert
                                    guidance.
                                </p>
								<Link href="/about-us" className="default-btn">
									Join Our Community
								</Link>
							</div>
							<div className="users">
								<Image
									src="/images/users.png"
									alt="users"
									width={971}
									height={498}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EducationOverview;
