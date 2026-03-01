"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCartStore, useIsInCart } from "@/stores/useCartStore";
import { useEnrolledCourses } from "@/lib/useEnrolledCourses";
import AddToCartButton from "@/components/Cart/AddToCartButton";

type Lesson = {
    id: number;
    duration: number | null;
};
type Section = {
    id: number;
    lessons: Lesson[];
};

export default function Sidebar({
    course,
    sections,
}: {
    course?: {
        id: string;
        slug: string;
        title: string;
        price: number | string;
        language: string;
        level?: string | null;
        isCertificate?: boolean;
        thumbnailUrl?: string | null;
        promoVideoUrl?: string | null;
        instructorId?: string | null;
        instructorName?: string | null;
        categoryName?: string | null;
        subcategoryName?: string | null;
        images?: { thumb: string };
    };
    sections?: Section[];
}) {
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
	const { data: session } = useSession();
	const studentId = session?.user?.id;
	const addToCart = useCartStore((s) => s.addToCart);
	const isInCart = useIsInCart(course?.id || "");
	const { enrolledIds } = useEnrolledCourses(studentId);
	const alreadyEnrolled = !!(course?.id && enrolledIds.includes(Number(course.id)));
	const router = useRouter();

	const lessonsCount = useMemo(() => {
		if (!sections) return 0;
		return sections.reduce((sum, s) => sum + (s.lessons?.length || 0), 0);
	}, [sections]);

	const handleBuyNow = () => {
		if (!course) return;
		if (isInCart || alreadyEnrolled) return;
		addToCart({
			id: course.id,
			image: course.images?.thumb || "/images/courses/courses1.jpg",
			title: course.title,
			slug: course.slug,
			price: course.price,
		});
		router.push("/cart");
	};

	const addBtnStateClass = alreadyEnrolled ? "is-enrolled" : isInCart ? "is-added" : "";
	const addBtnColor = alreadyEnrolled ? "#42B9A8" : isInCart ? "#FFAB31" : undefined;
	const instructorHref = course?.instructorId
		? `/instructor/${course.instructorId}`
		: null;

	return (
		<>
			<div className="col-lg-4 col-md-12">
				<div className="course-details-sidebar">
					<div className="c-image">
						<Image
							src={course?.thumbnailUrl || "/images/courses/courses42.jpg"}
							alt="image"
							width={1100}
							height={750}
							priority
						/>
						<button
							type="button"
							className="video-btn border-0"
							onClick={() =>
								openVideo(
									course?.promoVideoUrl ||
										"https://youtu.be/PWvPbGWVRrU?si=_4kQId3sf7QOjmWc"
								)
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								viewBox="0 0 24 24"
							>
								<path
									fill="none"
									stroke="#fff"
									strokeWidth="1.5"
									d="M20.409 9.353a2.998 2.998 0 0 1 0 5.294L7.597 21.614C5.534 22.737 3 21.277 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
								/>
							</svg>
						</button>
					</div>

					<div className="c-content">
						<h3>Course Essentials</h3>

						<ul className="list">
							<li>
								<div className="left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											opacity="0.5"
											d="M4.72787 16.1368C3.18287 14.5908 2.40987 13.8188 2.12287 12.8158C1.83487 11.8128 2.08087 10.7478 2.57287 8.61876L2.85587 7.39076C3.26887 5.59876 3.47587 4.70276 4.08887 4.08876C4.70187 3.47476 5.59887 3.26876 7.39087 2.85576L8.61887 2.57176C10.7489 2.08076 11.8129 1.83476 12.8159 2.12176C13.8189 2.40976 14.5909 3.18276 16.1359 4.72776L17.9659 6.55776C20.6569 9.24776 21.9999 10.5918 21.9999 12.2618C21.9999 13.9328 20.6559 15.2768 17.9669 17.9658C15.2769 20.6558 13.9329 21.9998 12.2619 21.9998C10.5919 21.9998 9.24687 20.6558 6.55787 17.9668L4.72787 16.1368Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											d="M15.3923 15.39C15.9773 14.803 16.0563 13.933 15.5683 13.444C15.0803 12.955 14.2093 13.035 13.6233 13.621C13.0383 14.207 12.1673 14.286 11.6793 13.798C11.1913 13.31 11.2703 12.439 11.8563 11.854M11.8563 11.854L11.5023 11.5M11.8563 11.854C12.1873 11.522 12.6093 11.354 13.0023 11.357M15.7453 15.743L15.3913 15.389C14.9913 15.79 14.4563 15.954 14.0023 15.86"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M10.0239 10.2931C10.8049 9.51207 10.8049 8.24574 10.0239 7.46469C9.24284 6.68364 7.97651 6.68364 7.19546 7.46469C6.41442 8.24574 6.41441 9.51207 7.19546 10.2931C7.97651 11.0742 9.24284 11.0742 10.0239 10.2931Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
									</svg>
									<span>Price</span>
								</div>
									<div className="right">
										<div className="price">${typeof course?.price === "number" ? course?.price : course?.price ?? "--"}</div>
									</div>
								</li>

							<li>
								<div className="left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											opacity="0.5"
											d="M20 17.5C20 19.985 20 22 12 22C4 22 4 19.985 4 17.5C4 15.015 7.582 13 12 13C16.418 13 20 15.015 20 17.5Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
									</svg>
									<span>Instructor</span>
								</div>
								<div className="right">
									<span>
										{instructorHref ? (
											<Link href={instructorHref}>
												{course?.instructorName || "Instructor"}
											</Link>
										) : (
											<span>{course?.instructorName || "Instructor"}</span>
										)}
									</span>
								</div>
							</li>

							<li>
								<div className="left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											opacity="0.5"
											d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											d="M12 8V12L14.5 14.5"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span>Duration</span>
								</div>
								<div className="right">
									<span>Self-paced</span>
								</div>
							</li>

							<li>
								<div className="left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M4 8C4 5.172 4 3.757 4.879 2.879C5.757 2 7.172 2 10 2H14C16.828 2 18.243 2 19.121 2.879C20 3.757 20 5.172 20 8V16C20 18.828 20 20.243 19.121 21.121C18.243 22 16.828 22 14 22H10C7.172 22 5.757 22 4.879 21.121C4 20.243 4 18.828 4 16V8Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											d="M19.898 16H7.898C6.968 16 6.503 16 6.121 16.102C5.61231 16.2384 5.14849 16.5063 4.77618 16.8788C4.40386 17.2513 4.13616 17.7152 4 18.224"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											opacity="0.5"
											d="M8 7H16M8 10.5H13M19.5 19H8"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
									<span>Lessons</span>
								</div>
								<div className="right">
									<span>{lessonsCount}</span>
								</div>
							</li>

							<li>
								<div className="left">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M12 22C17.5228 22 22 17.5229 22 12C22 6.47715 17.5228 2 12 2C6.47714 2 2 6.47715 2 12C2 17.5229 6.47714 22 12 22Z" stroke="#1C43FE" strokeWidth="1.5"/>
										<path d="M7 12H17" stroke="#1C43FE" strokeWidth="1.5" strokeLinecap="round"/>
									</svg>
									<span>Category</span>
								</div>
								<div className="right">
									<span>{course?.categoryName || "--"}</span>
								</div>
							</li>

							<li>
								<div className="left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											opacity="0.5"
											d="M22 12H2M12 2V22"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M13 12C13 13.0609 13.4214 14.0783 14.1716 14.8284C14.9217 15.5786 15.9391 16 17 16M11 12C11 13.0609 10.5786 14.0783 9.82843 14.8284C9.07828 15.5786 8.06087 16 7 16"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M11.9988 10.035C11.9994 9.31093 12.2417 8.60779 12.6873 8.03714C13.133 7.46648 13.7564 7.06099 14.4588 6.88498C16.0618 6.48498 17.5148 7.93698 17.1138 9.54098C16.9378 10.2433 16.5323 10.8668 15.9616 11.3124C15.391 11.7581 14.6878 12.0004 13.9638 12.001H11.9988M11.9988 10.035V12.001M11.9988 10.035C11.9982 9.31093 11.7559 8.60779 11.3102 8.03714C10.8646 7.46648 10.2411 7.06099 9.53879 6.88498C7.93579 6.48498 6.48279 7.93698 6.88379 9.54098C7.05979 10.2433 7.46529 10.8668 8.03594 11.3124C8.6066 11.7581 9.30973 12.0004 10.0338 12.001H11.9988"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											d="M2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C22 4.93 22 7.286 22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
									</svg>
									<span>Certificate</span>
								</div>
								<div className="right">
									<span>{course?.isCertificate ? "Yes" : "No"}</span>
								</div>
							</li>

							<li>
								<div className="left">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											opacity="0.5"
											d="M2 12H22M16 12C16 13.313 15.896 14.614 15.695 15.827C15.495 17.04 15.2 18.142 14.828 19.071C14.457 20 14.016 20.736 13.531 21.239C13.045 21.741 12.525 22 12 22C11.475 22 10.955 21.741 10.47 21.239C9.984 20.736 9.543 19.999 9.172 19.071C8.8 18.142 8.505 17.041 8.304 15.827C8.09891 14.5617 7.99724 13.2818 8 12C8 10.687 8.103 9.386 8.304 8.173C8.505 6.96 8.8 5.858 9.172 4.929C9.543 4 9.984 3.264 10.469 2.761C10.955 2.26 11.475 2 12 2C12.525 2 13.045 2.259 13.53 2.761C14.016 3.264 14.457 4.001 14.828 4.929C15.2 5.858 15.495 6.959 15.695 8.173C15.897 9.386 16 10.687 16 12Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M22.001 12C22.001 13.3133 21.7423 14.6137 21.2398 15.827C20.7372 17.0404 20.0006 18.1428 19.0719 19.0714C18.1433 20.0001 17.0408 20.7367 15.8275 21.2393C14.6142 21.7418 13.3138 22.0005 12.0005 22.0005C10.6872 22.0005 9.38679 21.7418 8.17347 21.2393C6.96016 20.7367 5.85771 20.0001 4.92908 19.0714C4.00045 18.1428 3.26381 17.0404 2.76124 15.827C2.25867 14.6137 2 13.3133 2 12C2 9.34771 3.05362 6.80405 4.92908 4.92859C6.80454 3.05313 9.3482 1.99951 12.0005 1.99951C14.6528 1.99951 17.1965 3.05313 19.0719 4.92859C20.9474 6.80405 22.001 9.34771 22.001 12Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
									</svg>
									<span>Language</span>
								</div>
								<div className="right">
									<span>{course?.language || "English"}</span>
								</div>
							</li>
						</ul>

						<ul className="btn-list">
							<li>One-time payment, lifetime access</li>
							<li>
								{course && (
									<AddToCartButton course={{
										id: course.id,
										title: course.title,
										slug: course.slug,
										price: course.price,
										images: { thumb: course.images?.thumb || "/images/courses/courses1.jpg" }
									}} studentId={studentId} />
								)}
							</li>
							<li>
                        {alreadyEnrolled ? (
                            <Link
                                href={course ? `/learn/${course.id}` : "/learn"}
                                className={`default-btn ${addBtnStateClass}`.trim()}
                                style={addBtnColor ? { backgroundColor: addBtnColor } : undefined}
                            >
                                Learn
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="18"
                                    viewBox="0 0 21 18"
                                    fill="none"
                                >
                                    <path
                                        d="M4.27216 1.92119C3.16114 2.84237 2.8694 4.402 2.28392 7.51924C1.46165 11.9054 1.05101 14.0974 2.24995 15.5422C3.44889 16.9859 5.67892 16.9859 10.14 16.9859H10.8613C15.3224 16.9859 17.5534 16.9859 18.7514 15.5422C19.9503 14.0974 19.5377 11.9054 18.7164 7.51924C18.1309 4.402 17.8392 2.84237 16.7282 1.92119M16.7302 1.92119C15.6201 1 14.0335 1 10.8603 1H10.139C6.96678 1 5.38019 1 4.27017 1.92119"
                                        stroke="#1C43FE"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        opacity="0.5"
                                        d="M7.67188 4.99658C7.87829 5.5816 8.26109 6.08819 8.76751 6.44651C9.27392 6.80484 9.87901 6.99727 10.4994 6.99727C11.1197 6.99727 11.7248 6.80484 12.2312 6.44651C12.7377 6.08819 13.1205 5.5816 13.3269 4.99658"
                                        stroke="#1C43FE"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </Link>
                        ) : (
                            <button
                                className={`default-btn ${addBtnStateClass}`.trim()}
                                onClick={handleBuyNow}
                                disabled={isInCart || !course}
                                style={addBtnColor ? { backgroundColor: addBtnColor } : undefined}
                            >
                                {isInCart ? "Added" : "Buy Now"}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="18"
                                    viewBox="0 0 21 18"
                                    fill="none"
                                >
                                    <path
											d="M4.27216 1.92119C3.16114 2.84237 2.8694 4.402 2.28392 7.51924C1.46165 11.9054 1.05101 14.0974 2.24995 15.5422C3.44889 16.9859 5.67892 16.9859 10.14 16.9859H10.8613C15.3224 16.9859 17.5534 16.9859 18.7514 15.5422C19.9503 14.0974 19.5377 11.9054 18.7164 7.51924C18.1309 4.402 17.8392 2.84237 16.7282 1.92119M16.7302 1.92119C15.6201 1 14.0335 1 10.8603 1H10.139C6.96678 1 5.38019 1 4.27017 1.92119"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											opacity="0.5"
											d="M7.67188 4.99658C7.87829 5.5816 8.26109 6.08819 8.76751 6.44651C9.27392 6.80484 9.87901 6.99727 10.4994 6.99727C11.1197 6.99727 11.7248 6.80484 12.2312 6.44651C12.7377 6.08819 13.1205 5.5816 13.3269 4.99658"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
                                </svg>
                            </button>
                        )}
							</li>
						</ul>

						<div className="share-info">
							<h4>Share this Course</h4>
							<ul className="social-list">
								<li>
									<Link
										href="https://www.facebook.com/"
										target="_blank"
									>
										<i className="ri-facebook-fill" />
									</Link>
								</li>
								<li>
									<Link
										href="https://www.linkedin.com/"
										target="_blank"
									>
										<i className="ri-linkedin-fill" />
									</Link>
								</li>
								<li>
									<Link
										href="https://www.instagram.com/"
										target="_blank"
									>
										<i className="ri-instagram-fill" />
									</Link>
								</li>
								<li>
									<Link href="https://x.com/" target="_blank">
										<i className="ri-twitter-x-fill" />
									</Link>
								</li>
							</ul>
						</div>
					</div>
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
}
