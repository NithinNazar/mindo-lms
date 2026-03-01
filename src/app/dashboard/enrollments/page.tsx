// src/app/dashboard/enrollments/page.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

export default async function EnrollmentsPage() {
  const user = await requireUser();

  const enrollments = await prisma.enrollment.findMany({
    where: { studentId: user.id },
    orderBy: { enrolledAt: "desc" },
    include: {
      course: {
        select: {
          id: true,
          slug: true,
          title: true,
          thumbnailUrl: true,
          shortDescription: true,
        },
      },
    },
  });

  return (
    <div className="container">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">My Enrollments</h4>
        <Link href="/dashboard" className="btn btn-link p-0">
          Back to Dashboard
        </Link>
      </div>

      {enrollments.length === 0 ? (
        <div className="alert alert-info" role="alert">
          You haven’t enrolled in any courses yet.
        </div>
      ) : (
        <div className="row g-4">
          {enrollments.map((enr) => {
            const { course } = enr;
            const progress = Math.max(0, Math.min(100, enr.progress ?? 0));
            return (
              <div key={enr.id} className="col-12 col-md-6 col-xl-4">
                <div className="card h-100 shadow-sm">
                  {/* Cover */}
                  <div
                    className="position-relative bg-light"
                    style={{ height: 176 }}
                  >
                    {course.thumbnailUrl ? (
                      <Image
                        src={course.thumbnailUrl}
                        alt={course.title}
                        fill
                        className="card-img-top object-fit-cover"
                        sizes="(max-width: 1200px) 100vw, 33vw"
                      />
                    ) : null}
                  </div>

                  <div className="card-body d-flex flex-column">
                    <h3
                      className="h6 fw-semibold mb-2 text-truncate"
                      title={course.title}
                    >
                      {course.title}
                    </h3>
                    {course.shortDescription ? (
                      <p
                        className="text-muted small mb-3"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {course.shortDescription}
                      </p>
                    ) : null}

                    {/* Progress */}
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="small text-muted">Progress</span>
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
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto d-flex align-items-center gap-2">
                      <Link
                        href={`/learn/${course.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        {progress > 0 ? "Continue Learning" : "Start Learning"}
                      </Link>
                      <Link
                        href={`/course/${course.slug}`}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
