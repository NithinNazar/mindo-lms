import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { demoReadOnlyError } from "@/lib/demo";

type AnswerInput = {
	questionId: number;
	selectedOptionIds?: number[] | null;
	answerText?: string | null;
	numericAnswer?: number | null;
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
		const body = (await req.json()) as {
			attemptId?: number;
			answers?: AnswerInput[];
		};
		const attemptId = Number(body.attemptId);
		if (!Number.isFinite(attemptId))
			return NextResponse.json(
				{ error: "Bad attemptId" },
				{ status: 400 }
			);

		const attempt = await prisma.quizAttempt.findUnique({
			where: { id: attemptId },
			include: {
				quiz: { select: { id: true, courseId: true } },
				enrollment: { select: { studentId: true } },
			},
		});
		if (!attempt || attempt.enrollment.studentId !== user.id)
			return NextResponse.json({ error: "Not found" }, { status: 404 });

		// Load questions/options
		const questions = await prisma.quizQuestion.findMany({
			where: { quizId: attempt.quiz.id },
			include: { options: true },
		});
		const qMap = new Map(questions.map((q) => [q.id, q]));

		const answers = Array.isArray(body.answers) ? body.answers : [];
		// Upsert answers
		for (const a of answers) {
			const q = qMap.get(a.questionId);
			if (!q) continue;
			await prisma.quizAnswer.upsert({
				where: {
					attemptId_questionId: { attemptId, questionId: q.id },
				},
				update: {
					selectedOptionIds: a.selectedOptionIds
						? (a.selectedOptionIds as any)
						: null,
					answerText: a.answerText ?? null,
					numericAnswer: a.numericAnswer ?? null,
					answeredAt: new Date(),
				},
				create: {
					attemptId,
					questionId: q.id,
					selectedOptionIds: a.selectedOptionIds
						? (a.selectedOptionIds as any)
						: null,
					answerText: a.answerText ?? null,
					numericAnswer: a.numericAnswer ?? null,
					answeredAt: new Date(),
				},
			});
		}

		// Auto-grade simple types
		const saved = await prisma.quizAnswer.findMany({
			where: { attemptId },
		});
		let totalPoints = 0;
		let score = 0;

		for (const q of questions) {
			totalPoints += q.points;
			const ans = saved.find((a) => a.questionId === q.id);
			let isCorrect: boolean | null = null;
			if (!ans) {
				isCorrect = false;
			} else if (q.type === "TRUE_FALSE" || q.type === "SINGLE_CHOICE") {
				const correct = q.options
					.filter((o) => o.isCorrect)
					.map((o) => o.id);
				const sel =
					(ans.selectedOptionIds as any as number[] | null) ?? [];
				isCorrect =
					sel.length === 1 &&
					correct.length === 1 &&
					sel[0] === correct[0];
			} else if (q.type === "MULTIPLE_CHOICE") {
				const correct = q.options
					.filter((o) => o.isCorrect)
					.map((o) => o.id)
					.sort();
				const sel = (
					(ans.selectedOptionIds as any as number[] | null) ?? []
				)
					.slice()
					.sort();
				isCorrect = JSON.stringify(correct) === JSON.stringify(sel);
			} else if (q.type === "NUMERIC") {
				// No canonical answer stored; leave null for manual grading
				isCorrect = null;
			} else if (q.type === "SHORT_TEXT" || q.type === "LONG_TEXT") {
				isCorrect = null;
			}

			await prisma.quizAnswer.update({
				where: {
					attemptId_questionId: { attemptId, questionId: q.id },
				},
				data: {
					isCorrect: isCorrect === null ? null : isCorrect,
					earnedPoints: isCorrect ? q.points : 0,
				},
			});

			if (isCorrect) score += q.points;
		}

		const percentage =
			totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;
		await prisma.quizAttempt.update({
			where: { id: attemptId },
			data: {
				submittedAt: new Date(),
				durationSec: null,
				status: "SUBMITTED",
				score,
				totalPoints,
				percentage,
			},
		});

		return NextResponse.json({ ok: true, score, totalPoints, percentage });
	} catch (e: any) {
		return NextResponse.json(
			{ error: e?.message ?? "Unexpected error" },
			{ status: 500 }
		);
	}
}
