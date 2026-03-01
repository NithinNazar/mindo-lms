export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import NewThreadForm from "./thread/NewThreadForm";

type Params = { courseId: string };

export default async function CourseCommunityPage({ params }: { params: Promise<Params> }) {
  const user = await requireUser();
  const { courseId: courseIdParam } = await params;
  const courseId = Number(courseIdParam);
  if (!Number.isFinite(courseId)) notFound();

  const course = await prisma.course.findUnique({
    where: { id: courseId },
    select: { id: true, title: true, instructorId: true },
  });
  if (!course) notFound();

  const enrollment = await prisma.enrollment.findUnique({
    where: { courseId_studentId: { courseId, studentId: user.id } },
    select: { id: true },
  });
  const isInstructor = course.instructorId === user.id || user.role === "ADMIN";
  if (!enrollment && !isInstructor) notFound();

  const threads = await prisma.discussionThread.findMany({
    where: { courseId },
    orderBy: { lastActivityAt: "desc" },
    select: {
      id: true,
      title: true,
      createdAt: true,
      lastActivityAt: true,
      author: { select: { name: true, email: true } },
      _count: { select: { posts: true } },
    },
  });

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 mb-0">Community – {course.title}</h1>
        <Link href={`/learn/${courseId}`} className="btn btn-link p-0">Back</Link>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-header bg-light fw-semibold">Start a Discussion</div>
        <div className="card-body">
          <NewThreadForm courseId={courseId} />
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-light fw-semibold">Threads</div>
        <div className="list-group list-group-flush">
          {threads.length === 0 ? (
            <div className="p-3 text-muted">No threads yet. Be the first to start one.</div>
          ) : (
            threads.map((t) => (
              <Link
                key={t.id}
                href={`/learn/${courseId}/community/${t.id}`}
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              >
                <div>
                  <div className="fw-semibold">{t.title}</div>
                  <div className="small text-muted">
                    by {t.author.name || t.author.email} • Last activity {new Date(t.lastActivityAt).toLocaleString()}
                  </div>
                </div>
                <span className="badge bg-secondary">{t._count.posts}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

