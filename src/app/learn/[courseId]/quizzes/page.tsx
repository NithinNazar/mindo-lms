export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

type Params = { courseId: string };

export default async function CourseQuizzesList({ params }: { params: Promise<Params> }) {
  const user = await requireUser();
  const { courseId: courseIdParam } = await params;
  const courseId = Number(courseIdParam);
  if (!Number.isFinite(courseId)) notFound();

  const enrollment = await prisma.enrollment.findUnique({
    where: { courseId_studentId: { courseId, studentId: user.id } },
    select: { id: true, course: { select: { title: true } } },
  });
  if (!enrollment) notFound();

  const quizzes = await prisma.quiz.findMany({
    where: { courseId, status: "PUBLISHED" },
    orderBy: { id: "asc" },
    select: { id: true, title: true, timeLimitSec: true, maxAttempts: true, totalPoints: true },
  });

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 mb-0">Quizzes – {enrollment.course.title}</h1>
        <Link href={`/learn/${courseId}`} className="btn btn-link p-0">Back to Learn</Link>
      </div>

      {quizzes.length === 0 ? (
        <div className="text-muted">No quizzes are available yet.</div>
      ) : (
        <ul className="list-group">
          {quizzes.map((q) => (
            <li key={q.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-semibold">{q.title}</div>
                <div className="small text-muted">
                  Points: {q.totalPoints} {q.timeLimitSec ? `• Time: ${q.timeLimitSec}s` : ""} {q.maxAttempts ? `• Attempts: ${q.maxAttempts}` : ""}
                </div>
              </div>
              <Link href={`/learn/${courseId}/quiz/${q.id}`} className="btn btn-primary btn-sm">Start</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

