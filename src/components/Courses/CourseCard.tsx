"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import FavoriteButton from "../FavoriteButton";
import AddToCartButton from "../Cart/AddToCartButton";
import { useSession } from "next-auth/react";

type Course = {
	id: string;
	title: string;
	slug: string;
	price: number | string;
	rating: number;
	reviewsCount: number;
	lessons: number;
	learners: number;
	level?: string | null;
	images: { thumb: string };
	badge?: string | null;
	isFavorited?: boolean;
	favoritesCount?: number;
};

type Props = {
	course: Course;
};

function formatNumber(n?: number) {
	if (!n && n !== 0) return "0";
	return n.toLocaleString();
}

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
} as const;

const fadeUpDelayed = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: "easeOut", delay: 0.08 },
	},
} as const;

export default function CourseCard({ course }: Props) {
	const { data: session } = useSession();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	const detailsHref = `/course/${course.slug}`;
	const listingHref = "/courses";
	const thumb = course.images?.thumb ?? "/images/courses/courses1.jpg";
	const vector = "/images/courses/vector.png";
	const tagClass = `tag-btn wrap4`;

	const rating = Math.max(0, Math.min(5, Number(course.rating ?? 0)));
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating - fullStars >= 0.5 && fullStars < 5;

    const renderStars = () => {
        // Always render 5 icons. Fill/half based on rating; empty otherwise.
        return Array.from({ length: 5 }, (_, i) => {
            const pos = i + 1;
            let icon = "ri-star-line"; // empty
            let color = "#D1D5DB"; // neutral grey for empty
            if (pos <= fullStars) {
                icon = "ri-star-fill";
                color = "#FFAB31"; // yellow for filled
            } else if (pos === fullStars + 1 && hasHalfStar) {
                icon = "ri-star-half-fill";
                color = "#FFAB31"; // yellow for half
            }
            return (
                <li key={`star-${i}`}>
                    <i className={icon} style={{ color }}></i>
                </li>
            );
        });
    };

	return (
		<motion.div
			className="courses-show-hide-style"
			variants={fadeUp}
			initial={mounted ? "hidden" : false}
			whileInView="show"
			viewport={{ once: true, amount: 0.01 }}
		>
			<motion.div
				className="education-courses-card wrap-bg"
				whileHover={{ y: -4 }}
				transition={{ type: "spring", stiffness: 260, damping: 18 }}
			>
				<motion.div
					className="image"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.2 }}
				>
					<Link href={detailsHref}>
						<Image
							src={thumb}
							alt="image"
							width={1170}
							height={750}
						/>
					</Link>
					<Link href={listingHref} className={tagClass}>
						{course.badge ?? "Best Rated"}
					</Link>
					<div className="vector">
						<Image
							src={vector}
							alt="image"
							width={1060}
							height={163}
						/>
					</div>
				</motion.div>
				<div className="content">
					<h3>
						<Link href={detailsHref}>{course.title}</Link>
					</h3>
					<ul className="info-rating">
						<li>
							<b>{rating.toFixed(1)}</b>
						</li>
						{renderStars()}
						<li>
							<span>
								({formatNumber(course.reviewsCount)} Reviews)
							</span>
						</li>
					</ul>
					<div className="price">${course.price}</div>
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
							<span>{formatNumber(course.lessons)} Lessons</span>
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
							<span>
								{formatNumber(course.learners)} Learners
							</span>
						</li>
					</ul>
				</div>
			</motion.div>

			<motion.div
				className="education-courses-hover-card wrap-bg"
				variants={fadeUpDelayed}
				initial={mounted ? "hidden" : false}
				whileInView="show"
				viewport={{ once: true, amount: 0.01 }}
				whileHover={{ y: -4 }}
				transition={{ type: "spring", stiffness: 260, damping: 18 }}
			>
				<motion.div
					className="image"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.2 }}
				>
					<Link href={detailsHref}>
						<Image
							src={thumb}
							alt="image"
							width={1100}
							height={750}
						/>
					</Link>
					<Link href={listingHref} className={tagClass}>
						{course.badge ?? "Best Rated"}
					</Link>
					<div className="vector">
						<Image
							src={vector}
							alt="image"
							width={1060}
							height={163}
						/>
					</div>
				</motion.div>
				<div className="content">
					<h3>
						<Link href={detailsHref}>{course.title}</Link>
					</h3>
					<p>
						Use tools like matplotlib, seaborn, and plotly to create
						clear, interactive, and beautiful charts and dashboards.
					</p>
					<ul className="info-rating">
						<li>
							<b>{rating.toFixed(1)}</b>
						</li>
						{renderStars()}
						<li>
							<span>
								({formatNumber(course.reviewsCount)} Reviews)
							</span>
						</li>
					</ul>
					<div className="price">${course.price}</div>
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
							<span>{formatNumber(course.lessons)} Lessons</span>
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
							<span>
								{formatNumber(course.learners)} Learners
							</span>
						</li>
					</ul>
					<ul className="info-bottom">
						<li>
							<AddToCartButton
								course={course}
								studentId={session?.user?.id}
							/>
						</li>
						<li>
							<FavoriteButton
								courseId={course.id}
								initialFavorited={course.isFavorited ?? false}
							/>
						</li>
					</ul>
				</div>
			</motion.div>
		</motion.div>
	);
}
