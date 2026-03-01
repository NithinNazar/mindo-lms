export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import QuizAttemptClient from "./QuizAttemptClient";

type Params = { courseId: string; quizId: string };

export default async function QuizAttemptPage({ params }: { params: Promise<Params> }) {
  const user = await requireUser();
  const { courseId: courseIdParam, quizId: quizIdParam } = await params;
  const courseId = Number(courseIdParam);
  const quizId = Number(quizIdParam);
  if (!Number.isFinite(courseId) || !Number.isFinite(quizId)) notFound();

  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    include: {
      course: { select: { id: true, title: true } },
      questions: { orderBy: { order: "asc" }, include: { options: { orderBy: { order: "asc" } } } },
    },
  });
  if (!quiz || quiz.course.id !== courseId || quiz.status !== "PUBLISHED") notFound();

  const enrollment = await prisma.enrollment.findUnique({
    where: { courseId_studentId: { courseId, studentId: user.id } },
    select: { id: true },
  });
  if (!enrollment) notFound();

  // Ensure we have an in-progress attempt (respecting attempts limit)
  const attemptsCount = await prisma.quizAttempt.count({ where: { quizId, enrollmentId: enrollment.id } });
  if (quiz.maxAttempts > 0 && attemptsCount >= quiz.maxAttempts) {
    notFound();
  }

  let attempt = await prisma.quizAttempt.findFirst({ where: { quizId, enrollmentId: enrollment.id, status: "IN_PROGRESS" } });
  if (!attempt) {
    attempt = await prisma.quizAttempt.create({ data: { quizId, enrollmentId: enrollment.id } });
  }

  return (
    <QuizAttemptClient
      courseId={courseId}
      quiz={{
        id: quiz.id,
        title: quiz.title,
        timeLimitSec: quiz.timeLimitSec ?? null,
        totalPoints: quiz.totalPoints,
        questions: quiz.questions.map((q) => ({
          id: q.id,
          order: q.order,
          type: q.type,
          text: q.text,
          points: q.points,
          options: q.options.map((o) => ({ id: o.id, text: o.text })),
        })),
      }}
      attemptId={attempt.id}
    />
  );
}

