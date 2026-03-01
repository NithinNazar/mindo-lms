"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

const DistanceLearningBanner: React.FC = () => {
	const sectionRef = useRef<HTMLElement | null>(null);
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (!sectionRef.current) return;
		const el = sectionRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Trigger when ~15% visible
					if (
						entry.isIntersecting &&
						entry.intersectionRatio >= 0.15
					) {
						setActive(true);
						observer.unobserve(el); // run once
					}
				});
			},
			{ threshold: [0, 0.15, 0.5, 1] }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="distance-learning-banner-area">
			<div className="container-fluid">
				<div
					className="row justify-content-center align-items-center g-5"
					data-cues="slideInUp"
					data-duration="1000"
				>
					<div className="col-xl-6 col-md-12">
						<div className="distance-learning-banner-content section-title-animation animation-style2">
							<h1 className="title-animation">
								Education That Moves With You —{" "}
								<span>
									Anytime,{" "}
									<Image
										src="/images/banner/line.png"
										alt="image"
										width={270}
										height={18}
									/>
								</span>{" "}
								Anywhere.
							</h1>
							<p>
								Learn from anywhere, anytime — with expert-led
								courses, flexible schedules, and global access.
							</p>
							<ul className="banner-btn">
								<li>
									<Link
										href="/courses"
										className="default-btn"
									>
										Start Learning Now
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
								</li>
								<li>
									<Link
										href="/courses"
										className="default-btn"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="15"
											viewBox="0 0 14 15"
											fill="none"
										>
											<mask
												id="mask0_7904_1990"
												maskUnits="userSpaceOnUse"
												x="0"
												y="0"
												width="14"
												height="15"
											>
												<path
													d="M6.45017 12.9531C9.59829 12.9531 12.1503 10.401 12.1503 7.25291C12.1503 4.10479 9.59829 1.55273 6.45017 1.55273C3.30205 1.55273 0.75 4.10479 0.75 7.25291C0.75 10.401 3.30205 12.9531 6.45017 12.9531Z"
													stroke="#808080"
													strokeWidth="1.5"
												/>
												<path
													d="M10.6499 11.4526L12.75 13.5527"
													stroke="white"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</mask>
											<g mask="url(#mask0_7904_1990)">
												<path
													d="M-0.450195 0.352539H13.9502V14.753H-0.450195V0.352539Z"
													fill="#1C43FE"
												/>
											</g>
										</svg>
										Browse Courses
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-xl-6 col-md-12">
						<div className="distance-learning-banner-image">
							<Image
								src="/images/banner/teacher2.png"
								alt="image"
								width={546}
								height={874}
								priority
							/>

							{/* Fun #1 */}
							<div className="fun">
								<div className="inner">
									<div className="image">
										<Image
											src="/images/banner/book.png"
											alt="image"
											width={54}
											height={58}
										/>
									</div>
									<div className="content">
										<div className="d-flex align-items-center">
											<h3 className="counter">
												{active ? (
													<CountUp
														end={8000}
														duration={2}
													/>
												) : (
													0
												)}
											</h3>
											<h3 className="sub">+</h3>
										</div>
										<p>Online Courses</p>
									</div>
								</div>
							</div>

							{/* Fun #2 */}
							<div className="fun-wrap">
								<div className="inner">
									<div className="image">
										<Image
											src="/images/banner/cape.png"
											alt="image"
											width={176}
											height={114}
										/>
									</div>
									<div className="content">
										<div className="d-flex align-items-center justify-content-center">
											<h3 className="counter">
												{active ? (
													<CountUp
														end={8}
														duration={2}
													/>
												) : (
													0
												)}
											</h3>
											<h3 className="sub">M+</h3>
										</div>
										<p>Certificates Awarded</p>
									</div>
								</div>
							</div>

							{/* Fun #3 */}
							<div className="fun-users">
								<div className="inner">
									<div className="content">
										<div className="d-flex align-items-center">
											<h3 className="counter">
												{active ? (
													<CountUp
														end={6.6}
														duration={2}
														decimals={1}
													/>
												) : (
													0
												)}
											</h3>
											<h3 className="sub">M+</h3>
										</div>
										<p>Active Learners</p>
										<div className="users">
											<Image
												src="/images/banner/users.png"
												alt="image"
												width={98}
												height={44}
											/>
										</div>
									</div>
									<div className="image">
										<Image
											src="/images/banner/frame.jpg"
											alt="image"
											width={178}
											height={244}
										/>
									</div>
								</div>
							</div>

							<div className="wrap-shape">
								<Image
									src="/images/banner/shape5.png"
									alt="image"
									width={188}
									height={188}
								/>
							</div>
							<div className="wrap-shape2">
								<Image
									src="/images/banner/path.png"
									alt="image"
									width={102}
									height={110}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="distance-learning-banner-shape">
				<Image
					src="/images/banner/rectangle.png"
					alt="image"
					width={1920}
					height={159}
				/>
			</div>
			<div className="distance-learning-banner-mesh-grad">
				<Image
					src="/images/banner/mesh-grad2.png"
					alt="image"
					width={1034}
					height={935}
				/>
			</div>
		</section>
	);
};

export default DistanceLearningBanner;
