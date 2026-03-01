import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Banner from "@/components/Common/Banner";
import { prisma } from "@/lib/prisma";

const DEFAULT_AVATAR = "/images/courses/user1.png";
const DEFAULT_THUMB = "/images/courses/placeholder.jpg";
const VECTOR_IMG = "/images/courses/vector.png";

type Params = Promise<{ id: string }>;

type InstructorSummary = {
	id: string;
	name: string;
	email: string;
	avatarUrl: string | null;
	position: string | null;
	institute: string | null;
	experience: number | null;
	languages: string[];
	description: string | null;
	createdAt: Date;
};

type InstructorCourse = {
	id: string;
	title: string;
	slug: string;
	price: number;
	rating: number;
	reviewsCount: number;
	lessons: number;
	learners: number;
	thumbnailUrl: string | null;
	shortDescription: string | null;
};

type InstructorDetails = {
	summary: InstructorSummary;
	totals: {
		courses: number;
		learners: number;
		reviews: number;
		averageRating: number;
	};
	courses: InstructorCourse[];
};

function normalizeLanguages(value: unknown): string[] {
	if (!value) return [];
	if (Array.isArray(value)) {
		return value
			.map((item) =>
				typeof item === "string"
					? item.trim()
					: String(item ?? "").trim()
			)
			.filter(Boolean);
	}
	if (typeof value === "string") {
		return value
			.split(",")
			.map((item) => item.trim())
			.filter(Boolean);
	}
	return [];
}

async function getInstructorDetails(
	id: string
): Promise<InstructorDetails | null> {
	const instructor = await prisma.user.findUnique({
		where: { id },
		select: {
			id: true,
			name: true,
			email: true,
			avatarUrl: true,
			position: true,
			institute: true,
			experience: true,
			languages: true,
			description: true,
			createdAt: true,
		},
	});

	if (!instructor) return null;

	const topCoursesRaw = await prisma.course.findMany({
		where: { instructorId: id, status: "PUBLISHED" },
		orderBy: { createdAt: "desc" },
		take: 3,
		select: {
			id: true,
			title: true,
			slug: true,
			price: true,
			thumbnailUrl: true,
			shortDescription: true,
			sections: { select: { _count: { select: { lessons: true } } } },
			_count: { select: { enrollments: true } },
		},
	});

	const courseIds = topCoursesRaw.map((course) => course.id);

	const [ratingSummary, totalCourses, totalLearners, courseRatings] =
		await Promise.all([
			prisma.review.aggregate({
				where: { course: { instructorId: id } },
				_avg: { rating: true },
				_count: { _all: true },
			}),
			prisma.course.count({ where: { instructorId: id } }),
			prisma.enrollment.count({
				where: { course: { instructorId: id } },
			}),
			courseIds.length
				? prisma.review.groupBy({
						by: ["courseId"],
						where: { courseId: { in: courseIds } },
						_avg: { rating: true },
						_count: { _all: true },
				  })
				: Promise.resolve([]),
		]);

	const ratingMap = new Map<number, { avg: number; count: number }>();
	for (const row of courseRatings) {
		ratingMap.set(row.courseId, {
			avg: row._avg.rating ?? 0,
			count: row._count._all ?? 0,
		});
	}

	const courses: InstructorCourse[] = topCoursesRaw.map((course) => {
		const lessons = course.sections.reduce((sum, section) => {
			return sum + (section._count.lessons ?? 0);
		}, 0);
		const rating = ratingMap.get(course.id) ?? { avg: 0, count: 0 };

		return {
			id: String(course.id),
			title: course.title,
			slug: course.slug,
			price: Number(course.price),
			rating: Number((rating.avg ?? 0).toFixed(1)),
			reviewsCount: rating.count,
			lessons,
			learners: course._count.enrollments,
			thumbnailUrl: course.thumbnailUrl,
			shortDescription: course.shortDescription,
		};
	});

	return {
		summary: {
			id: instructor.id,
			name: instructor.name,
			email: instructor.email,
			avatarUrl: instructor.avatarUrl,
			position: instructor.position,
			institute: instructor.institute,
			experience: instructor.experience,
			languages: normalizeLanguages(instructor.languages),
			description: instructor.description,
			createdAt: instructor.createdAt,
		},
		totals: {
			courses: totalCourses,
			learners: totalLearners,
			reviews: ratingSummary._count?._all ?? 0,
			averageRating: Number((ratingSummary._avg?.rating ?? 0).toFixed(1)),
		},
		courses,
	};
}

function renderStars(rating: number) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating - fullStars >= 0.5;

	return Array.from({ length: 5 }, (_, index) => {
		const position = index + 1;
		let icon = "ri-star-line";
		if (position <= fullStars) {
			icon = "ri-star-fill";
		} else if (position === fullStars + 1 && hasHalfStar) {
			icon = "ri-star-half-fill";
		}
		return (
			<li key={`${icon}-${position}`}>
				<i className={icon} />
			</li>
		);
	});
}

