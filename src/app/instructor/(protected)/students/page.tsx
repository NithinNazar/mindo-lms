export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

export default async function InstructorStudentsPage() {
  const user = await requireUser();
  if (!(user.role === "INSTRUCTOR" || user.role === "ADMIN")) {
    return null;
  }

  // Pull enrollments for this instructor's courses
  const enrollments = await prisma.enrollment.findMany({
    where: { course: { instructorId: user.id } },
    orderBy: { enrolledAt: "desc" },
    select: {
      id: true,
      progress: true,
      lastActivityAt: true,
      enrolledAt: true,
      student: { select: { id: true, name: true, email: true, avatarUrl: true } },
      course: { select: { id: true, title: true, slug: true } },
    },
  });

  // Group by student
  type Row = {
    studentId: string;
    name: string;
    email: string;
    avatarUrl: string | null;
    courses: { id: number; title: string; slug: string; progress: number }[];
    enrolledCount: number;
    avgProgress: number;
    lastActivity: Date | null;
  };

  const map = new Map<string, Row>();
  for (const e of enrollments) {
    const key = e.student.id;
    if (!map.has(key)) {
      map.set(key, {
        studentId: e.student.id,
        name: e.student.name,
        email: e.student.email,
        avatarUrl: e.student.avatarUrl ?? null,
        courses: [],
        enrolledCount: 0,
        avgProgress: 0,
        lastActivity: e.lastActivityAt ?? e.enrolledAt,
      });
    }
    const row = map.get(key)!;
    row.courses.push({ id: e.course.id, title: e.course.title, slug: e.course.slug, progress: e.progress ?? 0 });
    row.enrolledCount += 1;
    row.avgProgress += e.progress ?? 0;
    const la = e.lastActivityAt ?? e.enrolledAt;
    if (!row.lastActivity || la > row.lastActivity) row.lastActivity = la;
  }
  const rows = Array.from(map.values()).map((r) => ({ ...r, avgProgress: r.enrolledCount ? Math.round(r.avgProgress / r.enrolledCount) : 0 }));

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 mb-0">My Students</h1>
        <Link href="/instructor/dashboard" className="btn btn-link p-0">Back to Dashboard</Link>
      </div>

      {rows.length === 0 ? (
        <div className="alert alert-info">No students yet.</div>
      ) : (
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Student</th>
                  <th>Courses</th>
                  <th>Avg Progress</th>
                  <th>Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.studentId}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        {r.avatarUrl ? (
                          <Image src={r.avatarUrl} alt={r.name} width={32} height={32} className="rounded-circle object-fit-cover" />
                        ) : (
                          <div className="rounded-circle bg-light" style={{ width: 32, height: 32 }} />
                        )}
                        <div className="d-flex flex-column">
                          <span className="fw-semibold">{r.name || r.email}</span>
                          <span className="small text-muted">{r.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="vstack gap-2">
                        {r.courses.map((c) => (
                          <div key={c.id} className="d-flex align-items-center gap-2">
                            <Link href={`/course/${c.slug}`} className="link-body-emphasis text-decoration-none">
                              {c.title}
                            </Link>
                            <div className="progress flex-grow-1" style={{ height: 6 }}>
                              <div className="progress-bar" style={{ width: `${c.progress}%` }} />
                            </div>
                            <span className="small text-muted" style={{ width: 36, textAlign: "right" }}>{c.progress}%</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary-subtle text-primary">{r.avgProgress}%</span>
                    </td>
                    <td className="text-muted small">{r.lastActivity ? new Date(r.lastActivity).toLocaleString() : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

