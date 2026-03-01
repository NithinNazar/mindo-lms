"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const EASE_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariant: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: EASE_BEZIER },
	},
};

const gridVariant: Variants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.98 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, ease: EASE_BEZIER },
	},
};

export default function Courses() {
	return (
		<div className="dl-courses-area ptb-140">
			<div className="container">
				<motion.div
					className="section-title section-title-animation animation-style2"
					data-cues="slideInUp"
					data-duration="1000"
					variants={sectionVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<span className="sub">Featured Courses</span>
					<h2 className="title-animation">
						Affordable Learning. Real-World Skills.
						<Image
							src="/images/title-line.png"
							alt="image"
							width={155}
							height={12}
						/>
					</h2>
					<p>
						Explore high-quality, expert-led courses designed to
						help you grow your skills and advance your career.
					</p>
				</motion.div>

				<motion.div
					className="row justify-content-center g-4"
					data-cues="slideInUp"
					data-duration="1000"
					variants={gridVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* Card 1 */}
					<div className="col-xl-4 col-md-6">
						<motion.div
							className="dl-courses-show-hide-style"
							variants={cardVariant}
							whileHover={{ y: -6 }}
							whileTap={{ scale: 0.98 }}
						>
							<div className="dl-courses-card">
								<div className="image">
									<Link href="/course-details">
										<Image
											src="/images/courses/courses5.jpg"
											alt="image"
											width={1100}
											height={750}
										/>
									</Link>
									<Link href="/courses" className="tag-btn">
										Popular Course
									</Link>
									<div className="vector">
										<Image
											src="/images/courses/vector.png"
											alt="image"
											width={1060}
											height={163}
										/>
									</div>
								</div>
								<div className="content">
									<h3>
										<Link href="/course-details">
											Python for Data Analysis
										</Link>
									</h3>
									<div className="profile-btn">
										<Image
											src="/images/courses/user1.png"
											className="rounded-circle"
											alt="image"
											width={26}
											height={26}
										/>
										<Link href="/instructor-details">
											James Patel
										</Link>
									</div>
									<div className="info-rating">
										<ul className="rating">
											<li>
												<b>4.9</b>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-half-fill"></i>
											</li>
										</ul>
										<span>(3,560 Reviews)</span>
									</div>
									<div className="price">$49</div>
									<ul className="info-list">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="18"
												viewBox="0 0 14 18"
												fill="none"
											>
												<path
													d="M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													d="M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4"
													stroke="#4B5563"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</svg>
											<span>45 Lessons</span>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="19"
												viewBox="0 0 14 19"
												fill="none"
											>
												<path
													d="M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
											</svg>
											<span>7,820 Learners</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="dl-courses-hover-card">
								<div className="image">
									<Link href="/course-details">
										<Image
											src="/images/courses/courses5.jpg"
											alt="image"
											width={1100}
											height={750}
										/>
									</Link>
									<Link href="/courses" className="tag-btn">
										Popular Course
									</Link>
									<div className="vector">
										<Image
											src="/images/courses/vector.png"
											alt="image"
											width={1060}
											height={163}
										/>
									</div>
								</div>
								<div className="content">
									<h3>
										<Link href="/course-details">
											Python for Data Analysis
										</Link>
									</h3>
									<div className="profile-btn">
										<Image
											src="/images/courses/user1.png"
											className="rounded-circle"
											alt="image"
											width={26}
											height={26}
										/>
										<Link href="/instructor-details">
											James Patel
										</Link>
									</div>
									<p>
										Use tools like matplotlib, seaborn, and
										plotly to create clear, interactive, and
										beautiful charts and dashboards.
									</p>
									<div className="info-rating">
										<ul className="rating">
											<li>
												<b>4.9</b>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-half-fill"></i>
											</li>
										</ul>
										<span>(3,560 Reviews)</span>
									</div>
									<div className="price">$49</div>
									<ul className="info-list">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="18"
												viewBox="0 0 14 18"
												fill="none"
											>
												<path
													d="M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													d="M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4"
													stroke="#4B5563"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</svg>
											<span>45 Lessons</span>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="19"
												viewBox="0 0 14 19"
												fill="none"
											>
												<path
													d="M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
											</svg>
											<span>7,820 Learners</span>
										</li>
									</ul>
									<ul className="info-bottom">
										<li>
											<Link
												href="/cart"
												className="default-btn"
											>
												Add To Cart
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
												>
													<path
														opacity="0.5"
														d="M5.48788 14.1143C5.83716 14.1143 6.17214 14.253 6.41913 14.5C6.66611 14.747 6.80486 15.082 6.80486 15.4313C6.80486 15.7806 6.66611 16.1156 6.41913 16.3626C6.17214 16.6096 5.83716 16.7484 5.48788 16.7484C5.13859 16.7484 4.80361 16.6096 4.55663 16.3626C4.30965 16.1156 4.1709 15.7806 4.1709 15.4313C4.1709 15.082 4.30965 14.747 4.55663 14.5C4.80361 14.253 5.13859 14.1143 5.48788 14.1143ZM13.3898 14.1143C13.739 14.1143 14.074 14.253 14.321 14.5C14.568 14.747 14.7067 15.082 14.7067 15.4313C14.7067 15.7806 14.568 16.1156 14.321 16.3626C14.074 16.6096 13.739 16.7484 13.3898 16.7484C13.0405 16.7484 12.7055 16.6096 12.4585 16.3626C12.2115 16.1156 12.0728 15.7806 12.0728 15.4313C12.0728 15.082 12.2115 14.747 12.4585 14.5C12.7055 14.253 13.0405 14.1143 13.3898 14.1143Z"
														stroke="white"
														strokeWidth="1.5"
													/>
													<path
														d="M0.877557 0.322971C0.712695 0.264985 0.531552 0.274871 0.373977 0.350452C0.216403 0.426034 0.0953048 0.561121 0.0373235 0.725995C-0.0206579 0.890869 -0.0107731 1.07203 0.0648034 1.22961C0.14038 1.3872 0.275457 1.5083 0.44032 1.56629L0.877557 0.322971ZM17.0404 6.98824L17.6849 7.12083L17.6857 7.11731L17.0404 6.98824ZM3.91452 6.88024V4.49019H2.59753V6.88024H3.91452ZM1.10671 0.403751L0.877557 0.322971L0.44032 1.56629L0.669474 1.64619L1.10671 0.403751ZM8.50639 12.5788H13.1615V11.2617H8.50639V12.5788ZM3.91452 4.49019C3.91452 3.86941 3.91539 3.35136 3.87062 2.93078C3.82233 2.49439 3.72136 2.09663 3.47377 1.73487L2.38594 2.4777C2.46496 2.59361 2.52642 2.75341 2.56066 3.07214C2.59666 3.4058 2.59753 3.84044 2.59753 4.49019H3.91452ZM0.669474 1.64619C1.25597 1.85253 1.64141 1.98951 1.925 2.13C2.19103 2.25995 2.30868 2.36531 2.38594 2.47858L3.47377 1.73487C3.22442 1.36961 2.89166 1.13604 2.50447 0.945507C2.13571 0.764629 1.66336 0.599556 1.10671 0.403751L0.669474 1.64619ZM2.59753 6.88024C2.59753 8.15605 2.60983 9.07537 2.72923 9.7778C2.8583 10.5277 3.11555 11.065 3.59405 11.5708L4.55018 10.6646C4.26922 10.3679 4.11733 10.0781 4.02778 9.55566C3.9312 8.98493 3.91452 8.18766 3.91452 6.88024H2.59753ZM8.50639 11.2617C7.26228 11.2617 6.39922 11.26 5.74863 11.1678C5.12087 11.0791 4.78987 10.9175 4.55018 10.6646L3.59405 11.5708C4.11557 12.1213 4.7767 12.361 5.56338 12.4717C6.32722 12.5805 7.30267 12.5788 8.50639 12.5788V11.2617ZM3.25603 4.34268H13.906V3.02561H3.2569L3.25603 4.34268ZM16.3951 6.85478L15.9561 8.98405L17.2468 9.24922L17.6849 7.12083L16.3951 6.85478ZM13.9078 4.34268C14.6593 4.34268 15.3213 4.34356 15.8437 4.40151C16.1019 4.43195 16.2985 4.47117 16.4337 4.51917C16.5751 4.56922 16.5979 4.60697 16.5865 4.59205L17.6304 3.78951C17.4241 3.52083 17.1344 3.36892 16.8701 3.27673C16.5843 3.18266 16.289 3.12081 15.9895 3.09234C15.3793 3.02473 14.6347 3.02561 13.9078 3.02561V4.34268ZM17.6857 7.11731C17.835 6.37273 17.9614 5.74756 17.9922 5.24707C18.0246 4.73253 17.9658 4.22502 17.6304 3.78951L16.5865 4.59205C16.6409 4.66317 16.7006 4.79048 16.6778 5.16629C16.6541 5.55614 16.5514 6.07683 16.3951 6.85917L17.6857 7.11731ZM13.1615 12.5788C13.8305 12.5788 14.3924 12.5797 14.8455 12.5243C15.3152 12.4673 15.7445 12.3408 16.1185 12.0361L15.2862 11.015C15.1765 11.1045 15.0211 11.1765 14.6848 11.2169C14.331 11.2608 13.8639 11.2617 13.1615 11.2617V12.5788ZM15.9579 8.98405C15.8156 9.67156 15.7208 10.1281 15.6067 10.4662C15.4987 10.7876 15.396 10.9254 15.2862 11.015L16.1185 12.0361C16.4934 11.7306 16.7033 11.3363 16.8543 10.8868C17 10.4548 17.1124 9.90512 17.2476 9.2501L15.9579 8.98405Z"
														fill="white"
													/>
												</svg>
											</Link>
										</li>
										<li>
											<Link
												href="/wishlist"
												className="wishlist-btn"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="25"
													viewBox="0 0 24 25"
													fill="none"
												>
													<path
														d="M12 6.01706C7.5 1.34306 2 4.79206 2 9.65506C2 14.5181 6.02 17.1091 8.962 19.4291C10 20.2461 11 21.0171 12 21.0171"
														stroke="#1C43FE"
														strokeWidth="1.5"
														strokeLinecap="round"
													/>
													<path
														opacity="0.5"
														d="M12 6.01706C16.5 1.34306 22 4.79206 22 9.65506C22 14.5181 17.98 17.1091 15.038 19.4291C14 20.2461 13 21.0171 12 21.0171"
														stroke="#1C43FE"
														strokeWidth="1.5"
														strokeLinecap="round"
													/>
												</svg>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Card 2 */}
					<div className="col-xl-4 col-md-6">
						<motion.div
							className="dl-courses-show-hide-style"
							variants={cardVariant}
							whileHover={{ y: -6 }}
							whileTap={{ scale: 0.98 }}
						>
							<div className="dl-courses-card">
								<div className="image">
									<Link href="/course-details">
										<Image
											src="/images/courses/courses6.jpg"
											alt="image"
											width={1100}
											height={750}
										/>
									</Link>
									<Link href="/courses" className="tag-btn">
										Trending Course
									</Link>
									<div className="vector">
										<Image
											src="/images/courses/vector.png"
											alt="image"
											width={1060}
											height={163}
										/>
									</div>
								</div>
								<div className="content">
									<h3>
										<Link href="/course-details">
											Digital Marketing Mastery
										</Link>
									</h3>
									<div className="profile-btn">
										<Image
											src="/images/courses/user2.png"
											className="rounded-circle"
											alt="image"
											width={26}
											height={26}
										/>
										<Link href="/instructor-details">
											Sofia Blake
										</Link>
									</div>
									<div className="info-rating">
										<ul className="rating">
											<li>
												<b>4.8</b>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-half-fill"></i>
											</li>
										</ul>
										<span>(4,670 Reviews)</span>
									</div>
									<div className="price">$59</div>
									<ul className="info-list">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="18"
												viewBox="0 0 14 18"
												fill="none"
											>
												<path
													d="M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													d="M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4"
													stroke="#4B5563"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</svg>
											<span>38 Lessons</span>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="19"
												viewBox="0 0 14 19"
												fill="none"
											>
												<path
													d="M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
											</svg>
											<span>8,620 Learners</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="dl-courses-hover-card">
								<div className="image">
									<Link href="/course-details">
										<Image
											src="/images/courses/courses6.jpg"
											alt="image"
											width={1100}
											height={750}
										/>
									</Link>
									<Link href="/courses" className="tag-btn">
										Trending Course
									</Link>
									<div className="vector">
										<Image
											src="/images/courses/vector.png"
											alt="image"
											width={1060}
											height={163}
										/>
									</div>
								</div>
								<div className="content">
									<h3>
										<Link href="/course-details">
											Digital Marketing Mastery
										</Link>
									</h3>
									<div className="profile-btn">
										<Image
											src="/images/courses/user2.png"
											className="rounded-circle"
											alt="image"
											width={26}
											height={26}
										/>
										<Link href="/instructor-details">
											Sofia Blake
										</Link>
									</div>
									<p>
										Use tools like matplotlib, seaborn, and
										plotly to create clear, interactive, and
										beautiful charts and dashboards.
									</p>
									<div className="info-rating">
										<ul className="rating">
											<li>
												<b>4.8</b>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-half-fill"></i>
											</li>
										</ul>
										<span>(4,670 Reviews)</span>
									</div>
									<div className="price">$59</div>
									<ul className="info-list">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="18"
												viewBox="0 0 14 18"
												fill="none"
											>
												<path
													d="M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													d="M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4"
													stroke="#4B5563"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</svg>
											<span>38 Lessons</span>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="19"
												viewBox="0 0 14 19"
												fill="none"
											>
												<path
													d="M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
											</svg>
											<span>8,620 Learners</span>
										</li>
									</ul>
									<ul className="info-bottom">
										<li>
											<Link
												href="/cart"
												className="default-btn"
											>
												Add To Cart
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
												>
													<path
														opacity="0.5"
														d="M5.48788 14.1143C5.83716 14.1143 6.17214 14.253 6.41913 14.5C6.66611 14.747 6.80486 15.082 6.80486 15.4313C6.80486 15.7806 6.66611 16.1156 6.41913 16.3626C6.17214 16.6096 5.83716 16.7484 5.48788 16.7484C5.13859 16.7484 4.80361 16.6096 4.55663 16.3626C4.30965 16.1156 4.1709 15.7806 4.1709 15.4313C4.1709 15.082 4.30965 14.747 4.55663 14.5C4.80361 14.253 5.13859 14.1143 5.48788 14.1143ZM13.3898 14.1143C13.739 14.1143 14.074 14.253 14.321 14.5C14.568 14.747 14.7067 15.082 14.7067 15.4313C14.7067 15.7806 14.568 16.1156 14.321 16.3626C14.074 16.6096 13.739 16.7484 13.3898 16.7484C13.0405 16.7484 12.7055 16.6096 12.4585 16.3626C12.2115 16.1156 12.0728 15.7806 12.0728 15.4313C12.0728 15.082 12.2115 14.747 12.4585 14.5C12.7055 14.253 13.0405 14.1143 13.3898 14.1143Z"
														stroke="white"
														strokeWidth="1.5"
													/>
													<path
														d="M0.877557 0.322971C0.712695 0.264985 0.531552 0.274871 0.373977 0.350452C0.216403 0.426034 0.0953048 0.561121 0.0373235 0.725995C-0.0206579 0.890869 -0.0107731 1.07203 0.0648034 1.22961C0.14038 1.3872 0.275457 1.5083 0.44032 1.56629L0.877557 0.322971ZM17.0404 6.98824L17.6849 7.12083L17.6857 7.11731L17.0404 6.98824ZM3.91452 6.88024V4.49019H2.59753V6.88024H3.91452ZM1.10671 0.403751L0.877557 0.322971L0.44032 1.56629L0.669474 1.64619L1.10671 0.403751ZM8.50639 12.5788H13.1615V11.2617H8.50639V12.5788ZM3.91452 4.49019C3.91452 3.86941 3.91539 3.35136 3.87062 2.93078C3.82233 2.49439 3.72136 2.09663 3.47377 1.73487L2.38594 2.4777C2.46496 2.59361 2.52642 2.75341 2.56066 3.07214C2.59666 3.4058 2.59753 3.84044 2.59753 4.49019H3.91452ZM0.669474 1.64619C1.25597 1.85253 1.64141 1.98951 1.925 2.13C2.19103 2.25995 2.30868 2.36531 2.38594 2.47858L3.47377 1.73487C3.22442 1.36961 2.89166 1.13604 2.50447 0.945507C2.13571 0.764629 1.66336 0.599556 1.10671 0.403751L0.669474 1.64619ZM2.59753 6.88024C2.59753 8.15605 2.60983 9.07537 2.72923 9.7778C2.8583 10.5277 3.11555 11.065 3.59405 11.5708L4.55018 10.6646C4.26922 10.3679 4.11733 10.0781 4.02778 9.55566C3.9312 8.98493 3.91452 8.18766 3.91452 6.88024H2.59753ZM8.50639 11.2617C7.26228 11.2617 6.39922 11.26 5.74863 11.1678C5.12087 11.0791 4.78987 10.9175 4.55018 10.6646L3.59405 11.5708C4.11557 12.1213 4.7767 12.361 5.56338 12.4717C6.32722 12.5805 7.30267 12.5788 8.50639 12.5788V11.2617ZM3.25603 4.34268H13.906V3.02561H3.2569L3.25603 4.34268ZM16.3951 6.85478L15.9561 8.98405L17.2468 9.24922L17.6849 7.12083L16.3951 6.85478ZM13.9078 4.34268C14.6593 4.34268 15.3213 4.34356 15.8437 4.40151C16.1019 4.43195 16.2985 4.47117 16.4337 4.51917C16.5751 4.56922 16.5979 4.60697 16.5865 4.59205L17.6304 3.78951C17.4241 3.52083 17.1344 3.36892 16.8701 3.27673C16.5843 3.18266 16.289 3.12081 15.9895 3.09234C15.3793 3.02473 14.6347 3.02561 13.9078 3.02561V4.34268ZM17.6857 7.11731C17.835 6.37273 17.9614 5.74756 17.9922 5.24707C18.0246 4.73253 17.9658 4.22502 17.6304 3.78951L16.5865 4.59205C16.6409 4.66317 16.7006 4.79048 16.6778 5.16629C16.6541 5.55614 16.5514 6.07683 16.3951 6.85917L17.6857 7.11731ZM13.1615 12.5788C13.8305 12.5788 14.3924 12.5797 14.8455 12.5243C15.3152 12.4673 15.7445 12.3408 16.1185 12.0361L15.2862 11.015C15.1765 11.1045 15.0211 11.1765 14.6848 11.2169C14.331 11.2608 13.8639 11.2617 13.1615 11.2617V12.5788ZM15.9579 8.98405C15.8156 9.67156 15.7208 10.1281 15.6067 10.4662C15.4987 10.7876 15.396 10.9254 15.2862 11.015L16.1185 12.0361C16.4934 11.7306 16.7033 11.3363 16.8543 10.8868C17 10.4548 17.1124 9.90512 17.2476 9.2501L15.9579 8.98405Z"
														fill="white"
													/>
												</svg>
											</Link>
										</li>
										<li>
											<Link
												href="/wishlist"
												className="wishlist-btn"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="25"
													viewBox="0 0 24 25"
													fill="none"
												>
													<path
														d="M12 6.01706C7.5 1.34306 2 4.79206 2 9.65506C2 14.5181 6.02 17.1091 8.962 19.4291C10 20.2461 11 21.0171 12 21.0171"
														stroke="#1C43FE"
														strokeWidth="1.5"
														strokeLinecap="round"
													/>
													<path
														opacity="0.5"
														d="M12 6.01706C16.5 1.34306 22 4.79206 22 9.65506C22 14.5181 17.98 17.1091 15.038 19.4291C14 20.2461 13 21.0171 12 21.0171"
														stroke="#1C43FE"
														strokeWidth="1.5"
														strokeLinecap="round"
													/>
												</svg>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Card 3 */}
					<div className="col-xl-4 col-md-6">
						<motion.div
							className="dl-courses-show-hide-style"
							variants={cardVariant}
							whileHover={{ y: -6 }}
							whileTap={{ scale: 0.98 }}
						>
							<div className="dl-courses-card">
								<div className="image">
									<Link href="/course-details">
										<Image
											src="/images/courses/courses7.jpg"
											alt="image"
											width={1100}
											height={750}
										/>
									</Link>
									<Link href="/courses" className="tag-btn">
										Newly Release Course
									</Link>
									<div className="vector">
										<Image
											src="/images/courses/vector.png"
											alt="image"
											width={1060}
											height={163}
										/>
									</div>
								</div>
								<div className="content">
									<h3>
										<Link href="/course-details">
											UI/UX Design Fundamentals
										</Link>
									</h3>
									<div className="profile-btn">
										<Image
											src="/images/courses/user3.png"
											className="rounded-circle"
											alt="image"
											width={26}
											height={26}
										/>
										<Link href="/instructor-details">
											Elena García
										</Link>
									</div>
									<div className="info-rating">
										<ul className="rating">
											<li>
												<b>4.7</b>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-half-fill"></i>
											</li>
										</ul>
										<span>(2,455 Reviews)</span>
									</div>
									<div className="price">$39</div>
									<ul className="info-list">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="18"
												viewBox="0 0 14 18"
												fill="none"
											>
												<path
													d="M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													d="M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4"
													stroke="#4B5563"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</svg>
											<span>25 Lessons</span>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="19"
												viewBox="0 0 14 19"
												fill="none"
											>
												<path
													d="M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
											</svg>
											<span>4,790 Learners</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="dl-courses-hover-card">
								<div className="image">
									<Link href="/course-details">
										<Image
											src="/images/courses/courses7.jpg"
											alt="image"
											width={1100}
											height={750}
										/>
									</Link>
									<Link href="/courses" className="tag-btn">
										Newly Release Course
									</Link>
									<div className="vector">
										<Image
											src="/images/courses/vector.png"
											alt="image"
											width={1060}
											height={163}
										/>
									</div>
								</div>
								<div className="content">
									<h3>
										<Link href="/course-details">
											UI/UX Design Fundamentals
										</Link>
									</h3>
									<div className="profile-btn">
										<Image
											src="/images/courses/user3.png"
											className="rounded-circle"
											alt="image"
											width={26}
											height={26}
										/>
										<Link href="/instructor-details">
											Elena García
										</Link>
									</div>
									<p>
										Use tools like matplotlib, seaborn, and
										plotly to create clear, interactive, and
										beautiful charts and dashboards.
									</p>
									<div className="info-rating">
										<ul className="rating">
											<li>
												<b>4.7</b>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-fill"></i>
											</li>
											<li>
												<i className="ri-star-half-fill"></i>
											</li>
										</ul>
										<span>(2,455 Reviews)</span>
									</div>
									<div className="price">$39</div>
									<ul className="info-list">
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="18"
												viewBox="0 0 14 18"
												fill="none"
											>
												<path
													d="M1 6.14258C1 4.02158 1 2.96033 1.65925 2.30183C2.31775 1.64258 3.379 1.64258 5.5 1.64258H8.5C10.621 1.64258 11.6823 1.64258 12.3408 2.30183C13 2.96033 13 4.02158 13 6.14258V12.1426C13 14.2636 13 15.3248 12.3408 15.9833C11.6823 16.6426 10.621 16.6426 8.5 16.6426H5.5C3.379 16.6426 2.31775 16.6426 1.65925 15.9833C1 15.3248 1 14.2636 1 12.1426V6.14258Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													d="M12.9235 12.1426H3.9235C3.226 12.1426 2.87725 12.1426 2.59075 12.2191C2.20923 12.3214 1.86137 12.5223 1.58213 12.8017C1.3029 13.0811 1.10212 13.429 1 13.8106"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M4 5.39258H10M4 8.01758H7.75M12.625 14.3926H4"
													stroke="#4B5563"
													strokeWidth="1.5"
													strokeLinecap="round"
												/>
											</svg>
											<span>25 Lessons</span>
										</li>
										<li>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="14"
												height="19"
												viewBox="0 0 14 19"
												fill="none"
											>
												<path
													d="M7.0001 7.85714C8.89365 7.85714 10.4287 6.32212 10.4287 4.42857C10.4287 2.53502 8.89365 1 7.0001 1C5.10656 1 3.57153 2.53502 3.57153 4.42857C3.57153 6.32212 5.10656 7.85714 7.0001 7.85714Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
												<path
													opacity="0.5"
													d="M7 17.2858C10.3137 17.2858 13 15.7508 13 13.8573C13 11.9637 10.3137 10.4287 7 10.4287C3.68629 10.4287 1 11.9637 1 13.8573C1 15.7508 3.68629 17.2858 7 17.2858Z"
													stroke="#4B5563"
													strokeWidth="1.5"
												/>
											</svg>
											<span>4,790 Learners</span>
										</li>
									</ul>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				<div className="dl-courses-all-btn">
					<Link href="/courses" className="default-btn">
						View All Courses
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
	);
}
