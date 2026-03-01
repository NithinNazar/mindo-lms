export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

export default async function InstructorDashboardPage() {
	const user = await requireUser();
	if (!(user.role === "INSTRUCTOR" || user.role === "ADMIN")) notFound();

	const now = new Date();
	const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

	const [
		coursesCount,
		lessonsCount,
		quizzesCount,
		publishedQuizzesCount,
		quizAttemptsCount,
		enrollmentsCount,
		distinctStudents,
		activeStudentsCount,
		reviewsCount,
		avgRatingAgg,
		certsCount,
		avgProgressAgg,
		recentReviews,
	] = await Promise.all([
		prisma.course.count({ where: { instructorId: user.id } }),
		prisma.lesson.count({
			where: { section: { course: { instructorId: user.id } } },
		}),
		prisma.quiz.count({ where: { course: { instructorId: user.id } } }),
		prisma.quiz.count({
			where: { course: { instructorId: user.id }, status: "PUBLISHED" },
		}),
		prisma.quizAttempt.count({
			where: { quiz: { course: { instructorId: user.id } } },
		}),
		prisma.enrollment.count({
			where: { course: { instructorId: user.id } },
		}),
		prisma.enrollment
			.groupBy({
				by: ["studentId"],
				where: { course: { instructorId: user.id } },
			})
			.then((g) => g.length),
		prisma.enrollment.count({
			where: {
				course: { instructorId: user.id },
				lastActivityAt: { gte: thirtyDaysAgo },
			},
		}),
		prisma.review.count({ where: { course: { instructorId: user.id } } }),
		prisma.review.aggregate({
			where: { course: { instructorId: user.id } },
			_avg: { rating: true },
		}),
		prisma.certificate.count({
			where: { course: { instructorId: user.id } },
		}),
		prisma.enrollment.aggregate({
			where: { course: { instructorId: user.id } },
			_avg: { progress: true },
		}),
		prisma.review.findMany({
			where: { course: { instructorId: user.id } },
			orderBy: { id: "desc" },
			take: 5,
			select: {
				id: true,
				rating: true,
				comment: true,
				createdAt: true,
				course: { select: { id: true, title: true } },
				student: { select: { name: true, email: true } },
			},
		}),
	]);

	// Approximate checkout total for this instructor: sum(course price * enrollments) for non-free courses
	const revenueGroups = await prisma.enrollment.groupBy({
		by: ["courseId"],
		_count: { _all: true },
		where: { course: { instructorId: user.id, isFree: false } },
	});
	const courseIds = revenueGroups.map((g) => g.courseId);
	const priceRows = courseIds.length
		? await prisma.course.findMany({
				where: { id: { in: courseIds } },
				select: { id: true, price: true },
		  })
		: [];
	const priceMap = new Map(priceRows.map((r) => [r.id, Number(r.price)]));
	const myCheckoutTotal = revenueGroups.reduce((sum, g) => {
		const price = priceMap.get(g.courseId) ?? 0;
		const count = (g as any)._count?._all ?? g._count ?? 0;
		return sum + price * count;
	}, 0);

	const avgRating = avgRatingAgg._avg.rating
		? Math.round(avgRatingAgg._avg.rating * 10) / 10
		: 0;
	const avgProgress = avgProgressAgg._avg.progress
		? Math.round(avgProgressAgg._avg.progress)
		: 0;

	function StatCard({
		label,
		value,
		hint,
		color = "primary",
		href,
		suffix,
		icon,
	}: {
		label: string;
		value: string | number;
		hint?: string;
		color?:
			| "primary"
			| "success"
			| "warning"
			| "info"
			| "secondary"
			| "danger";
		href?: string;
		suffix?: string;
		icon?: string; // emoji or short text icon
	}) {
		return (
			<div className="card shadow-sm h-100 border-0">
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-start">
						<div>
							<div className="text-muted small mb-1">{label}</div>
							<div className="display-6 fw-semibold">
								{value}
								{suffix ? (
									<span className="fs-6 text-muted ms-1">
										{suffix}
									</span>
								) : null}
							</div>
							{hint ? (
								<div className="small text-muted mt-1">
									{hint}
								</div>
							) : null}
						</div>
						<div
							className={`rounded-circle bg-${color}-subtle text-${color} d-inline-flex align-items-center justify-content-center`}
							style={{ width: 44, height: 44 }}
						>
							<span className="fw-bold" aria-hidden>
								{icon ?? "•"}
							</span>
						</div>
					</div>
				</div>
				{href ? (
					<div className="card-footer bg-transparent border-0 pt-0">
						<a
							href={href}
							className={`btn btn-outline-${color} btn-sm`}
						>
							View
						</a>
					</div>
				) : null}
			</div>
		);
	}

	return (
		<div className="container py-5">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1 className="h4 mb-0">Instructor Dashboard</h1>
				<Link href="/instructor/courses" className="btn btn-link p-0">
					Manage Courses
				</Link>
			</div>

			<div className="row g-3 mb-4">
				<div className="col-md-3">
					<StatCard
						label="Courses"
						value={coursesCount}
						color="primary"
						href="/instructor/courses"
						icon="📚"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Lessons"
						value={lessonsCount}
						color="info"
						href="/instructor/courses"
						icon="🎬"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Quizzes (Published)"
						value={`${publishedQuizzesCount}/${quizzesCount}`}
						color="warning"
						href="/instructor/courses"
						icon="❓"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Quiz Attempts"
						value={quizAttemptsCount}
						color="secondary"
						icon="🧪"
					/>
				</div>
			</div>

			<div className="row g-3 mb-4">
				<div className="col-md-3">
					<StatCard
						label="Participants"
						value={enrollmentsCount}
						color="success"
						hint="Total enrollments"
						icon="👥"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Active Students"
						value={activeStudentsCount}
						color="primary"
						hint="Last 30 days"
						icon="🔥"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Reviews"
						value={reviewsCount}
						color="secondary"
						href="/instructor/courses"
						icon="💬"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Avg Rating"
						value={`${avgRating.toFixed(1)} ★`}
						color="warning"
						icon="⭐"
					/>
				</div>
			</div>

			<div className="row g-3 mb-4">
				<div className="col-md-3">
					<StatCard
						label="Students"
						value={distinctStudents}
						color="info"
						href="/instructor/students"
						hint="Unique learners"
					/>
				</div>
			</div>

			<div className="row g-3 mb-4">
				<div className="col-md-3">
					<StatCard
						label="Certificates Issued"
						value={certsCount}
						color="info"
						icon="🎓"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Avg Progress"
						value={avgProgress}
						suffix="%"
						color="success"
						icon="📈"
					/>
				</div>
				<div className="col-md-3">
					<StatCard
						label="Checkout Total"
						value={`$${myCheckoutTotal.toFixed(2)}`}
						color="secondary"
						hint="Your courses"
						icon="💵"
					/>
				</div>
			</div>

			<div className="card shadow-sm">
				<div className="card-body">
					<div className="d-flex justify-content-between align-items-center mb-3">
						<h2 className="h6 mb-0">Recent Reviews</h2>
						<Link
							href="/instructor/courses"
							className="btn btn-link btn-sm p-0"
						>
							Go to Courses
						</Link>
					</div>
					{recentReviews.length === 0 ? (
						<div className="text-muted">No reviews yet.</div>
					) : (
						<ul className="list-group list-group-flush">
							{recentReviews.map((r) => (
								<li key={r.id} className="list-group-item">
									<div className="d-flex justify-content-between">
										<div className="fw-semibold">
											{r.course.title}
										</div>
										<div className="badge bg-secondary">
											{r.rating} / 5
										</div>
									</div>
									{r.comment ? (
										<div className="text-muted small mt-1">
											{r.comment}
										</div>
									) : null}
									<div className="small text-muted mt-1">
										by {r.student.name || r.student.email} •{" "}
										{new Date(
											r.createdAt
										).toLocaleDateString()}
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}
