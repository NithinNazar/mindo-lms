"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Testimonial = () => {
	return (
		<div className="col-lg-6 col-md-12">
			<div className="education-overview-wrapper">
				<Swiper
					className="education-overview-slider"
					modules={[Autoplay, EffectFade, Navigation]}
					loop
					spaceBetween={25}
					autoHeight
					slidesPerView={1}
					effect="fade"
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					navigation={{
						prevEl: ".button-prev",
						nextEl: ".button-next",
					}}
					fadeEffect={{ crossFade: true }}
				>
					<SwiperSlide>
						<div className="education-overview-slide-item">
							<div className="quote">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="43"
									height="43"
									viewBox="0 0 43 43"
									fill="none"
								>
									<path
										d="M34.0165 17.6209C33.9299 16.6846 33.9961 14.1395 36.4343 10.6003C36.6187 10.3333 36.5853 9.97306 36.3562 9.74409C35.3622 8.75005 34.7468 8.12278 34.3151 7.68385C33.7475 7.1051 33.4883 6.84138 33.1091 6.49752C32.8558 6.26989 32.4727 6.26592 32.2168 6.48905C27.967 10.187 23.2468 17.8282 23.9298 27.1899C24.3301 32.6869 28.3397 36.6768 33.4634 36.6768C38.7216 36.6768 42.9995 32.3995 42.9995 27.1413C42.9995 22.0688 39.0182 17.9089 34.0165 17.6209ZM33.4634 35.333C29.0634 35.333 25.6181 31.8674 25.2697 27.0928C24.5013 16.5639 30.7601 9.7244 32.6511 7.9135C32.8355 8.09524 33.0461 8.3091 33.3565 8.62535C33.7304 9.0059 34.2423 9.52687 35.0165 10.3038C32.0566 14.8638 32.615 18.113 32.8597 18.5788C32.9759 18.8 33.2141 18.9489 33.4634 18.9489C37.9808 18.9489 41.6558 22.6239 41.6558 27.1413C41.6558 31.6581 37.9808 35.333 33.4634 35.333Z"
										fill="#1C43FE"
									/>
									<path
										d="M10.1546 17.6207C10.0673 16.6871 10.1316 14.1439 12.5724 10.6002C12.7561 10.3331 12.7233 9.97289 12.4943 9.74392C11.5022 8.75183 10.8874 8.12524 10.4564 7.6863C9.88688 7.10627 9.627 6.84182 9.24779 6.49735C8.9945 6.26972 8.61133 6.26643 8.35548 6.48821C4.10573 10.1861 -0.615129 17.8261 0.0665551 27.1897C0.468135 32.686 4.47836 36.6766 9.60207 36.6766C14.8603 36.6766 19.1383 32.3993 19.1383 27.1411C19.1383 22.068 15.1569 17.9075 10.1546 17.6207ZM9.60207 35.3329C5.20277 35.3329 1.75545 31.8672 1.40641 27.0919C0.640067 16.5604 6.89885 9.72356 8.78978 7.91333C8.97481 8.09507 9.18612 8.31027 9.49713 8.6272C9.87042 9.00775 10.3816 9.52805 11.1545 10.3036C8.1947 14.8643 8.75309 18.1128 8.99779 18.578C9.11396 18.7991 9.35274 18.9487 9.60207 18.9487C14.1196 18.9487 17.7945 22.6237 17.7945 27.1411C17.7945 31.6579 14.1196 35.3329 9.60207 35.3329Z"
										fill="#1C43FE"
									/>
								</svg>
							</div>
							<p>
								I finally have a clear path to upskill. Lessons
								are practical, projects are fun, and I’m already
								using them at work with real confidence.
							</p>
							<div className="profile">
								<div className="avatars">
									<Image
										src="/images/user2.jpg"
										alt="user2"
										width={100}
										height={100}
										className="left"
									/>
									<Image
										src="/images/user1.jpg"
										alt="user1"
										width={100}
										height={100}
										className="active"
									/>
									<Image
										src="/images/user3.jpg"
										alt="user3"
										width={100}
										height={100}
										className="right"
									/>
								</div>
								<div className="content">
									<h3>Aisha Rahman</h3>
									<span>Junior Web Developer</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="education-overview-slide-item">
							<div className="quote">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="43"
									height="43"
									viewBox="0 0 43 43"
									fill="none"
								>
									<path
										d="M34.0165 17.6209C33.9299 16.6846 33.9961 14.1395 36.4343 10.6003C36.6187 10.3333 36.5853 9.97306 36.3562 9.74409C35.3622 8.75005 34.7468 8.12278 34.3151 7.68385C33.7475 7.1051 33.4883 6.84138 33.1091 6.49752C32.8558 6.26989 32.4727 6.26592 32.2168 6.48905C27.967 10.187 23.2468 17.8282 23.9298 27.1899C24.3301 32.6869 28.3397 36.6768 33.4634 36.6768C38.7216 36.6768 42.9995 32.3995 42.9995 27.1413C42.9995 22.0688 39.0182 17.9089 34.0165 17.6209ZM33.4634 35.333C29.0634 35.333 25.6181 31.8674 25.2697 27.0928C24.5013 16.5639 30.7601 9.7244 32.6511 7.9135C32.8355 8.09524 33.0461 8.3091 33.3565 8.62535C33.7304 9.0059 34.2423 9.52687 35.0165 10.3038C32.0566 14.8638 32.615 18.113 32.8597 18.5788C32.9759 18.8 33.2141 18.9489 33.4634 18.9489C37.9808 18.9489 41.6558 22.6239 41.6558 27.1413C41.6558 31.6581 37.9808 35.333 33.4634 35.333Z"
										fill="#1C43FE"
									/>
									<path
										d="M10.1546 17.6207C10.0673 16.6871 10.1316 14.1439 12.5724 10.6002C12.7561 10.3331 12.7233 9.97289 12.4943 9.74392C11.5022 8.75183 10.8874 8.12524 10.4564 7.6863C9.88688 7.10627 9.627 6.84182 9.24779 6.49735C8.9945 6.26972 8.61133 6.26643 8.35548 6.48821C4.10573 10.1861 -0.615129 17.8261 0.0665551 27.1897C0.468135 32.686 4.47836 36.6766 9.60207 36.6766C14.8603 36.6766 19.1383 32.3993 19.1383 27.1411C19.1383 22.068 15.1569 17.9075 10.1546 17.6207ZM9.60207 35.3329C5.20277 35.3329 1.75545 31.8672 1.40641 27.0919C0.640067 16.5604 6.89885 9.72356 8.78978 7.91333C8.97481 8.09507 9.18612 8.31027 9.49713 8.6272C9.87042 9.00775 10.3816 9.52805 11.1545 10.3036C8.1947 14.8643 8.75309 18.1128 8.99779 18.578C9.11396 18.7991 9.35274 18.9487 9.60207 18.9487C14.1196 18.9487 17.7945 22.6237 17.7945 27.1411C17.7945 31.6579 14.1196 35.3329 9.60207 35.3329Z"
										fill="#1C43FE"
									/>
								</svg>
							</div>
							<p>
								From zero to shipping features faster — the
								mentors, pace, and community kept me motivated.
								It feels like a real career springboard.
							</p>
							<div className="profile">
								<div className="avatars">
									<Image
										src="/images/user1.jpg"
										alt="user1"
										width={100}
										height={100}
										className="left"
									/>
									<Image
										src="/images/user2.jpg"
										alt="user2"
										width={100}
										height={100}
										className="active "
									/>

									<Image
										src="/images/user3.jpg"
										alt="user3"
										width={100}
										height={100}
										className="right"
									/>
								</div>
								<div className="content">
									<h3>Daniel Okoye</h3>
									<span>Product Manager</span>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="education-overview-slide-item">
							<div className="quote">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="43"
									height="43"
									viewBox="0 0 43 43"
									fill="none"
								>
									<path
										d="M34.0165 17.6209C33.9299 16.6846 33.9961 14.1395 36.4343 10.6003C36.6187 10.3333 36.5853 9.97306 36.3562 9.74409C35.3622 8.75005 34.7468 8.12278 34.3151 7.68385C33.7475 7.1051 33.4883 6.84138 33.1091 6.49752C32.8558 6.26989 32.4727 6.26592 32.2168 6.48905C27.967 10.187 23.2468 17.8282 23.9298 27.1899C24.3301 32.6869 28.3397 36.6768 33.4634 36.6768C38.7216 36.6768 42.9995 32.3995 42.9995 27.1413C42.9995 22.0688 39.0182 17.9089 34.0165 17.6209ZM33.4634 35.333C29.0634 35.333 25.6181 31.8674 25.2697 27.0928C24.5013 16.5639 30.7601 9.7244 32.6511 7.9135C32.8355 8.09524 33.0461 8.3091 33.3565 8.62535C33.7304 9.0059 34.2423 9.52687 35.0165 10.3038C32.0566 14.8638 32.615 18.113 32.8597 18.5788C32.9759 18.8 33.2141 18.9489 33.4634 18.9489C37.9808 18.9489 41.6558 22.6239 41.6558 27.1413C41.6558 31.6581 37.9808 35.333 33.4634 35.333Z"
										fill="#1C43FE"
									/>
									<path
										d="M10.1546 17.6207C10.0673 16.6871 10.1316 14.1439 12.5724 10.6002C12.7561 10.3331 12.7233 9.97289 12.4943 9.74392C11.5022 8.75183 10.8874 8.12524 10.4564 7.6863C9.88688 7.10627 9.627 6.84182 9.24779 6.49735C8.9945 6.26972 8.61133 6.26643 8.35548 6.48821C4.10573 10.1861 -0.615129 17.8261 0.0665551 27.1897C0.468135 32.686 4.47836 36.6766 9.60207 36.6766C14.8603 36.6766 19.1383 32.3993 19.1383 27.1411C19.1383 22.068 15.1569 17.9075 10.1546 17.6207ZM9.60207 35.3329C5.20277 35.3329 1.75545 31.8672 1.40641 27.0919C0.640067 16.5604 6.89885 9.72356 8.78978 7.91333C8.97481 8.09507 9.18612 8.31027 9.49713 8.6272C9.87042 9.00775 10.3816 9.52805 11.1545 10.3036C8.1947 14.8643 8.75309 18.1128 8.99779 18.578C9.11396 18.7991 9.35274 18.9487 9.60207 18.9487C14.1196 18.9487 17.7945 22.6237 17.7945 27.1411C17.7945 31.6579 14.1196 35.3329 9.60207 35.3329Z"
										fill="#1C43FE"
									/>
								</svg>
							</div>
							<p>
								The curriculum is focused and hands‑on. I loved
								the bite‑size videos, quizzes, and feedback that
								made complex topics actually stick.
							</p>
							<div className="profile">
								<div className="avatars">
									<Image
										src="/images/user2.jpg"
										alt="user2"
										width={100}
										height={100}
										className="left "
									/>
									<Image
										src="/images/user3.jpg"
										alt="user3"
										width={100}
										height={100}
										className="active"
									/>
									<Image
										src="/images/user1.jpg"
										alt="user1"
										width={100}
										height={100}
										className="right"
									/>
								</div>
								<div className="content">
									<h3>Sofia Martins</h3>
									<span>UX Design Student</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					{/* Repeat other SwiperSlide items as in HTML */}
				</Swiper>

				<div className="overview-nav-buttons">
					<div className="button-prev">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<g fill="none">
								<path
									fill="#1C43FE"
									d="M20 12.75a.75.75 0 0 0 0-1.5zm0-1.5H4v1.5h16z"
									opacity="0.5"
								/>
								<path
									stroke="#1C43FE"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="m10 6l-6 6l6 6"
								/>
							</g>
						</svg>
					</div>
					<div className="button-next">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<g fill="none">
								<path
									fill="#1C43FE"
									d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z"
									opacity="0.5"
								/>
								<path
									stroke="#1C43FE"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="m14 6l6 6l-6 6"
								/>
							</g>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
