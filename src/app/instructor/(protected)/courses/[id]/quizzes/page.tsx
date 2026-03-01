export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import CourseQuizzesManager from "./CourseQuizzesManager";

type Params = { id: string };

export default async function CourseQuizzesPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const user = await requireUser();
  const { id } = await params;
  const courseId = Number(id);
  if (!Number.isFinite(courseId)) notFound();

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { id: true, title: true, instructorId: true },
  });
  if (!course || course.instructorId !== user.id) notFound();

  const quizzes = await prisma.quiz.findMany({
    where: { courseId },
    orderBy: { id: "desc" },
    select: { id: true, title: true, status: true, totalPoints: true },
  });

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 mb-0">Quizzes – {course.title}</h1>
        <Link href={`/instructor/courses/${courseId}/edit`} className="btn btn-link p-0">
          Back to Course
        </Link>
      </div>

      <CourseQuizzesManager courseId={courseId} initialQuizzes={quizzes} />
    </div>
  );
}
