import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

async function recalcEnrollmentProgress(
	enrollmentId: number,
	courseId: number,
	now: Date
) {
	const [lessons, progressRows] = await Promise.all([
		prisma.lesson.findMany({
			where: { section: { courseId } },
			select: { id: true },
		}),
		prisma.lessonProgress.findMany({
			where: { enrollmentId },
			select: { lessonId: true, status: true },
		}),
	]);

	const totalLessons = lessons.length;
	let progressPct = 0;
	let completionStatus: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" =
		"NOT_STARTED";

	if (totalLessons > 0) {
		const lessonIds = new Set(lessons.map((l) => l.id));
		let completedCount = 0;
		for (const row of progressRows) {
			if (row.status === "COMPLETED" && lessonIds.has(row.lessonId)) {
				completedCount += 1;
			}
		}

		progressPct = Math.round((completedCount / totalLessons) * 100);
		if (progressPct >= 100) {
			progressPct = 100;
			completionStatus = "COMPLETED";
		} else if (progressPct > 0) {
			completionStatus = "IN_PROGRESS";
		}
	}

	if (
		completionStatus !== "COMPLETED" &&
		progressRows.some((row) => row.status !== "NOT_STARTED")
	) {
		completionStatus = "IN_PROGRESS";
	}

	await prisma.enrollment.update({
		where: { id: enrollmentId },
		data: {
			progress: progressPct,
			completionStatus,
			lastActivityAt: now,
			...(completionStatus === "COMPLETED"
				? { completedAt: now }
				: { completedAt: null }),
		},
	});
}

type Body = {
	courseId?: number;
	lessonId?: number;
	event?: "START" | "PROGRESS" | "COMPLETE";
	positionSec?: number; // current position in seconds
	deltaWatchedSec?: number; // amount of newly watched seconds to accumulate
};

export async function POST(req: Request) {
	try {
		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);
		const body = (await req.json()) as Body;

		const courseId = Number(body.courseId);
		const lessonId = Number(body.lessonId);
		const event = body.event ?? "START";
		const now = new Date();

		if (!Number.isFinite(courseId) || !Number.isFinite(lessonId)) {
			return NextResponse.json(
				{ error: "Invalid courseId or lessonId" },
				{ status: 400 }
			);
		}

		const enrollment = await prisma.enrollment.findUnique({
			where: { courseId_studentId: { courseId, studentId: user.id } },
			select: { id: true },
		});
		if (!enrollment) {
			return NextResponse.json(
				{ error: "Not enrolled" },
				{ status: 403 }
			);
		}

		const enrollmentId = enrollment.id;

		// Ensure a progress row exists for START; otherwise upsert as needed
		const existing = await prisma.lessonProgress.findUnique({
			where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
			select: { id: true, status: true, watchedSeconds: true },
		});

		if (event === "START") {
			const lp = await prisma.lessonProgress.upsert({
				where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
				update: {
					status:
						existing?.status === "COMPLETED"
							? "COMPLETED"
							: "IN_PROGRESS",
					lastWatchedAt: now,
					watchCount: { increment: 1 },
				},
				create: {
					enrollmentId,
					lessonId,
					status: "IN_PROGRESS",
					firstWatchedAt: now,
					lastWatchedAt: now,
					watchCount: 1,
				},
			});
			await recalcEnrollmentProgress(enrollmentId, courseId, now);
			return NextResponse.json({ ok: true, status: lp.status });
		}

		if (!existing) {
			// If we get PROGRESS/COMPLETE without START, create a row first
			await prisma.lessonProgress.create({
				data: {
					enrollmentId,
					lessonId,
					status: event === "COMPLETE" ? "COMPLETED" : "IN_PROGRESS",
					firstWatchedAt: now,
					lastWatchedAt: now,
					completedAt: event === "COMPLETE" ? now : null,
					lastPositionSec: Math.max(
						0,
						Math.floor(body.positionSec ?? 0)
					),
					watchedSeconds: Math.max(
						0,
						Math.floor(body.deltaWatchedSec ?? 0)
					),
					watchCount: 1,
				},
			});
			await recalcEnrollmentProgress(enrollmentId, courseId, now);
			return NextResponse.json({
				ok: true,
				status: event === "COMPLETE" ? "COMPLETED" : "IN_PROGRESS",
			});
		}

		if (event === "PROGRESS") {
			const delta = Math.max(0, Math.floor(body.deltaWatchedSec ?? 0));
			const pos = Math.max(0, Math.floor(body.positionSec ?? 0));
			const lp = await prisma.lessonProgress.update({
				where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
				data: {
					status:
						existing.status === "COMPLETED"
							? "COMPLETED"
							: "IN_PROGRESS",
					watchedSeconds: { increment: delta },
					lastPositionSec: pos,
					lastWatchedAt: now,
				},
				select: { status: true },
			});
			await recalcEnrollmentProgress(enrollmentId, courseId, now);
			return NextResponse.json({ ok: true, status: lp.status });
		}

		if (event === "COMPLETE") {
			const pos = Math.max(0, Math.floor(body.positionSec ?? 0));
			const lp = await prisma.lessonProgress.update({
				where: { enrollmentId_lessonId: { enrollmentId, lessonId } },
				data: {
					status: "COMPLETED",
					completedAt: now,
					lastPositionSec: pos,
					lastWatchedAt: now,
				},
				select: { status: true },
			});
			await recalcEnrollmentProgress(enrollmentId, courseId, now);
			return NextResponse.json({ ok: true, status: lp.status });
		}

		return NextResponse.json(
			{ error: "Unsupported event" },
			{ status: 400 }
		);
	} catch (err: any) {
		return NextResponse.json(
			{ error: err?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
