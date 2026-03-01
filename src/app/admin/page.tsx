import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminCoursesPage() {
  const [
    totalCount,
    publishedCount,
    draftCount,
    holdCount,
    rejectedCount,
    pendingCount,
    pendingInstructorApps,
  ] = await Promise.all([
    prisma.course.count(),
    prisma.course.count({ where: { status: "PUBLISHED" } }),
    prisma.course.count({ where: { status: "DRAFT" } }),
    prisma.course.count({ where: { status: "HOLD" } }),
    prisma.course.count({ where: { status: "REJECTED" } }),
    prisma.course.count({ where: { status: "PENDING" } }),
    prisma.instructorApplication.count({ where: { status: "PENDING" } }),
  ]);

  // Approximate total checkout amount: sum of course prices for all enrollments of paid courses.
  const revenueGroups = await prisma.enrollment.groupBy({
    by: ["courseId"],
    _count: { _all: true },
    where: { course: { isFree: false } },
  });
  const revCourseIds = revenueGroups.map((g) => g.courseId);
  const priceRows = revCourseIds.length
    ? await prisma.course.findMany({
        where: { id: { in: revCourseIds } },
        select: { id: true, price: true },
      })
    : [];
  const priceMap = new Map(priceRows.map((r) => [r.id, Number(r.price)]));
  const totalCheckout = revenueGroups.reduce((sum, g) => {
    const price = priceMap.get(g.courseId) ?? 0;
    const count = (g as any)._count?._all ?? g._count ?? 0;
    return sum + price * count;
  }, 0);

  return (
    <div className="container">
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <h3 className="font-bold m-0">Admin Dashboard</h3>
        <Link
          href="/admin"
          className="btn btn-outline-secondary"
          style={{ fontSize: "14px" }}
        >
          Admin Home
        </Link>
      </div>

      {/* Stats cards */}
      <div className="row g-3 mb-4">
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small mb-1">Total</div>
              <div className="h4 mb-0">{totalCount}</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small mb-1">Published</div>
              <div className="h4 mb-0">
                <span className="badge bg-success">{publishedCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small mb-1">Draft</div>
              <div className="h4 mb-0">
                <span className="badge bg-secondary">{draftCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small mb-1">Hold</div>
              <div className="h4 mb-0">
                <span className="badge bg-warning text-dark">{holdCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small mb-1">Rejected</div>
              <div className="h4 mb-0">
                <span className="badge bg-danger">{rejectedCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small mb-1">Pending</div>
              <div className="h4 mb-0">
                <span className="badge bg-info">{pendingCount}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="text-muted small mb-1">Total Checkout</div>
              <div className="h4 mb-0">{totalCheckout.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body d-flex flex-wrap gap-2">
          <Link
            href="/admin/categories"
            className="btn btn-outline-primary btn-sm"
          >
            Manage Categories
          </Link>
          <Link
            href="/admin/subcategories"
            className="btn btn-outline-primary btn-sm"
          >
            Manage Subcategories
          </Link>
          <Link
            href="/admin/announcement"
            className="btn btn-outline-primary btn-sm"
          >
            Manage Top Banner
          </Link>
          <Link
            href="/admin/feedback"
            className="btn btn-outline-primary btn-sm"
          >
            Manage Testimonials
          </Link>
          <Link
            href="/admin/instructor-requests"
            className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2"
          >
            Instructor Requests
            {pendingInstructorApps > 0 ? (
              <span className="badge bg-warning text-dark">{pendingInstructorApps}</span>
            ) : null}
          </Link>
        </div>
      </div>

      {/* Courses management link */}
      <div className="card border-0 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title mb-1">Courses</h5>
            <p className="text-muted mb-0">
              Review, approve, hold, or delete instructor courses.
            </p>
          </div>
          <Link href="/admin/courses" className="btn btn-dark">
            Go to Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
