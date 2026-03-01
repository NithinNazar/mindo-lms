import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

export async function POST(req: Request) {
	try {
		const user = await requireUser();
		const readOnlyError = demoReadOnlyError(user);
		if (readOnlyError)
			return NextResponse.json(
				{ error: readOnlyError },
				{ status: 403 }
			);
		const { quizId } = (await req.json()) as { quizId?: number };
		const id = Number(quizId);
		if (!Number.isFinite(id))
			return NextResponse.json({ error: "Bad quizId" }, { status: 400 });

		const quiz = await prisma.quiz.findUnique({
			where: { id },
			select: {
				id: true,
				courseId: true,
				status: true,
				maxAttempts: true,
			},
		});
		if (!quiz || quiz.status !== "PUBLISHED")
			return NextResponse.json({ error: "Unavailable" }, { status: 404 });

		const enrollment = await prisma.enrollment.findUnique({
			where: {
				courseId_studentId: {
					courseId: quiz.courseId,
					studentId: user.id,
				},
			},
			select: { id: true },
		});
		if (!enrollment)
			return NextResponse.json(
				{ error: "Not enrolled" },
				{ status: 403 }
			);

		const enrollmentId = enrollment.id;
		const attemptsCount = await prisma.quizAttempt.count({
			where: { quizId: id, enrollmentId },
		});
		if (quiz.maxAttempts > 0 && attemptsCount >= quiz.maxAttempts) {
			return NextResponse.json(
				{ error: "No attempts remaining" },
				{ status: 400 }
			);
		}

		// Try to find an in-progress attempt
		const existing = await prisma.quizAttempt.findFirst({
			where: { quizId: id, enrollmentId, status: "IN_PROGRESS" },
			select: { id: true },
		});
		if (existing) return NextResponse.json({ attemptId: existing.id });

		const attempt = await prisma.quizAttempt.create({
			data: { quizId: id, enrollmentId },
			select: { id: true },
		});
		return NextResponse.json({ attemptId: attempt.id });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
