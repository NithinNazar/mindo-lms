import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ courseId: string }> }
) {
	const { courseId: courseIdParam } = await params;
	try {
		const user = await requireUser();
		const courseId = Number(courseIdParam);
		if (!Number.isFinite(courseId))
			return NextResponse.json({ error: "Bad course" }, { status: 400 });

		const enrollment = await prisma.enrollment.findUnique({
			where: { courseId_studentId: { courseId, studentId: user.id } },
			select: { id: true },
		});
		if (!enrollment)
			return NextResponse.json(
				{ error: "Not enrolled" },
				{ status: 403 }
			);

		const quizzes = await prisma.quiz.findMany({
			where: { courseId, status: "PUBLISHED" },
			orderBy: { id: "asc" },
			select: {
				id: true,
				title: true,
				timeLimitSec: true,
				maxAttempts: true,
				totalPoints: true,
			},
		});
		return NextResponse.json({ quizzes });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