function formatNumber(value: number) {
	return Number.isFinite(value) ? value.toLocaleString() : "0";
}

function formatLessons(count: number) {
	if (!Number.isFinite(count)) return "0 Lessons";
	return `${count} Lesson${count === 1 ? "" : "s"}`;
}

export default async function InstructorPage({ params }: { params: Params }) {
	const { id } = await params;
	const details = await getInstructorDetails(id);

	if (!details) notFound();

	const { summary, totals, courses } = details;
	const joinedAt = summary.createdAt.toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	return (
		<>
			<Banner
				title="Learn with Confidence from a Top-Rated Instructor"
				crumbs={[
					{ label: "Home", href: "/" },
					{
						label: "Instructor Details",
						href: "/instructor-details",
					},
					{ label: summary.name },
				]}
			/>

			<section className="instructor-details-area ptb-140">
				<div className="container">
					<div
						className="row justify-content-center g-4"
						data-cues="slideInUp"
						data-duration="1000"
					>
						<div className="col-lg-4 col-md-5">
							<div className="instructor-details-image">
								<Image
									src={summary.avatarUrl || DEFAULT_AVATAR}
									alt={summary.name}
									width={610}
									height={610}
									className="w-100 h-auto"
									style={{
										objectFit: "cover",
										borderRadius: "20px",
									}}
									priority
								/>
								<div className="share-btn">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
									>
										<path
											d="M9 11.5C9 12.163 8.73661 12.7989 8.26777 13.2678C7.79893 13.7366 7.16304 14 6.5 14C5.83696 14 5.20107 13.7366 4.73223 13.2678C4.26339 12.7989 4 12.163 4 11.5C4 10.837 4.26339 10.2011 4.73223 9.73223C5.20107 9.26339 5.83696 9 6.5 9C7.16304 9 7.79893 9.26339 8.26777 9.73223C8.73661 10.2011 9 10.837 9 11.5Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
										<path
											opacity="0.5"
											d="M14.32 16.8018L9 13.2898M14.42 6.83984L9.1 10.3518"
											stroke="#1C43FE"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M19 18.5C19 19.163 18.7366 19.7989 18.2678 20.2678C17.7989 20.7366 17.163 21 16.5 21C15.837 21 15.2011 20.7366 14.7322 20.2678C14.2634 19.7989 14 19.163 14 18.5C14 17.837 14.2634 17.2011 14.7322 16.7322C15.2011 16.2634 15.837 16 16.5 16C17.163 16 17.7989 16.2634 18.2678 16.7322C18.7366 17.2011 19 17.837 19 18.5ZM19 5.5C19 6.16304 18.7366 6.79893 18.2678 7.26777C17.7989 7.73661 17.163 8 16.5 8C15.837 8 15.2011 7.73661 14.7322 7.26777C14.2634 6.79893 14 6.16304 14 5.5C14 4.83696 14.2634 4.20107 14.7322 3.73223C15.2011 3.26339 15.837 3 16.5 3C17.163 3 17.7989 3.26339 18.2678 3.73223C18.7366 4.20107 19 4.83696 19 5.5Z"
											stroke="#1C43FE"
											strokeWidth="1.5"
										/>
									</svg>
									<ul className="list">
										<li>
											<a
												href="https://www.facebook.com/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="ri-facebook-fill" />
											</a>
										</li>
										<li>
											<a
												href="https://www.linkedin.com/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="ri-linkedin-fill" />
											</a>
										</li>
										<li>
											<a
												href="https://github.com/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="ri-github-fill" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-8 col-md-7">
							<div className="instructor-details-content">
								<h3>{summary.name}</h3>
								{summary.position ? (
									<span className="sub">
										{summary.position}
									</span>
								) : null}

								<ul className="info-rating">
									<li>
										<b>{totals.averageRating.toFixed(1)}</b>
									</li>
									{renderStars(totals.averageRating)}
									<li>
										<span>
											({formatNumber(totals.reviews)}{" "}
											Reviews)
										</span>
									</li>
								</ul>

								<ul className="info-list">
									<li>
										<span>Institute:</span>
										<b>
											{summary.institute ||
												"Not provided"}
										</b>
									</li>
									<li>
										<span>Experience:</span>
										<b>
											{typeof summary.experience ===
											"number"
												? `${summary.experience} year${
														summary.experience === 1
															? ""
															: "s"
												  }`
												: "Not provided"}
										</b>
									</li>
									<li>
										<span>Languages:</span>
										<b>
											{summary.languages.length
												? summary.languages.join(", ")
												: "Not provided"}
										</b>
									</li>
									<li>
										<span>Courses Published:</span>
										<b>{formatNumber(totals.courses)}</b>
									</li>

									<li>
										<span>Total Learners:</span>
										<b>{formatNumber(totals.learners)}</b>
									</li>

									<div className="content">
										<h3>
											About {summary.name.split(" ")[0]}
										</h3>
										<p>
											{summary.description ||
												"This instructor hasn’t added a bio yet. Check back soon for more about their teaching journey."}
										</p>
									</div>
									<div className="content">
										<li>
											<span>Member Since:</span>
											<b>{joinedAt}</b>
										</li>
										<li>
											<span>Contact:</span>
											<b>
												<Link
													href={`mailto:${summary.email}`}
												>
													{summary.email}
												</Link>
											</b>
										</li>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="dl-courses-area wrap-bg-style ptb-140">
				<div className="container">
					<h3 className="courses-author-title">
						Popular Courses by <span>{summary.name}</span>
					</h3>

					<div
						className="row justify-content-center g-4"
						data-cues="slideInUp"
						data-duration="1000"
					>
						{courses.length === 0 ? (
							<div className="col-12">
								<p className="text-muted mb-0">
									No published courses yet. When{" "}
									{summary.name.split(" ")[0]} publishes new
									courses, they will appear here.
								</p>
							</div>
						) : (
							courses.map((course) => {
								const rating = Math.max(
									0,
									Math.min(5, course.rating)
								);
								const courseThumb =
									course.thumbnailUrl || DEFAULT_THUMB;
								const courseLink = `/course/${course.slug}`;

								return (
									<div
										className="col-xl-4 col-md-6"
										key={course.id}
									>
										<div className="dl-courses-show-hide-style">
											<div className="dl-courses-card">
												<div className="image">
													<Link href={courseLink}>
														<Image
															src={courseThumb}
															alt={course.title}
															width={1100}
															height={750}
														/>
													</Link>
													<Link
														href="/courses"
														className="tag-btn"
													>
														Popular Course
													</Link>
													<div className="vector">
														<Image
															src={VECTOR_IMG}
															alt="vector"
															width={1060}
															height={163}
														/>
													</div>
												</div>
												<div className="content">
													<h3>
														<Link href={courseLink}>
															{course.title}
														</Link>
													</h3>
													<div className="profile-btn">
														<Image
															src={
																summary.avatarUrl ||
																DEFAULT_AVATAR
															}
															className="rounded-circle"
															alt="Instructor avatar"
															width={26}
															height={26}
														/>
														<Link
															href={`/instructor/${summary.id}`}
														>
															{summary.name}
														</Link>
													</div>
													<div className="info-rating">
														<ul className="rating">
															<li>
																<b>
																	{rating.toFixed(
																		1
																	)}
																</b>
															</li>
															{renderStars(
																rating
															)}
														</ul>
														<span>
															(
															{formatNumber(
																course.reviewsCount
															)}{" "}
															Reviews)
														</span>
													</div>
													<div className="price">
														$
														{course.price.toFixed(
															2
														)}
													</div>
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
															<span>
																{formatLessons(
																	course.lessons
																)}
															</span>
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
																{formatNumber(
																	course.learners
																)}{" "}
																Learners
															</span>
														</li>
													</ul>
												</div>
											</div>

											<div className="dl-courses-hover-card">
												<div className="image">
													<Link href={courseLink}>
														<Image
															src={courseThumb}
															alt={course.title}
															width={1100}
															height={750}
														/>
													</Link>
													<Link
														href="/courses"
														className="tag-btn"
													>
														Popular Course
													</Link>
													<div className="vector">
														<Image
															src={VECTOR_IMG}
															alt="vector"
															width={1060}
															height={163}
														/>
													</div>
												</div>
												<div className="content">
													<h3>
														<Link href={courseLink}>
															{course.title}
														</Link>
													</h3>
													<div className="profile-btn">
														<Image
															src={
																summary.avatarUrl ||
																DEFAULT_AVATAR
															}
															className="rounded-circle"
															alt="Instructor avatar"
															width={26}
															height={26}
														/>
														<Link
															href={`/instructor/${summary.id}`}
														>
															{summary.name}
														</Link>
													</div>
													<p>
														{course.shortDescription ||
															"Join thousands of learners and explore practical lessons designed by this instructor."}
													</p>
													<div className="info-rating">
														<ul className="rating">
															<li>
																<b>
																	{rating.toFixed(
																		1
																	)}
																</b>
															</li>
															{renderStars(
																rating
															)}
														</ul>
														<span>
															(
															{formatNumber(
																course.reviewsCount
															)}{" "}
															Reviews)
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>
		</>
	);
}
