export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import LearnClient from "@/components/Learn/LearnClient";

type Params = { courseId: string };

export default async function LearnCoursePage({
	params,
}: {
	params: Promise<Params>;
}) {
	const user = await requireUser();
	const { courseId: courseIdParam } = await params;
	const courseId = Number(courseIdParam);
	if (!Number.isFinite(courseId)) notFound();

	const enrollment = await prisma.enrollment.findUnique({
		where: { courseId_studentId: { courseId, studentId: user.id } },
		include: {
			Certificate: true,
			course: {
				select: {
					id: true,
					slug: true,
					title: true,
					sections: {
						orderBy: { order: "asc" },
						select: {
							id: true,
							title: true,
							order: true,
							lessons: {
								orderBy: { id: "asc" },
								select: {
									id: true,
									title: true,
									duration: true,
									isPreview: true,
									videoUrl: true, // IMPORTANT for the player
								},
							},
						},
					},
				},
			},
		},
	});

	if (!enrollment) {
		return (
			<div className="container py-5">
				<h1 className="h3 mb-3">Access denied</h1>
				<p className="text-muted">
					You aren’t enrolled in this course.
				</p>
				<div className="mt-3">
					<Link
						href="/dashboard/enrollments"
						className="btn btn-primary"
					>
						Back to Enrollments
					</Link>
				</div>
			</div>
		);
	}

	const progress = Math.max(0, Math.min(100, enrollment.progress ?? 0));
	const course = enrollment.course;
	const canIssueCertificate = progress >= 100;
	// Pull all lesson progress for this enrollment
	const lp = await prisma.lessonProgress.findMany({
		where: { enrollmentId: enrollment.id },
		select: { lessonId: true, status: true },
	});
	const lpMap = new Map(lp.map((p) => [p.lessonId, p.status]));

	// Re-map sections/lessons to include a single progressStatus field per lesson
	const sections = course.sections.map((sec) => ({
		id: sec.id,
		title: sec.title,
		order: sec.order,
		lessons: sec.lessons.map((l: any) => ({
			id: l.id,
			title: l.title,
			duration: l.duration,
			isPreview: l.isPreview,
			videoUrl: l.videoUrl,
			progressStatus: (lpMap.get(l.id) ?? "NOT_STARTED") as
				| "NOT_STARTED"
				| "IN_PROGRESS"
				| "COMPLETED",
		})),
	}));

	return (
		<div className="container py-5">
			{/* Header */}
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1 className="h3 mb-0">{course.title}</h1>
				<Link
					href="/dashboard/enrollments"
					className="btn btn-link p-0"
				>
					Back to Enrollments
				</Link>
			</div>

			{/* Progress */}
			<div className="mb-4">
				<div className="d-flex justify-content-between align-items-center mb-1">
					<span className="small text-muted">Overall Progress</span>
					<span className="small fw-medium">{progress}%</span>
				</div>
				<div
					className="progress"
					role="progressbar"
					aria-valuemin={0}
					aria-valuemax={100}
					aria-valuenow={progress}
				>
					<div
						className="progress-bar"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			{/* Client-side interactivity */}
			<LearnClient
				courseId={course.id}
				courseSlug={course.slug}
				sections={sections}
				canIssueCertificate={canIssueCertificate}
				hasCertificate={!!enrollment.Certificate}
				certificateId={enrollment.Certificate?.id ?? null}
				certificateNo={enrollment.Certificate?.certificateNo || null}
			/>
		</div>
	);
}
