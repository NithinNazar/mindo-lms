"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

type Lesson = {
	id: number;
	title: string;
	type: string;
	videoUrl: string | null;
	duration: number | null; // seconds
	isPreview: boolean;
};

type Section = {
	id: number;
	title: string;
	order: number;
	lessons: Lesson[];
};

type Props = {
	sections?: Section[];
};

const Curriculum = ({ sections = [] }: Props) => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);
	const [videoUrl, setVideoUrl] = useState<string | null>(null);

	const transformToEmbed = (url: string) => {
		try {
			const u = new URL(url);
			if (u.hostname.includes("youtu")) {
				let id = "";
				if (u.searchParams.get("v")) {
					id = u.searchParams.get("v") as string;
				} else {
					const parts = u.pathname.split("/");
					id = parts[parts.length - 1];
				}
				return `https://www.youtube.com/embed/${id}?autoplay=1`;
			}
			return url;
		} catch {
			return url;
		}
	};

	const openVideo = (url: string) => {
		setVideoUrl(transformToEmbed(url));
		setIsVideoOpen(true);
	};

	const closeVideo = () => {
		setIsVideoOpen(false);
		setVideoUrl(null);
	};

	const formatDuration = (seconds?: number | null) => {
		if (!seconds || seconds <= 0) return "-";
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		if (h > 0) return `${h} hr${h > 1 ? "s" : ""}${m ? ` ${m} min` : ""}`;
		return `${m} min`;
	};

	const sortedSections = useMemo(
		() => [...sections].sort((a, b) => a.order - b.order),
		[sections]
	);

	return (
		<>
			<div className="curriculum">
				<h2>Course Curriculum</h2>
				<div className="items">
					{sortedSections.map((section) => {
						const totalSeconds = section.lessons.reduce(
							(acc, l) => acc + (l.duration ?? 0),
							0
						);
						return (
							<div className="item" key={section.id}>
								<div className="curriculum-title">
									<div className="left">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="9"
											viewBox="0 0 16 9"
											fill="none"
										>
											<path
												d="M15 7.5L8 1.5L1 7.5"
												stroke="#63667D"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<h5>{section.title}</h5>
									</div>
									<div className="right">
										<span>
											Lessons:{" "}
											<b>{section.lessons.length}</b>
										</span>
										<span>
											Duration:{" "}
											<b>
												{formatDuration(totalSeconds)}
											</b>
										</span>
									</div>
								</div>
								<ul className="lesson-list">
									{section.lessons.map((lesson) => (
										<li key={lesson.id}>
											<div className="left">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18"
													height="18"
													viewBox="0 0 18 18"
													fill="none"
												>
													<g clipPath="url(#clip0_8079_2973)">
														<path
															d="M10.5 15.9375H7.5V17.0625H10.5V15.9375ZM2.0625 10.5V7.50004H0.937501V10.5H2.0625ZM15.9375 10.1723V10.5H17.0625V10.1723H15.9375ZM11.1683 3.45829L14.1375 6.13054L14.8898 5.29354L11.9213 2.62129L11.1683 3.45829ZM17.0625 10.1723C17.0625 8.90554 17.0738 8.10304 16.755 7.38604L15.7268 7.84429C15.9263 8.29279 15.9375 8.80654 15.9375 10.1723H17.0625ZM14.1375 6.13054C15.1523 7.04404 15.5273 7.39654 15.7268 7.84429L16.755 7.38604C16.4355 6.66829 15.8318 6.14104 14.8898 5.29354L14.1375 6.13054ZM7.5225 2.06254C8.709 2.06254 9.15675 2.07154 9.555 2.22454L9.9585 1.17454C9.3195 0.928542 8.6235 0.937542 7.5225 0.937542V2.06254ZM11.9213 2.62204C11.1068 1.88929 10.5975 1.41904 9.9585 1.17454L9.55575 2.22454C9.95475 2.37754 10.2908 2.66854 11.1683 3.45829L11.9213 2.62204ZM7.5 15.9375C6.06975 15.9375 5.05425 15.936 4.2825 15.8325C3.52875 15.7313 3.09375 15.5408 2.7765 15.2235L1.9815 16.0185C2.5425 16.581 3.25425 16.8293 4.13325 16.9478C4.99575 17.064 6.102 17.0625 7.5 17.0625V15.9375ZM0.937501 10.5C0.937501 11.898 0.936001 13.0035 1.05225 13.8668C1.17075 14.7458 1.41975 15.4575 1.98075 16.0193L2.77575 15.2243C2.45925 14.9063 2.26875 14.4713 2.1675 13.7168C2.064 12.9465 2.0625 11.9303 2.0625 10.5H0.937501ZM10.5 17.0625C11.898 17.0625 13.0035 17.064 13.8668 16.9478C14.7458 16.8293 15.4575 16.5803 16.0193 16.0193L15.2243 15.2243C14.9063 15.5408 14.4713 15.7313 13.7168 15.8325C12.9465 15.936 11.9303 15.9375 10.5 15.9375V17.0625ZM15.9375 10.5C15.9375 11.9303 15.936 12.9465 15.8325 13.7175C15.7313 14.4713 15.5408 14.9063 15.2235 15.2235L16.0185 16.0185C16.581 15.4575 16.8293 14.7458 16.9478 13.8668C17.064 13.0043 17.0625 11.898 17.0625 10.5H15.9375ZM2.0625 7.50004C2.0625 6.06979 2.064 5.05429 2.1675 4.28254C2.26875 3.52879 2.45925 3.09379 2.7765 2.77654L1.9815 1.98154C1.419 2.54254 1.17075 3.25429 1.05225 4.13329C0.936001 4.99579 0.937501 6.10204 0.937501 7.50004H2.0625ZM7.5225 0.937542C6.11625 0.937542 5.0055 0.936042 4.13925 1.05229C3.2565 1.17079 2.5425 1.41979 1.98075 1.98079L2.77575 2.77579C3.09375 2.45929 3.5295 2.26879 4.2885 2.16754C5.06325 2.06404 6.08475 2.06254 7.5225 2.06254V0.937542Z"
															fill="#1C43FE"
														/>
														<path
															opacity="0.5"
															d="M4.5 10.875H10.5M4.5 13.5H8.625"
															stroke="#1C43FE"
															strokeWidth="1.5"
															strokeLinecap="round"
														/>
														<path
															opacity="0.5"
															d="M9.75 1.875V3.75C9.75 5.51775 9.75 6.402 10.299 6.951C10.848 7.5 11.7322 7.5 13.5 7.5H16.5"
															stroke="#1C43FE"
															strokeWidth="1.5"
														/>
													</g>
													<defs>
														<clipPath id="clip0_8079_2973">
															<rect
																width="18"
																height="18"
																fill="white"
															/>
														</clipPath>
													</defs>
												</svg>
												<Link href="#">
													{lesson.title}
												</Link>
											</div>
											<div className="right">
												{lesson.isPreview &&
												lesson.videoUrl ? (
													<button
														type="button"
														className="preview-btn"
														onClick={() =>
															openVideo(
																lesson.videoUrl as string
															)
														}
													>
														<span>Preview</span>
													</button>
												) : (
													<div className="locked">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
														>
															<path
																d="M1 10.8001C1 8.8205 1 7.83 1.6153 7.2154C2.2299 6.6001 3.2204 6.6001 5.2 6.6001H10.8C12.7796 6.6001 13.7701 6.6001 14.3847 7.2154C15 7.83 15 8.8205 15 10.8001C15 12.7797 15 13.7702 14.3847 14.3848C13.7701 15.0001 12.7796 15.0001 10.8 15.0001H5.2C3.2204 15.0001 2.2299 15.0001 1.6153 14.3848C1 13.7702 1 12.7797 1 10.8001Z"
																stroke="#1C43FE"
																strokeWidth="1.5"
															/>
															<path
																opacity="0.5"
																d="M8.00156 12.1999C8.77476 12.1999 9.40156 11.5731 9.40156 10.7999C9.40156 10.0267 8.77476 9.3999 8.00156 9.3999C7.22836 9.3999 6.60156 10.0267 6.60156 10.7999C6.60156 11.5731 7.22836 12.1999 8.00156 12.1999Z"
																stroke="#1C43FE"
																strokeWidth="1.5"
															/>
															<path
																opacity="0.5"
																d="M3.80078 6.6V5.2C3.80078 4.08609 4.24328 3.0178 5.03093 2.23015C5.81859 1.4425 6.88687 1 8.00078 1C9.11469 1 10.183 1.4425 10.9706 2.23015C11.7583 3.0178 12.2008 4.08609 12.2008 5.2V6.6"
																stroke="#1C43FE"
																strokeWidth="1.5"
																strokeLinecap="round"
															/>
														</svg>
													</div>
												)}
												<div className="time">
													{formatDuration(
														lesson.duration
													)}
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
			</div>

			{isVideoOpen && (
				<div
					className="video-modal-overlay"
					onClick={closeVideo}
					style={{
						position: "fixed",
						inset: 0,
						background: "rgba(0,0,0,0.6)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						zIndex: 1000,
					}}
				>
					<div
						className="video-modal"
						onClick={(e) => e.stopPropagation()}
						style={{
							position: "relative",
							width: "min(90vw, 900px)",
							aspectRatio: "16 / 9",
							background: "#000",
							borderRadius: 8,
							overflow: "hidden",
							boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
						}}
					>
						<button
							type="button"
							aria-label="Close"
							onClick={closeVideo}
							style={{
								position: "absolute",
								top: 8,
								right: 12,
								fontSize: 28,
								lineHeight: 1,
								background: "transparent",
								border: 0,
								color: "#fff",
								cursor: "pointer",
								zIndex: 2,
							}}
						>
							×
						</button>
						{videoUrl && (
							<iframe
								src={videoUrl}
								title="Preview Video"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
								style={{
									width: "100%",
									height: "100%",
									border: 0,
									display: "block",
								}}
							/>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Curriculum;
