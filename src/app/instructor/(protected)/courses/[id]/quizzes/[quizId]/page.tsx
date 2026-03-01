export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import ManageQuizClient from "./QuizManageClient";
import CopyButton from "@/components/Common/CopyButton";

type Params = { id: string; quizId: string };

export default async function ManageQuizPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const user = await requireUser();
	const { id, quizId } = await params;
	const courseId = Number(id);
	const qid = Number(quizId);
	if (!Number.isFinite(courseId) || !Number.isFinite(qid)) notFound();

	const quiz = await prisma.quiz.findUnique({
		where: { id: qid },
		include: {
			course: { select: { id: true, title: true, instructorId: true } },
			questions: {
				orderBy: { order: "asc" },
				include: { options: { orderBy: { order: "asc" } } },
			},
		},
	});
	if (
		!quiz ||
		quiz.course.id !== courseId ||
		quiz.course.instructorId !== user.id
	)
		notFound();

	// Analytics
	const attempts = await prisma.quizAttempt.findMany({
		where: { quizId: qid },
		select: {
			status: true,
			score: true,
			totalPoints: true,
			percentage: true,
			submittedAt: true,
		},
	});
	const totalAttempts = attempts.length;
	const submitted = attempts.filter((a) => a.status !== "IN_PROGRESS");
	const submittedCount = submitted.length;
	const avgPercentage = submittedCount
		? Math.round(
				submitted.reduce((s, a) => s + (a.percentage ?? 0), 0) /
					submittedCount
		  )
		: 0;
	const avgScore = submittedCount
		? Math.round(
				submitted.reduce((s, a) => s + (a.score ?? 0), 0) /
					submittedCount
		  )
		: 0;
	const passingScore = quiz.passingScore ?? null;
	const passRate: number | null =
		passingScore && submittedCount
			? Math.round(
					(submitted.filter(
						(a) => (a.percentage ?? 0) >= passingScore
					).length /
						submittedCount) *
						100
			  )
			: null;

	return (
		<div className="container py-5">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<h1 className="h4 mb-0">Manage Quiz – {quiz.title}</h1>
				<Link
					href={`/instructor/courses/${courseId}/quizzes`}
					className="btn btn-link p-0"
				>
					Back
				</Link>
			</div>

			<div className="row g-3 mb-4">
				<div className="col-md-8">
					<div className="card shadow-sm h-100">
						<div className="card-header bg-light fw-semibold">
							Student Link
						</div>
						<div className="card-body d-flex justify-content-between align-items-center">
							<div>
								<div className="text-muted small">
									Share with enrolled students
								</div>
								<div>
									<code>
										/learn/{courseId}/quiz/{qid}
									</code>
								</div>
							</div>
							<CopyButton
								text={`/learn/${courseId}/quiz/${qid}`}
								small
							/>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card shadow-sm h-100">
						<div className="card-header bg-light fw-semibold">
							Analytics
						</div>
						<div className="card-body">
							<div className="d-flex flex-column gap-1">
								<div>Total attempts: {totalAttempts}</div>
								<div>Submissions: {submittedCount}</div>
								<div>Avg score: {avgScore}</div>
								<div>Avg %: {avgPercentage}%</div>
								{typeof passRate === "number" ? (
									<div>Pass rate: {passRate}%</div>
								) : (
									<div className="text-muted">
										Pass rate: n/a
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<ManageQuizClient
				quiz={{
					id: quiz.id,
					title: quiz.title,
					status: quiz.status,
					totalPoints: quiz.totalPoints,
					questions: quiz.questions.map((q) => ({
						id: q.id,
						order: q.order,
						type: q.type,
						text: q.text,
						points: q.points,
						options: q.options.map((o) => ({
							id: o.id,
							order: o.order,
							text: o.text,
							isCorrect: o.isCorrect,
						})),
					})),
				}}
			/>
		</div>
	);
}
